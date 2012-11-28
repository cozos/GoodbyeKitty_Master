/**
 * Its Devil and Pillar After Effects.
 * @constructor
 */
function AfterEffects(element, posx, posy, xvelocity, yvelocity){
	// Image Attributes
	this.type = element;

	this.DemonD1 = document.getElementById("demonD1");
	this.DD1width = this.DemonD1.width * g_resize * 0.2;
	this.DD1height = this.DemonD1.height * g_resize * 0.2;
	this.DemonD2 = document.getElementById("demonD2");
	this.DD2width = this.DemonD2.width * g_resize * 0.2;
	this.DD2height = this.DemonD2.height * g_resize * 0.2;
	this.DemonD3 = document.getElementById("demonD3");
	this.DD3width = this.DemonD3.width * g_resize * 0.2;
	this.DD3height = this.DemonD3.height * g_resize * 0.2;
	this.DemonD4 = document.getElementById("demonD4");
	this.DD4width = this.DemonD4.width * g_resize * 0.2;
	this.DD4height = this.DemonD4.height * g_resize * 0.2;
	this.DemonD5 = document.getElementById("demonD5");
	this.DD5width = this.DemonD5.width * g_resize * 0.2;
	this.DD5height = this.DemonD5.height * g_resize * 0.2;
	this.DemonD6 = document.getElementById("demonD6");
	this.DD6width = this.DemonD6.width * g_resize * 0.2;
	this.DD6height = this.DemonD6.height * g_resize * 0.2;
	this.DemonD7 = document.getElementById("demonD7");
	this.DD7width = this.DemonD7.width * g_resize * 0.2;
	this.DD7height = this.DemonD7.height * g_resize * 0.2;
	this.DemonD8 = document.getElementById("demonD8");
	this.DD8width = this.DemonD8.width * g_resize * 0.2;
	this.DD8height = this.DemonD8.height * g_resize * 0.2;
	this.DemonD9 = document.getElementById("demonD9");
	this.DD9width = this.DemonD9.width * g_resize * 0.2;
	this.DD9height = this.DemonD9.height * g_resize * 0.2;
	this.devilDeathArray = [];
	this.devilDeathArray.push(this.DemonD1);
	this.devilDeathArray.push(this.DemonD2);
	this.devilDeathArray.push(this.DemonD3);
	this.devilDeathArray.push(this.DemonD4);
	this.devilDeathArray.push(this.DemonD5);
	this.devilDeathArray.push(this.DemonD6);
	this.devilDeathArray.push(this.DemonD7);
	this.devilDeathArray.push(this.DemonD8);
	this.devilDeathArray.push(this.DemonD9);

	this.PillarD1 = document.getElementById("pillarD1");
	this.PD1width = this.PillarD1.width * g_resize * 0.2;
	this.PD1height = this.PillarD1.height * g_resize * 0.2;
	this.PillarD2 = document.getElementById("pillarD2");
	this.PD2width = this.PillarD2.width * g_resize * 0.2;
	this.PD2height = this.PillarD2.height * g_resize * 0.2;
	this.PillarD3 = document.getElementById("pillarD3");
	this.PD3width = this.PillarD3.width * g_resize * 0.2;
	this.PD3height = this.PillarD3.height * g_resize * 0.2;
	this.PillarD4 = document.getElementById("pillarD4");
	this.PD4width = this.PillarD4.width * g_resize * 0.2;
	this.PD4height = this.PillarD4.height * g_resize * 0.2;
	this.PillarD5 = document.getElementById("pillarD5");
	this.PD5width = this.PillarD5.width * g_resize * 0.2;
	this.PD5height = this.PillarD5.height * g_resize * 0.2;
	this.PillarD6 = document.getElementById("pillarD6");
	this.PD6width = this.PillarD6.width * g_resize * 0.2;
	this.PD6height = this.PillarD6.height * g_resize * 0.2;
	this.PillarD7 = document.getElementById("pillarD7");
	this.PD7width = this.PillarD7.width * g_resize * 0.2;
	this.PD7height = this.PillarD7.height * g_resize * 0.2;
	this.PillarD8 = document.getElementById("pillarD8");
	this.PD8width = this.PillarD8.width * g_resize * 0.2;
	this.PD8height = this.PillarD8.height * g_resize * 0.2;
	this.pillarDeathArray = [];
	this.pillarDeathArray.push(this.PillarD1);
	this.pillarDeathArray.push(this.PillarD2);
	this.pillarDeathArray.push(this.PillarD3);
	this.pillarDeathArray.push(this.PillarD4);
	this.pillarDeathArray.push(this.PillarD5);
	this.pillarDeathArray.push(this.PillarD6);
	this.pillarDeathArray.push(this.PillarD7);
	this.pillarDeathArray.push(this.PillarD8);

	//AfterEffects Attributes
	this.posx = posx;
	this.posy = posy;
	this.counter = 0;
	this.xvelocity = xvelocity;
	this.yvelocity = yvelocity;
}

/**
* Renders AfterEffects.
*/
AfterEffects.prototype.render = function(){
	if (this.type == "devil")
	{
		if (g_devilDeathFlag > 0)
		{
			g_context.drawImage(this.devilDeathArray[g_devilDeathCounter],this.posx, this.posy, this.devilDeathArray[g_devilDeathCounter].width * g_resize, this.devilDeathArray[g_devilDeathCounter].height * g_resize);
			if(g_devilDeathCounter <= 7)
			{
				g_devilDeathFlag++;
				if(g_devilDeathCounter == 7)
				{
					g_devilDeathFlag = 0;
					this.devilDeathArray = [];
				}
			}
			g_devilDeathCounter = Math.floor(g_devilDeathFlag/2);
		}
		this.posx += this.xvelocity;
		this.posy += this.yvelocity;
	}
	if (this.type == "pillar")
	{
		if (g_pillarDeathFlag > 0)
		{
			g_context.drawImage(this.pillarDeathArray[g_pillarDeathCounter],this.posx, this.posy, this.pillarDeathArray[g_pillarDeathCounter].width * g_resize, this.pillarDeathArray[g_pillarDeathCounter].height * g_resize);
			if(g_pillarDeathCounter <= 7)
			{
				g_pillarDeathFlag++;
				if(g_pillarDeathCounter == 7)
				{
					g_pillarDeathFlag = 0;
					this.pillarDeathArray = [];
				}
			}
			g_pillarDeathCounter = Math.floor(g_pillarDeathFlag/2);
		}
		this.posx += this.xvelocity;
		this.posy += this.yvelocity;
	}
}