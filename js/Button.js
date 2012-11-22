/**
 * Its the button object.
 * @constructor
 */
function Button(element){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * 0.65 * g_resize;
	this.height = this.ImageFile.height * 0.65 * g_resize;

	//Button Attributes
	this.type = element;
	if (this.type == "gameplayup" || this.type == "gameplaydown" || this.type == "gamereplayup" || this.type == "gamereplaydown")
	{
	this.posx = g_canvas.width/2 - this.width/2;
	this.posy = 0.8*g_canvas.height - this.height/2;
	}
	if (this.type == "gamestatsup" || this.type == "gamestatsdown")
	{
	this.posx = g_canvas.width/2 - 1.35*this.width;
	this.posy = 0.8*g_canvas.height - this.height/2;
	}
	if (this.type == "gameinstructup" || this.type == "gameinstructdown")
	{
	this.posx = g_canvas.width/2 + 0.35*this.width;
	this.posy = 0.8*g_canvas.height - this.height/2;
	}
	if (this.type == "gamebackup" || this.type == "gamebackdown")
	{
	this.posx = 0.1 * g_canvas.width - this.width/2;
	this.posy = 0.8*g_canvas.height - this.height/2;
	}
	
}

/**
* Renders the button.
*/
Button.prototype.render = function(){
	
    // Draws the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);

}