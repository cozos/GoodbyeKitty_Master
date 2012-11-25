/**
 * Its Fuzzle.
 * @constructor
 */
function fuzzle(){
	//Image attributes
	this.ImageFile = document.getElementById("fuzzle");
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;

	this.FuzzleFlying1 = document.getElementById("fuzzle1");
	this.FF1width = this.FuzzleFlying1.width * g_resize * 0.2;
	this.FF1height = this.FuzzleFlying1.height * g_resize * 0.2;

	this.FuzzleFlying2 = document.getElementById("fuzzle2");
	this.FF2width = this.FuzzleFlying2.width * g_resize * 0.2;
	this.FF2height = this.FuzzleFlying2.height * g_resize * 0.2;

	this.FuzzleFlying3 = document.getElementById("fuzzle3");
	this.FF3width = this.FuzzleFlying3.width * g_resize * 0.2;
	this.FF3height = this.FuzzleFlying3.height * g_resize * 0.2;

	this.FuzzleFlying4 = document.getElementById("fuzzle4");
	this.FF4width = this.FuzzleFlying4.width * g_resize * 0.2;
	this.FF4height = this.FuzzleFlying4.height * g_resize * 0.2;

	this.FuzzleFlyingR = document.getElementById("fuzzleRelease");
	this.FFRwidth = this.FuzzleFlyingR.width * g_resize * 0.2;
	this.FFRheight = this.FuzzleFlyingR.height * g_resize * 0.2;

	this.FuzzleD1 = document.getElementById("fuzzledead1");
	this.FD1width = this.FuzzleD1.width * g_resize * 0.2;
	this.FD1height = this.FuzzleD1.height * g_resize * 0.2;

	this.FuzzleD2 = document.getElementById("fuzzledead2");
	this.FD2width = this.FuzzleD2.width * g_resize * 0.2;
	this.FD2height = this.FuzzleD2.height * g_resize * 0.2;

	this.FuzzleD3 = document.getElementById("fuzzledead3");
	this.FD3width = this.FuzzleD3.width * g_resize * 0.2;
	this.FD3height = this.FuzzleD3.height * g_resize * 0.2;

	this.FuzzleD4 = document.getElementById("fuzzledead4");
	this.FD4width = this.FuzzleD4.width * g_resize * 0.2;
	this.FD4height = this.FuzzleD4.height * g_resize * 0.2;

	this.FuzzleD5 = document.getElementById("fuzzledead5");
	this.FD5width = this.FuzzleD5.width * g_resize * 0.2;
	this.FD5height = this.FuzzleD5.height * g_resize * 0.2;

	this.FuzzleD6 = document.getElementById("fuzzledead6");
	this.FD6width = this.FuzzleD6.width * g_resize * 0.2;
	this.FD6height = this.FuzzleD6.height * g_resize * 0.2;

	this.FuzzleD7 = document.getElementById("fuzzledead7");
	this.FD7width = this.FuzzleD7.width * g_resize * 0.2;
	this.FD7height = this.FuzzleD7.height * g_resize * 0.2;

	this.FuzzleD8 = document.getElementById("fuzzledead8");
	this.FD8width = this.FuzzleD8.width * g_resize * 0.2;
	this.FD8height = this.FuzzleD8.height * g_resize * 0.2;

	this.FuzzleD9 = document.getElementById("fuzzledead9");
	this.FD9width = this.FuzzleD9.width * g_resize * 0.2;
	this.FD9height = this.FuzzleD9.height * g_resize * 0.2;


	
	//Fuzzle attributes
	this.lives = 1;
	this.score = 0;
	this.health = 0;
	this.velocity = 0;
	this.gravity = 1;
	this.posx = 0.15 * g_canvas.width;
	this.posy = 0.5 * g_canvas.height;
    this.flag = 0;
	this.counter = 0;
	this.state = 0;
	this.upPressed = false;
}

/**
 * Renders Fuzzle.
 */
