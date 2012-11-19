/**
 * Its an obstacle.
 * @constructor
 * @param string $element 
 *      The name of the img element that will be fetched.
 * @param int $velocity
 *      The speed that the obstacle scrolls left at (negative number)
 */
function Powerup(element,velocity){
	// Image attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * 0.8 * g_resize;
	this.height = this.ImageFile.height * 0.8 * g_resize;
	
	// Powerup attributes
	this.type = element;
	this.xvelocity = velocity;
	this.posx = g_canvas.width;
	this.posy = Math.round((Math.random()*g_canvas.height));
	if (this.posy + this.height > g_canvas.height)	 this.posy = (g_canvas.height - this.height - 1.5);
	this.gravity = Math.random()*0.5 - 0.25;
	this.yvelocity = 0;
	this.counter = Math.round(Math.random()*5 + 5);
};

/**
 * Renders powerup.
 */
Powerup.prototype.render = function(){

	//Speed of powerup will increase when the level increases
	var scrollRate = Math.pow(1.25,(g_levelDirector.myCurrentLevel))
	
	// IF POWERUP IS OF TYPE POWERUP
	if (this.type == "powerup")
	   {
		// Makes sure that powerup move in one path for a while to prevent erratic movement
		if (this.counter == 0){
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = Math.random()*0.5 - 0.265;
		}
	
		// Updates gravity and y coordinate of devil
		this.yvelocity += this.gravity;	
		this.posy += this.yvelocity;
		this.counter--;
	
		// If powerup crashes into the floor, reset direction
		if ((this.posy + this.height) > g_canvas.height)
		{
			this.posy = (g_canvas.height - this.height - 1.5);
			this.yvelocity = 0;		
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = (Math.random()*-0.25);
		}
		// If powerup crashes into the ceiling, reset direction
		if (this.posy < 0)
		{
			this.posy = 0 + 1.5;
			this.yvelocity = 5;
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = (Math.random()*0.25);
		}

		if (this.posx <= -1 * this.width)
		{
			g_powerupFlag = 0;
		}
	  }

	// IF POWERUP IS OF TYPE EXTRA LIVE
	//else if (this.type == "pillar"){
		//nothing?
	//}

	
	// Update x coordinate of obstacle
    this.posx -= (this.xvelocity * scrollRate);
  	
  	// Render the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);
}



/**
 * What happens when an obstacle collides into something. For now, the obstacle dissapears.
 */
Powerup.prototype.collided = function(){
	// TODO
	this.posx = -100;
	g_powerupCollisionFlag = true;
}