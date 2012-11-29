/**
 * Its Fuzzle.
 * @constructor
 */
function fuzzle(){
	//this.Hitboxtest = document.getElementById("hitbox");
	
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

	this.FuzzleFlyingR = document.getElementById("fuzzleRelease");
	this.FFRwidth = this.FuzzleFlyingR.width * g_resize * 0.2;
	this.FFRheight = this.FuzzleFlyingR.height * g_resize * 0.2;

	this.fuzzlearray = [];
	this.fuzzlearray.push(this.FuzzleFlyingR);
	this.fuzzlearray.push(this.FuzzleFlying2);
	this.fuzzlearray.push(this.FuzzleFlying3);

	this.FuzzleLaserR = document.getElementById("fuzzleLaser1");
	this.FLRwidth = this.FuzzleLaserR.width * g_resize * 0.2;
	this.FLRheight = this.FuzzleLaserR.height * g_resize * 0.2;
	this.FuzzleLaser2 = document.getElementById("fuzzleLaser2");
	this.FL2width = this.FuzzleLaser2.width * g_resize * 0.2;
	this.FL2height = this.FuzzleLaser2.height * g_resize * 0.2;
	this.FuzzleLaser3 = document.getElementById("fuzzleLaser3");
	this.FL3width = this.FuzzleLaser3.width * g_resize * 0.2;
	this.FL3height = this.FuzzleLaser3.height * g_resize * 0.2;
	this.FuzzleLaser4 = document.getElementById("fuzzleLaser4");
	this.FL4width = this.FuzzleLaser4.width * g_resize * 0.2;
	this.FL4height = this.FuzzleLaser4.height * g_resize * 0.2;

	this.fuzzleLaser = [];
	this.fuzzleLaser.push(this.FuzzleLaserR);
	this.fuzzleLaser.push(this.FuzzleLaser2);
	this.fuzzleLaser.push(this.FuzzleLaser3);
	
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

	this.deatharray = [];
	this.deatharray.push(this.FuzzleD1);
	this.deatharray.push(this.FuzzleD2);
	this.deatharray.push(this.FuzzleD3);
	this.deatharray.push(this.FuzzleD4);
	this.deatharray.push(this.FuzzleD5);
	this.deatharray.push(this.FuzzleD6);
	this.deatharray.push(this.FuzzleD7);
	this.deatharray.push(this.FuzzleD8);
	this.deatharray.push(this.FuzzleD9);
	
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
	this.counter2 = 0;
	this.state = 0;
	this.upPressed = false;
}

/**
 * Renders Fuzzle.
 */
fuzzle.prototype.render = function(){
        
       
    //Instantiates fuzzle's trail
    if(g_universe == "Hell"){
    if (this.flag == 0){
	var t;
	if(Math.round(Math.random()) == 1){
     	t = new trail("trail",-22);
	}
    else{
     	t = new trail("trail",-20);
    }
    g_trail.push(t);
    } 
    this.flag = 0;
   }
   
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

		//Fuzzle wings flutter
		if(this.upPressed == false){
			this.state = 0;
			this.counter2 = 0;
		}
		else{
			if(this.counter2 > 2){
			this.state++;
			this.counter2 = 0;
			}
			if(this.state > 2){
				this.state = 1;
			}
			this.counter2++;
		}
		if (g_powerupGUN == false)
		{
		g_context.drawImage(this.fuzzlearray[this.state], this.posx, this.posy, this.fuzzlearray[this.state].width * g_resize * 0.2, this.fuzzlearray[this.state].height * g_resize * 0.2);}
		else if (g_powerupGUN == true)
		{
		g_context.drawImage(this.fuzzleLaser[this.state], this.posx, this.posy, this.fuzzleLaser[this.state].width * g_resize * 0.2, this.fuzzleLaser[this.state].height * g_resize * 0.2);}

	}

	if (g_gameState == "hellcutscene"){
		
		if(this.posx < g_canvas.width * 0.45){
			this.posx += g_canvas.width/200;
			this.velocity = -4;
		}
		else{
			this.velocity = 2;
			//DONOTHING
		}
		
		g_context.drawImage(this.deatharray[0], this.posx, this.posy, this.deatharray[0].width * g_resize * 0.2, this.deatharray[0].height * g_resize * 0.2);
		
		if(g_fuzzle.posy > g_canvas.height){
		g_gameState = "inlevel";
		g_background = new Background("hellsky", 5);
	     	g_foreground = new Background("hellrocks", 8);
	
   		g_createObstacleInterval = setInterval(createObstacle, 1000/1000);
		g_clockInterval = setInterval(clockLoop, 100);
   		this.posx = 0.15 * g_canvas.width;
   		this.posy = 0.5 * g_canvas.height;
   		this.gravity = 1;
   		this.velocity = 1;
		g_obstacle = [];
		g_alliance = g_tempalliance;
   		}
	}
	
	if (g_gameState == "heavencutscene"){
		
		if(this.posx < g_canvas.width * 0.45){
			this.posx += g_canvas.width/200;
			//this.velocity = -2;
			this.velocity = 0;
		}
		else{
			this.velocity = -4;
			//DONOTHING
		}
		
		g_context.drawImage(this.fuzzlearray[0], this.posx, this.posy, this.fuzzlearray[0].width * g_resize * 0.2, this.fuzzlearray[0].height * g_resize * 0.2);
		
		if(g_fuzzle.posy < 0){
		g_gameState = "inlevel";
		g_background = new Background("sky", 5);
	    g_foreground = new Background("cloud", 8);
	
   		g_createObstacleInterval = setInterval(createObstacle, 1000/1000);
		g_clockInterval = setInterval(clockLoop, 100);
   		this.posx = 0.15 * g_canvas.width;
   		this.posy = 0.5 * g_canvas.height;
   		this.gravity = 1;
   		this.velocity = 1;
		g_obstacle = [];
		g_alliance = g_tempalliance;
   		}
	}
	
	if (g_gameState == "gameovercutscene")
	{
		
		this.state = -1;
		g_context.drawImage(this.deatharray[this.counter], this.posx, this.posy, this.deatharray[this.counter].width * g_resize * 0.2, this.deatharray[this.counter].height * g_resize * 0.2);
		if(this.counter < 8){
		this.counter++;	
		}

		if (g_fuzzle.posy > g_canvas.height)
		{	
			clearInterval(g_renderInterval);
			g_levelDirector = new LevelDirector();
			g_levelDirector.gameOver();
			this.state = 0;
		}
		
	}
	
	// Updates Fuzzle's gravity, velocity and position.
	this.velocity += this.gravity;
	this.posy += this.velocity;
	if (this.gravity < 2) this.gravity += 2;
}