fuzzle.prototype.render = function(){
        
	// Updates Fuzzle's velocity and position.
	this.velocity += this.gravity;
	this.posy += this.velocity;

	if (g_gameState == "inlevel")
	{
		// If player crashes into the floor
		if ((this.posy + this.height) > g_canvas.height)
		{
			this.posy = (g_canvas.height - this.height - 0.5);
			this.velocity = 0;		
		}
	
		// If player crashes into the ceiling
		if (this.posy < 0)
		{
			this.posy = 0 + 0.5;
			this.velocity = 0;
		}

		// Makes the wings flutter
		if (this.counter == 2)
		{
			this.state += 1;
			if (this.state == 5)
			{
				this.state = 0;
				if (this.upPressed == false)
				{
					this.counter = -20;
				}
			}
			if (this.counter >= 0)
			{
				this.counter = 0;
			}
		}
		this.counter++;
	}

	if (this.gravity < 2) this.gravity += 2;
	
	// Draws the image

	if (this.state == 0)
	{
	g_context.drawImage(this.FuzzleFlyingR, this.posx, this.posy, this.FFRwidth, this.FFRheight);
	}
	else if (this.state == 1)
	{
	g_context.drawImage(this.FuzzleFlying1, this.posx, this.posy, this.FF1width, this.FF1height);
	}
	else if (this.state == 2)
	{
	g_context.drawImage(this.FuzzleFlying2, this.posx, this.posy, this.FF2width, this.FF2height);
	}
	else if (this.state == 3)
	{
	g_context.drawImage(this.FuzzleFlying3, this.posx, this.posy, this.FF3width, this.FF3height);
	}
	else if (this.state == 4)
	{
	g_context.drawImage(this.FuzzleFlying4, this.posx, this.posy, this.FF4width, this.FF4height);
	}
	else if (this.state == 5)
	{
	g_context.drawImage(this.FuzzleD1, this.posx, this.posy, this.FD1width, this.FD1height);
	}
	else if (this.state == 6)
	{
	g_context.drawImage(this.FuzzleD2, this.posx, this.posy, this.FD2width, this.FD2height);
	}
	else if (this.state == 7)
	{
	g_context.drawImage(this.FuzzleD3, this.posx, this.posy, this.FD3width, this.FD3height);
	}
	else if (this.state == 8)
	{
	g_context.drawImage(this.FuzzleD4, this.posx, this.posy, this.FD4width, this.FD4height);
	}
	else if (this.state == 9)
	{
	g_context.drawImage(this.FuzzleD5, this.posx, this.posy, this.FD5width, this.FD5height);
	}
	else if (this.state == 10)
	{
	g_context.drawImage(this.FuzzleD6, this.posx, this.posy, this.FD6width, this.FD6height);
	}
	else if (this.state == 11)
	{
	g_context.drawImage(this.FuzzleD7, this.posx, this.posy, this.FD7width, this.FD7height);
	}
	else if (this.state == 12)
	{
	g_context.drawImage(this.FuzzleD8, this.posx, this.posy, this.FD8width, this.FD8height);
	}
	else if (this.state == 13)
	{
	g_context.drawImage(this.FuzzleD9, this.posx, this.posy, this.FD9width, this.FD9height);
	}

	if (g_gameState == "gameovercutscene")
	{
		if (this.state < 12)
		{
			this.state++;
		}

		if (g_fuzzle.posy > g_canvas.height)
		{
			clearInterval(g_renderInterval);
			g_levelDirector = new LevelDirector();
			g_levelDirector.gameOver();
		}
	}
}

/**
 * What happens when fuzzle collides into something.
 */
fuzzle.prototype.collidedpowerup = function(){
	var a = new Alliance("angelalliance", g_alliance.length*g_canvas.width * 0.05, 9+g_alliance.length*2);
	g_alliance.push(a);
}

fuzzle.prototype.collidedobstacle = function(){
	
	if(g_alliance.length == 0){	
    g_fuzzle.lives -= 1;
    g_keys = [];
    g_mouseDown = false;
	}
	else if(g_alliance.length > 0){
		g_alliance[0].posx = -300;
		g_alliance.splice(0,1);
	}
}

/**
* Makes Fuzzle go up.
*/  
fuzzle.prototype.up = function(){
    
    // Going up is a pain in the ass without this
    if (this.velocity > 0){
    this.velocity = 0;
    }
    
    //Accelerates upwards
    this.gravity = -2;  
    
    g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);	  
}

