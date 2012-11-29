/**
 * Its Angel Alliance.
 * @constructor
 */
function Alliance(element, position, total, devil){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;

	//Alliance Attributes
	this.state = 0;
	this.position = position;
	this.total = total;
	this.type = element;
	this.phase = position/total*2*3.14;
	this.posx = 0;
	this.posy = 0;
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
	if(Math.abs(this.posx - x) < g_fuzzle.width * 1 && Math.abs(this.posy - y) < g_fuzzle.width * 1) this.state = 1;
	
	if(this.state == 0){
		this.posx = this.posx + (x - this.posx)/20;
		this.posy = this.posy + (y - this.posy)/20;
	}
	
	if(this.state == 1){
	this.phase = this.position/this.total*2*3.14;
	this.posx = g_fuzzle.posx + (0.6 * g_fuzzle.width) + (150+200*this.devil) * Math.sin(0.2*g_levelDirector.myAllianceClock + this.phase) - ((0.85 -this.devil) * this.width);
	this.posy = g_fuzzle.posy + (0.5 * g_fuzzle.height) + (150+200*this.devil) * Math.cos(0.2*g_levelDirector.myAllianceClock+ this.phase) - (0.5 * this.height);
	}	
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);
}


/**
 * What happens when the Alliance collides into something.
 */
Alliance.prototype.collided = function(){
}