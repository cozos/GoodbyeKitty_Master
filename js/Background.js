// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text

/**
 * Its the background. 
 * @constructor
 */
function Background(element,velocity)
{
   // Image attributes
   this.BackgroundImage = document.getElementById(element);
   this.myWidth  = this.BackgroundImage.width * g_resize;
   this.myHeight = this.BackgroundImage.height * g_resize;
   
   // Background attributes
   this.myX1 = 0;
   this.myX2 = this.myWidth;
   this.myVelocity = velocity; 
}

/**
 * Renders the background. No idea how it works. 
 */
Background.prototype.render = function()
{
	if (g_gameState != "inlevel" && g_gameState != "gameovercutscene")
	{
		if (this.myWidth != g_canvas.width || this.myHeight != g_canvas.height)
		{
			var local_resize;
			var tempResizeHeight;
			var tempResizeWidth;

			tempResizeWidth = g_canvas.width / this.myWidth;
			tempResizeHeight = g_canvas.height / this.myHeight;
			local_resize = Math.min(tempResizeHeight,tempResizeWidth);
			this.myWidth *= local_resize;
			this.myHeight *= local_resize;
		}
			
	g_context.drawImage(this.BackgroundImage,
                       this.myX1, 0,
                       this.myWidth, this.myHeight);
	}
	else if (g_gameState == "inlevel")
	{
   //the new scrollRate is 1.25 to the power of the level
   var scrollRate = Math.pow(1.25,(g_levelDirector.myCurrentLevel))

   if (this.myX1 <= - this.myWidth)
	{
		this.myX1 = this.myWidth;
	}
	if (this.myX2 <= - this.myWidth)
	{
		this.myX2 = this.myWidth;
	}

   g_context.drawImage(this.BackgroundImage,
                       this.myX1, 0,
                       this.myWidth, this.myHeight);
   g_context.drawImage(this.BackgroundImage,
                       this.myX2, 0,
                       this.myWidth, this.myHeight);
   this.myX1 -= (this.myVelocity * scrollRate);
   this.myX2 -= (this.myVelocity * scrollRate);
	}
	else if (g_gameState == "gameovercutscene")
	{
   g_context.drawImage(this.BackgroundImage,
                       this.myX1, 0,
                       this.myWidth, this.myHeight);
   g_context.drawImage(this.BackgroundImage,
                       this.myX2, 0,
                       this.myWidth, this.myHeight);
	}
}