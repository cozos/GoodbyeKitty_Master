/**
 * Its Angel Alliance.
 * @constructor
 */
function Alliance(element, position, total){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;

	//Alliance Attributes
	this.type = element;
	this.phase = position/total*2*3.14;
	this.posx = g_fuzzle.posx + (0.5 * g_fuzzle.width) + 60 * Math.sin(0.2*g_levelDirector.myClock + this.phase) - (0.5 * this.width);
	this.posy = g_fuzzle.posy + (0.5 * g_fuzzle.height) + 60 * Math.cos(0.2*g_levelDirector.myClock+ this.phase) - (0.5 * this.height);	
}

/**
* Renders Fuzzle's Alliance.
*/
Alliance.prototype.render = function(){
	
    // Draws the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);

}


/**
 * What happens when the Alliance collides into something.
 */
Alliance.prototype.collided = function(){
}