/**
 * What happens when fuzzle collides into something.
 */
fuzzle.prototype.collidedpowerup = function(){
	var r = Math.round(Math.random() * 4);
	
	if (r == 0 && g_universe == "Heaven"){
		g_levelDirector.hellLevel();
	}
	
	else if (r < 3){
		var a = new Alliance("angelalliance", g_alliance.length, g_alliance.length+1,0);
		g_alliance.push(a);
		if (g_pause4firstALLIANCE == true)
		{
		pause();
		var AllianceFormed = document.getElementById("AllianceFormed");
		g_context.drawImage(AllianceFormed, 0.5*g_canvas.width - (1.8*0.5*g_resize*AllianceFormed.width) , 0.5*g_canvas.height - (1.8*0.5*g_resize*AllianceFormed.height) , 1.8*AllianceFormed.width*g_resize, 1.8*AllianceFormed.height*g_resize);
		g_pause4firstALLIANCE = false;
		}
	}
	
	else if (r < 5){
		g_powerupGUN = true;
		if (g_pause4firstGUN == true)
		{
		pause();
		var LaserObtained = document.getElementById("LaserObtained");
		g_context.drawImage(LaserObtained, 0.5*g_canvas.width - (1.8*0.5*g_resize*LaserObtained.width) , 0.5*g_canvas.height - (1.8*0.5*g_resize*LaserObtained.height) , 1.8*LaserObtained.width*g_resize, 1.8*LaserObtained.height*g_resize);
		var pressZ = document.getElementById("PressZ");
		g_context.drawImage(pressZ, 0.5*g_canvas.width - (1.8*0.5*g_resize*pressZ.width) , 0.65*g_canvas.height - (1.8*0.5*g_resize*pressZ.height) , 1.8*pressZ.width*g_resize, 1.8*pressZ.height*g_resize);
		g_pause4firstGUN = false;
		}
	}
}

fuzzle.prototype.collidedobstacle = function(){
	
	if(g_alliance.length == 0){	
    g_fuzzle.lives -= 1;
    g_keys = [];
    g_mouseDown = false;
	}
	else if(g_alliance.length > 0){
		g_afterEffects = new AfterEffects("angelalliance", g_alliance[0].posx ,g_alliance[0].posy ,g_alliance[0].phase,g_alliance[0].phase);
		g_alliance[0].posx = -300;
		g_alliance.splice(0,1);
		
	  	g_fuzzleaudio = document.getElementById("allyDisappear");
	  	g_fuzzleaudio.volume = 1;
	  	g_fuzzleaudio.play();
	}
}

/**
* Makes Fuzzle go up.
*/  
fuzzle.prototype.up = function(){
    if(g_universe == "Hell"){
    this.flag = 1;
    var t;
	if(Math.round(Math.random()) == 1){
     	t = new trail("firetrail",-22);
	}
    else{
     	t = new trail("firetrail",-22);
    }
    g_trail.push(t);
    }
    // Going up is a pain in the ass without this
    if (this.velocity > 0){
    this.velocity = 0;
    }
    
    //Accelerates upwards
    this.gravity = -2;  
    
    g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);	  
}

