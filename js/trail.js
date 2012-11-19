/**
 * Its Fuzzle's trail.
 * @constructor
 */
function trail(element,speed){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;
	
	// Trail attributues
	this.posx = g_fuzzle.posx - (0.3 * g_fuzzle.width);
	this.posy = g_fuzzle.posy + (0.3 * g_fuzzle.height);
	this.velocity = speed;
    this.counter = 0;
}

/**
* Renders Fuzzle's trail.
*/
trail.prototype.render = function(){
	
    // Sprite sheet position
    var srcx = 0;
    
    // Updates x coordinate of trail
    this.posx += this.velocity;
    
    // Makes fart smaller
    if(this.counter > 1){
        srcx = 74;
            
    }
    
    // Makes fart even smaller
    if(this.counter > 3){
        srcx = 148;
    }
    
    
    // Draws the image
  	g_context.drawImage(this.ImageFile, srcx,0,74,74,this.posx, this.posy,74,74);
    this.counter++;
}


/**
 * What happens when the trail collides into something.
 */
trail.prototype.collided = function(){
	// TODO.
}

