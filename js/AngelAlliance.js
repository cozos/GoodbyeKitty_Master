/**
 * Its Angel Alliance.
 * @constructor
 */
function Alliance(element, position, total, devil,x,y){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;
	this.AngelD1 = document.getElementById("allyD1");
	this.AngelD2 = document.getElementById("allyD2");
	this.AngelD3 = document.getElementById("allyD3");
	this.AngelD4 = document.getElementById("allyD4");
	this.AngelD5 = document.getElementById("allyD5");
	this.AngelD6 = document.getElementById("allyD6");
	this.AngelD7 = document.getElementById("allyD7");
	this.AngelDeathArray = [];
	this.AngelDeathArray.push(this.AngelD1);
	this.AngelDeathArray.push(this.AngelD2);
	this.AngelDeathArray.push(this.AngelD3);
	this.AngelDeathArray.push(this.AngelD4);
	this.AngelDeathArray.push(this.AngelD5);
	this.AngelDeathArray.push(this.AngelD6);
	this.AngelDeathArray.push(this.AngelD7);
	
	//Alliance Attributes
	this.deathsequence = 0;
	this.orbitstate = 0;
	this.state = 0;
	this.counter = 0;
	this.position = position;
	this.total = total;
	this.type = element;
	this.phase = position/total*2*3.14;
	this.posx = x;
	this.posy = y;
	this.devil = devil * 0.2;
	this.myClock = 0;
}

/**
* Renders Fuzzle's Alliance.
*/
Alliance.prototype.render = function(pos){
	this.total = g_alliance.length;
	this.position = pos;
	this.phase = this.position/this.total*2*3.14;
	var x = g_fuzzle.posx + (0.5 * g_fuzzle.width) + 100 * Math.sin(0.2*g_levelDirector.myAllianceClock + this.phase) - (0.8 * this.width);
	var y = g_fuzzle.posy + (0.5 * g_fuzzle.height) + 100 * Math.cos(0.2*g_levelDirector.myAllianceClock+ this.phase) - (0.5 * this.height);
	if(Math.abs(this.posx - x) < g_fuzzle.width * 1 && Math.abs(this.posy - y) < g_fuzzle.width * 1) this.orbitstate = 1;
	
	if(this.orbitstate == 0){
		this.posx = this.posx + (x - this.posx)/30;
		this.posy = this.posy + (y - this.posy)/30;
	}
	
	if(this.orbitstate == 1){
	this.phase = this.position/this.total*2*3.14;
	this.posx = g_fuzzle.posx + (0.6 * g_fuzzle.width) + (150+200*this.devil) * Math.sin(0.2*g_levelDirector.myAllianceClock + this.phase) - ((0.85 -this.devil) * this.width);
	this.posy = g_fuzzle.posy + (0.5 * g_fuzzle.height) + (150+200*this.devil) * Math.cos(0.2*g_levelDirector.myAllianceClock+ this.phase) - (0.5 * this.height);
	}	
	
	if(this.deathsequence == 0){
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);
  	}
  	
  	else{
  		if(this.state < 7){
		g_context.drawImage(this.AngelDeathArray[this.state],this.posx, this.posy, this.AngelDeathArray[this.state].width * g_resize * 0.1, this.AngelDeathArray[this.state].height * g_resize * 0.1);
		this.counter++;
		
			if(this.counter > 4){
				this.counter = 0;
				this.state++;
			}
				
		}
		
		else{
			this.posx = -300;
		}
	
  	}
}


/**
 * What happens when the Alliance collides into something.
 */
Alliance.prototype.collided = function(){
}