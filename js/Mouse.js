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
		g_NumberPrinter.render();

		setTimeout(gotoMainMenu,100);
		}

	}
	else if (g_gameState == "inlevel")
	{
		if (isMouseWithinRing(0.95 * g_canvas.width,0.07 * g_canvas.height,0.056*g_canvas.height))
		{
		pause();
		}
		else {g_mouseDown = true;}
	}
	else if (g_gameState == "paused")
	{
		if (isMouseWithinRing(0.97 * g_canvas.width,0.05 * g_canvas.height,0.056*g_canvas.height))
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
	g_fuzzle.upPressed = false;
}

function mouse()
{
	if (g_mouseDown == true) //check if mouse is pressed
	{
		g_fuzzle.up();	
		g_fuzzle.upPressed = true;
	}
	else{
		
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

function touchUp(e)
{
	if (!e)
		e = event;
	len = e.targetTouches.length;
}

function touchDown()
{
	g_mouseDown = true;
	touchXY();
}

function touchXY(e)
{
	if (!e)
		e = event;
	e.preventDefault();
	len = e.targetTouches.length;
	for (i = 0; i < len; i++)
	{
		g_touchX[i] = e.targetTouches[i].pageX - g_canvas.offsetLeft;
                g_touchY[i] = e.targetTouches[i].pageY - g_canvas.offsetTop;
		g_mouseX = g_touchX;
		g_mouseY = g_touchY;		
	}
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
