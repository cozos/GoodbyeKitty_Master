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
	this.posx += 10;
	if (this.posx > g_canvas.width)
	{
		g_projectile.splice(0,1);
	}

	// Checks for collision
	for (var i=0;i<=g_projectile.length-1;i++)
	{
		if (collision_singleVSarray(g_projectile[i],g_obstacle,1) == true)
		{
			g_projectile.splice(i,1);
		}
	}
}