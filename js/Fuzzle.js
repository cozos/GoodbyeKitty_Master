/**
 * Its Fuzzle.
 * @constructor
 */
function fuzzle(){
	//Image attributes
	this.ImageFile = document.getElementById("fuzzle");
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;
	
	//Fuzzle attributes
	this.lives = 1;
	this.score = 0;
	this.health = 0;
	this.velocity = 0;
	this.gravity = 1;
	this.posx = 0.15 * g_canvas.width;
	this.posy = 0.5 * g_canvas.height;
    this.flag = 0;
}

/**
 * Renders Fuzzle.
 */
fuzzle.prototype.render = function(){
    
    //Instantiates fuzzle's trail
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
    
	// Updates Fuzzle's velocity and position.
	this.velocity += this.gravity;
	this.posy += this.velocity;
	
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
	
	if (this.gravity < 2) this.gravity += 2;
	
	// Draws the image
	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);
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
    this.flag = 1;
    var t;
	if(Math.round(Math.random()) == 1){
     	t = new trail("firetrail",-22);
	}
    else{
     	t = new trail("firetrail",-22);
    }
    g_trail.push(t);
    
    // Going up is a pain in the ass without this
    if (this.velocity > 0){
    this.velocity = 0;
    }
    
    //Accelerates upwards
    this.gravity = -2;  
    
    g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);	  
}

