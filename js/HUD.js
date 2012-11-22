/**
 * Its Head's Up Display.
 * @constructor
 */
function HUD(){
	//Hearts Store attributes
	this.heartstorage = document.getElementById("HUDhearts_mine");
	this.HSwidth = this.heartstorage.width * 1.5 * g_resize;
	this.HSheight = this.heartstorage.height * 1.5 * g_resize;

	//Mini Hearts attributes
	this.miniheart_grey = document.getElementById("HUDminiheart_grey");
	this.MHwidth = this.miniheart_grey.width * g_resize;
	this.MHheight = this.miniheart_grey.height * g_resize;

	//Mini Hearts attributes
	this.miniheart_red = document.getElementById("HUDminiheart_red");
	this.MHwidth = this.miniheart_red.width * g_resize;
	this.MHheight = this.miniheart_red.height * g_resize;
}

/**
 * Renders HUD.
 */
HUD.prototype.render = function(){

	var radiusX = 0.06*g_canvas.height;
	var radiusY = 0.056*g_canvas.height;
	var originX = 0.95*g_canvas.width;
	var originY = 0.07*g_canvas.height;
	var posX = 0.95*g_canvas.width - 0.5*this.MHwidth;
	var posY = 0.07*g_canvas.height - 0.5*this.MHheight;
	var i = 1;
	var health = 1;

	g_context.drawImage(this.heartstorage, originX - 0.5*this.HSwidth, originY - 0.5*this.HSheight, this.HSwidth, this.HSheight);

	while(i <= 9)
	{
	var phaseG = i/9 * 2 * Math.PI;
	var diffXG = Math.sin(phaseG);
	var diffYG = Math.cos(phaseG);
	
	g_context.drawImage(this.miniheart_grey, posX - radiusX * diffXG, posY - radiusY * diffYG, this.MHwidth, this.MHheight);
	i++;
	}

	while(health <= g_fuzzle.health)
	{
	var phaseR = health/9 * 2 * Math.PI;
	var diffXR = Math.sin(phaseR);
	var diffYR = Math.cos(phaseR);
	
	g_context.drawImage(this.miniheart_red, posX - radiusX * diffXR, posY - radiusY * diffYR, this.MHwidth, this.MHheight);
	health++;
	}
}

	function renderHUD()
	{
            g_context.fillStyle = "black";
	    g_context.font="26px Comic Sans MS";

		var remaininghours = g_levelDirector.myClock%36000
		var remainingminutes = remaininghours % 600
		var remainingseconds = remainingminutes/10;
		var seconds = Math.floor(remainingminutes/10);
		var minutes = Math.floor(remaininghours / 600);
		var hours = Math.floor(g_levelDirector.myClock/36000);
		/*g_context.fillText(g_levelDirector.myClock,g_canvas.width/2,0.025 * g_canvas.height);
		g_context.beginPath();
		g_context.arc(0.95*g_canvas.width,0.07*g_canvas.height,0.056*g_canvas.height,0,2*Math.PI);
		g_context.stroke();*/

	}
