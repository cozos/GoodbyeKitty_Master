/**
 * Its Head's Up Display.
 * @constructor
 */
function HUD(){
	//Hearts Store attributes
	this.heartstorage = document.getElementById("HUDhearts_mine");
	this.HSwidth = this.heartstorage.width * g_resize;
	this.HSheight = this.heartstorage.height * g_resize;

	//Mini Hearts attributes
	this.miniheart_grey = document.getElementById("HUDminiheart_grey");
	this.MHwidth = this.miniheart_grey.width * g_resize;
	this.MHheight = this.miniheart_grey.height * g_resize;

	//Mini Hearts attributes
	this.miniheart_red = document.getElementById("HUDminiheart_red");
	this.MHwidth = this.miniheart_red.width * g_resize;
	this.MHheight = this.miniheart_red.height * g_resize;
/*
	//0 attributes
	this.0 = document.getElementById("0");
	this.0width = this.0.width * g_resize;
	this.0height = this.0.height * g_resize;
	//1 attributes
	this.1 = document.getElementById("1");
	this.1width = this.1.width * g_resize;
	this.1height = this.1.height * g_resize;
	//2 attributes
	this.2 = document.getElementById("2");
	this.2width = this.2.width * g_resize;
	this.2height = this.2.height * g_resize;
	//3 attributes
	this.3 = document.getElementById("3");
	this.3width = this.3.width * g_resize;
	this.3height = this.3.height * g_resize;
	//4 attributes
	this.4 = document.getElementById("4");
	this.4width = this.4.width * g_resize;
	this.4height = this.4.height * g_resize;
	//5 attributes
	this.5 = document.getElementById("5");
	this.5width = this.5.width * g_resize;
	this.5height = this.5.height * g_resize;
	//6 attributes
	this.6 = document.getElementById("6");
	this.6width = this.6.width * g_resize;
	this.6height = this.6.height * g_resize;
	//7 attributes
	this.7 = document.getElementById("7");
	this.7width = this.7.width * g_resize;
	this.7height = this.7.height * g_resize;
	//8 attributes
	this.8 = document.getElementById("8");
	this.8width = this.8.width * g_resize;
	this.8height = this.8.height * g_resize;
	//9 attributes
	this.9 = document.getElementById("9");
	this.9width = this.9.width * g_resize;
	this.9height = this.9.height * g_resize;
*/	
}

/**
 * Renders HUD.
 */
HUD.prototype.render = function(){

	var radiusX = 0.045*g_canvas.height;
	var radiusY = 0.042*g_canvas.height;
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
	    g_context.font="10px Comic Sans MS";
            g_context.fillText(g_fuzzle.lives,0.95*g_canvas.width,0.07*g_canvas.height);

		var remaininghours = g_levelDirector.myClock%36000
		var remainingminutes = remaininghours % 600
		var remainingseconds = 0;
		var seconds = Math.floor(remainingminutes/10);
		var minutes = Math.floor(remaininghours / 600);
		var hours = Math.floor(g_levelDirector.myClock/36000);
		g_context.fillText(hours + ":" + minutes + ":" + seconds,g_canvas.width/2,0.2*g_canvas.height);

	}
