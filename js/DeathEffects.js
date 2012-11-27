/**
 * Its Devil and Pillar After Effects.
 * @constructor
 */
function AfterEffects(element, posx, posy){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.type = element;
	this.width = this.ImageFile.width * g_resize;
	this.height = this.ImageFile.height * g_resize;

	//AfterEffects Attributes
	this.posx = posx;
	this.posy = posy;
	this.counter = 0;
	//this.xvelocity = xvelocity;
	//this.yvelocity = yvelocity;
}

/**
* Renders AfterEffects.
*/
AfterEffects.prototype.render = function(){
	if (this.type == "devil")
	{
	g_afterEffects.push(this.ImageFile);
	}
	if (this.type == "pillar")
	{
	g_afterEffects.push(this.ImageFile);
	}	
	g_context.drawImage(g_afterEffects[this.counter], this.posx, this.posy, g_afterEffects[this.counter].width * g_resize * 0.2, g_afterEffects[this.counter].height * g_resize * 0.2);
		if(this.counter < 8){
		this.counter++;	}
}