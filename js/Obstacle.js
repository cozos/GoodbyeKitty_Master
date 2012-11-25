/**
 * Its an obstacle.
 * @constructor
 * @param string $element 
 *      The name of the img element that will be fetched.
 * @param int $velocity
 *      The speed that the obstacle scrolls left at (negative number)
 */
function obstacle(element,velocity){
	// Image attributes
	this.ImageFile = document.getElementById(element);
	if (element == "health" || element == "powerup"){
	this.width = this.ImageFile.width * g_resize * 0.6;
	this.height = this.ImageFile.height * g_resize * 0.6;
	} else if (element == "pillar" || element == "devil"){
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;
	}
	this.lives = 1;
	
	// Obstacle attributes
	this.type = element;
	this.xvelocity = velocity;
	this.posx = g_canvas.width;
	this.posy = Math.round((Math.random()*g_canvas.height));
	if (this.posy + this.height > g_canvas.height)	 this.posy = (g_canvas.height - this.height - 1.5);
	
	// Devil attributes
	this.gravity = Math.random()*0.5 - 0.25;
	this.yvelocity = 0;
	this.counter = Math.round(Math.random()*5 + 5);
}

/**
 * Renders obstacles.
 */
obstacle.prototype.render = function(){

	//Speed of obstacles will increase when the level increases
	var scrollRate = Math.pow(1.25,(g_levelDirector.myCurrentLevel))
	
	// IF OBSTACLE IS OF TYPE DEVIL
	if (this.type == "devil" || this.type == "powerup"){
		
		// Makes sure that devils move in one path for a while to prevent erratic movement
		if (this.counter == 0){
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = Math.random()*0.5 - 0.265;
		}
	
		// Updates gravity and y coordinate of devil
		this.yvelocity += this.gravity;	
		this.posy += this.yvelocity;
		this.counter--;
	
		// If devil crashes into the floor, reset direction
		if ((this.posy + this.height) > g_canvas.height)
		{
			this.posy = (g_canvas.height - this.height - 1.5);
			this.yvelocity = 0;		
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = (Math.random()*-0.25);
		}
		// If devil crashes into the ceiling, reset direction
		if (this.posy < 0)
		{
			this.posy = 0 + 1.5;
			this.yvelocity = 5;
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = (Math.random()*0.25);
		}
	}
	
	// IF OBSTACLE IS OF TYPE PILLAR
	else if (this.type == "pillar" || this.type == "health"){
		//nothing?
	}
	
	if (g_gameState == "inlevel")
	{
	// Update x coordinate of obstacle
	this.posx += (this.xvelocity * scrollRate);
	}

	if (g_gameState == "inlevel" || g_gameState == "gameovercutscene")
	{
  	// Render the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);
	}
}



/**
 * What happens when an obstacle collides into something. For now, the obstacle dissapears.
 */
obstacle.prototype.collided = function(){
	this.posx = -300;
	if (this.type == "powerup"){	
		 	return 1;
	}
	else if (this.type == "health"){
			return 2;
	}
	else{
		return false;
	}
	
}