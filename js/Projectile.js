/**
 * Its Laser beam projectile.
 * @constructor
 */
function Projectile(element, posx, posy){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * g_resize * 0.05;
	this.height = this.ImageFile.height * g_resize * 0.05;

	//Projectile Attributes
	this.type = element;
	this.posx = posx;
	this.posy = posy;
}

/**
* Renders the Projectile.
*/
Projectile.prototype.render = function(){
	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);
}


/**
 * What happens when the Alliance collides into something.
 */
Projectile.prototype.collided = function(){
}