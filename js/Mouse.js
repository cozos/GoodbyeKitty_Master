/*
 * Sets variable g_mouseDown = true when mouse is pressed and set variable = false when the mouse is released
 */

function mouseDown()
{
	if (g_gameState == "mainmenu")
	{
	var mouseXStatsRing1 = 16 / 60 * g_canvas.width;
	var mouseXStatsRing2 = 31 / 80 * g_canvas.width;
	var mouseXInstructRing1 = 49 / 80 * g_canvas.width;
	var mouseXInstructRing2 = 44 / 60 * g_canvas.width;

		if (isMouseWithinRing(0.5 * g_canvas.width,0.8 * g_canvas.height,g_canvas.width / 16))
		{
		g_background.render();
		g_button = new Button("gameplaydown");
		g_button.render();
		g_button = new Button("gamestatsup");
		g_button.render();
		g_button = new Button("gameinstructup");
		g_button.render();
		setTimeout(gotoGame,100);
		}
		if (isMouseWithinRoundedBox(mouseXStatsRing1,mouseXStatsRing2, 0.8*g_canvas.height,g_canvas.width/40))
		{
		g_background.render();
		g_button = new Button("gameplayup");
		g_button.render();
		g_button = new Button("gamestatsdown");
		g_button.render();
		g_button = new Button("gameinstructup");
		g_button.render();
		setTimeout(gotoStatistics,100);
		}
		if (isMouseWithinRoundedBox(mouseXInstructRing1,mouseXInstructRing2, 0.8*g_canvas.height,g_canvas.width/40))
		{
		g_background.render();
		g_button = new Button("gameplayup");
		g_button.render();
		g_button = new Button("gamestatsup");
		g_button.render();
		g_button = new Button("gameinstructdown");
		g_button.render();
		setTimeout(gotoInstructions,100);
		}

	}
	else if (g_gameState == "ininstructions")
	{
		if (isMouseWithinRing(0.1 * g_canvas.width,0.8 * g_canvas.height,g_canvas.width / 16))
		{
		g_background.render();
		g_button = new Button("gamebackdown");
		g_button.render();
		setTimeout(gotoMainMenu,100);
		}

	}
	else if (g_gameState == "instatistics")
	{
		if (isMouseWithinRing(0.1 * g_canvas.width,0.8 * g_canvas.height,g_canvas.width / 16))
		{
		g_background.render();
		g_button = new Button("gamebackdown");
		g_button.render();

            g_context.fillStyle = "black";
	    g_context.font="20px Comic Sans MS";
            g_context.fillText("Best score : " + bestScore,0.75*g_canvas.width,0.35*g_canvas.height);
            g_context.fillText("Worst score : " + worstScore,0.65*g_canvas.width,0.40*g_canvas.height);
            g_context.fillText("Total Play Time : " + totalPlayTime,0.55*g_canvas.width,0.45*g_canvas.height);
            g_context.fillText("Total Play : " + totalPlay,0.50*g_canvas.width,0.50*g_canvas.height);
            g_context.fillText("Total Number of Hearts Collected : " + totalHeartsCollected,0.35*g_canvas.width,0.55*g_canvas.height);
            g_context.fillText("Total Number of Powerups Collected : " + totalPowerupsCollected,0.25*g_canvas.width,0.60*g_canvas.height);
            g_context.fillText("Total Number of Death : " + totalDeath,0.75*g_canvas.width,0.70*g_canvas.height);

		setTimeout(gotoMainMenu,100);
		}

	}
	else if (g_gameState == "inlevel")
	{
		if (isMouseWithinRing(0.95 * g_canvas.width,0.07 * g_canvas.height,30*g_resize))
		{
		pause();
		}
		else {g_mouseDown = true;}
	}
	else if (g_gameState == "paused")
	{
		if (isMouseWithinRing(0.97 * g_canvas.width,0.05 * g_canvas.height,20*g_resize))
		{
		pause();
		}
	}
	else if (g_gameState == "gameover")
	{
	var mouseXStatsRing1 = 16 / 60 * g_canvas.width;
	var mouseXStatsRing2 = 31 / 80 * g_canvas.width;
	var mouseXInstructRing1 = 49 / 80 * g_canvas.width;
	var mouseXInstructRing2 = 44 / 60 * g_canvas.width;

		if (isMouseWithinRing(0.5 * g_canvas.width,0.8 * g_canvas.height,g_canvas.width / 16))
		{
		clearInterval(g_renderInterval);
		g_background = new Background("gameover",0);
		g_background.render();
		g_button = new Button("gamereplaydown");
		g_button.render();
		g_button = new Button("gamestatsup");
		g_button.render();
		g_button = new Button("gameinstructup");
		g_button.render();
		setTimeout(gotoGame,100);
		}
		if (isMouseWithinRoundedBox(mouseXStatsRing1,mouseXStatsRing2, 0.8*g_canvas.height,g_canvas.width/40))
		{
		clearInterval(g_renderInterval);
		g_background = new Background("gameover",0);
		g_background.render();
		g_button = new Button("gamereplayup");
		g_button.render();
		g_button = new Button("gamestatsdown");
		g_button.render();
		g_button = new Button("gameinstructup");
		g_button.render();
		setTimeout(gotoStatistics,100);
		}
		if (isMouseWithinRoundedBox(mouseXInstructRing1,mouseXInstructRing2, 0.8*g_canvas.height,g_canvas.width/40))
		{
		clearInterval(g_renderInterval);
		g_background = new Background("gameover",0);
		g_background.render();
		g_button = new Button("gamereplayup");
		g_button.render();
		g_button = new Button("gamestatsup");
		g_button.render();
		g_button = new Button("gameinstructdown");
		g_button.render();
		setTimeout(gotoInstructions,100);
		}

	}
}
	
function mouseUp()
{
	g_mouseDown = false;
}

function mouse()
{
	if (g_mouseDown == true) //check if mouse is pressed
	{
		g_fuzzle.up();	
	}
}

function mouseXY(e)
{
	if (!e)
		e = event;
	g_mouseX[0] = e.pageX - g_canvas.offsetLeft;
	g_mouseY[0] = e.pageY - g_canvas.offsetTop;
	len = 1;
}

function isMouseWithinBox(x1,x2,y1,y2)
{
	if (g_mouseX >= x1 && g_mouseX <= x2 && g_mouseY >= y1 && g_mouseY <= y2)
	return true;	
}
function isMouseWithinRing(x1,y1,radius)
{
	var mouseXDiff = g_mouseX - x1;
	var mouseYDiff = g_mouseY - y1;

	if (mouseXDiff * mouseXDiff + mouseYDiff * mouseYDiff <= radius * radius)
	{return true;}
	else {return false;}
}
function isMouseWithinRoundedBox(x1,x2,y,radius)
{
	if (isMouseWithinRing(x1,y,radius))
	{return true;}
	else if (isMouseWithinRing(x2,y,radius))
	{return true;}
	else if (isMouseWithinBox(x1,x2,y-radius,y+radius))
	{return true;}
	else {return false;}
}
