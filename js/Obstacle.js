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
	this.Hitboxtest = document.getElementById("hitbox");

	this.ImageFile = document.getElementById(element);
	if (element == "health" || element == "powerup"){
	this.width = this.ImageFile.width * g_resize * 0.6;
	this.height = this.ImageFile.height * g_resize * 0.6;
	} else if (element == "pillar" || element == "devil"){
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;
	}

	this.healthD1 = document.getElementById("healthD1");
	this.HD1width = this.healthD1.width * g_resize * 0.2;
	this.HD1height = this.healthD1.height * g_resize * 0.2;
	this.healthD2 = document.getElementById("healthD2");
	this.HD2width = this.healthD2.width * g_resize * 0.2;
	this.HD2height = this.healthD2.height * g_resize * 0.2;
	this.healthD3 = document.getElementById("healthD3");
	this.HD3width = this.healthD3.width * g_resize * 0.2;
	this.HD3height = this.healthD3.height * g_resize * 0.2;
	this.healthD4 = document.getElementById("healthD4");
	this.HD4width = this.healthD4.width * g_resize * 0.2;
	this.HD4height = this.healthD4.height * g_resize * 0.2;
	this.healthD5 = document.getElementById("healthD5");
	this.HD5width = this.healthD5.width * g_resize * 0.2;
	this.HD5height = this.healthD5.height * g_resize * 0.2;
	this.healthDeathCounter = 0;
	this.healthDeathFlag = 0;
	this.healthDeathArray = [];
	this.healthDeathArray.push(this.healthD1);
	this.healthDeathArray.push(this.healthD2);
	this.healthDeathArray.push(this.healthD3);
	this.healthDeathArray.push(this.healthD4);
	this.healthDeathArray.push(this.healthD5);

	this.powerupD1 = document.getElementById("powerupD1");
	this.PUD1width = this.powerupD1.width * g_resize * 0.2;
	this.PUD1height = this.powerupD1.height * g_resize * 0.2;
	this.powerupD2 = document.getElementById("powerupD2");
	this.PUD2width = this.powerupD2.width * g_resize * 0.2;
	this.PUD2height = this.powerupD2.height * g_resize * 0.2;
	this.powerupD3 = document.getElementById("powerupD3");
	this.PUD3width = this.powerupD3.width * g_resize * 0.2;
	this.PUD3height = this.powerupD3.height * g_resize * 0.2;
	this.powerupD4 = document.getElementById("powerupD4");
	this.PUD4width = this.powerupD4.width * g_resize * 0.2;
	this.PUD4height = this.powerupD4.height * g_resize * 0.2;
	this.powerupD5 = document.getElementById("powerupD5");
	this.PUD5width = this.powerupD5.width * g_resize * 0.2;
	this.PUD5height = this.powerupD5.height * g_resize * 0.2;
	this.powerupDeathCounter = 0;
	this.powerupDeathFlag = 0;
	this.powerupDeathArray = [];
	this.powerupDeathArray.push(this.powerupD1);
	this.powerupDeathArray.push(this.powerupD2);
	this.powerupDeathArray.push(this.powerupD3);
	this.powerupDeathArray.push(this.powerupD4);
	this.powerupDeathArray.push(this.powerupD5);

	this.pillarDeathCounter = 0;
	this.devilDeathCounter = 0;
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
obstacle.prototype.render = function(dummy){

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

		if (this.powerupDeathFlag > 0)
		{
			this.powerupDeathCounter = Math.floor(this.powerupDeathFlag/100);
			g_context.drawImage(this.powerupDeathArray[this.powerupDeathCounter], g_fuzzle.posx - g_canvas.width*0.15, g_fuzzle.posy - g_canvas.height*0.18, this.powerupDeathArray[this.powerupDeathCounter].width * g_resize * 0.5, this.powerupDeathArray[this.powerupDeathCounter].height * g_resize * 0.5);
			if(this.powerupDeathCounter < 4)
			{
				this.powerupDeathFlag++;
				if(this.powerupDeathCounter == 5)
				{
					this.powerupDeathFlag = 0;
				}
			}
		}
		if (this.healthDeathFlag > 0)
		{
			this.healthDeathCounter = Math.floor(this.healthDeathFlag/100);
			g_context.drawImage(this.healthDeathArray[this.healthDeathCounter], g_fuzzle.posx - g_canvas.width*0.15, g_fuzzle.posy - g_canvas.height*0.18, this.healthDeathArray[this.healthDeathCounter].width * g_resize * 0.5, this.healthDeathArray[this.healthDeathCounter].height * g_resize * 0.5);
			if(this.healthDeathCounter < 4)
			{
				this.healthDeathFlag++;
				if(this.healthDeathCounter == 5)
				{
					this.healthDeathFlag = 0;
				}
			}
		}
	}

	if (g_gameState == "inlevel" || g_gameState == "gameovercutscene" || g_gameState == "hellcutscene")
	{
  	// Render the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);

		g_context.drawImage(this.Hitboxtest, this.posx, this.posy);
		g_context.drawImage(this.Hitboxtest, this.posx, this.posy+this.height);
		g_context.drawImage(this.Hitboxtest, this.posx+this.width, this.posy);
		g_context.drawImage(this.Hitboxtest, this.posx+this.width, this.posy +this.height);

	}
}



/**
 * What happens when an obstacle collides into something. For now, the obstacle dissapears.
 */
obstacle.prototype.collided = function(){
	if (this.type == "powerup")
	{
		this.powerupDeathFlag = 1;
		this.posx = -300;
	 	return "powerup";
	}
	else if (this.type == "health")
	{
		this.healthDeathFlag = 1;
		this.posx = -300;
	 	return "health";
	}
	else if (this.type == "pillar"){
		g_pillarDeathCounter = 1;

	g_afterEffects = new AfterEffects("pillar", this.posx,this.posy);
		this.posx = -300;
		return "pillar";
	}
	else if (this.type == "devil"){
		g_devilDeathCounter = 1;

	g_afterEffects = new AfterEffects("devil", this.posx,this.posy);
		this.posx = -300;
		return "devil";
	}
}