/*
 * Stores keys pressed into an object array(g_keys[]) and remove them from the array when the keys are released
 */
function keyDown(e)
{
	g_keys[e.keyCode] = true;
	//e.preventDefault();

   if ( e.keyCode == 80 )         // p
   {
	if (g_gameState == "inlevel" || g_gameState == "paused")
	{
		if (g_pauseKeyPressed = false) 
		{
			g_pauseKeyPressed = true;
			pause();
		}
   	}
   }

   if (g_paused)
      return;
	else if (g_gameState == "mainmenu")
	{
		if ( e.keyCode == 32 ) //check if space is pressed
		{
			g_background = new Background("gamemainmenu",0);
			g_background.render();
			g_button = new Button("gameplaydown");
			g_button.render();
			g_button = new Button("gamestatsup");
			g_button.render();
			g_button = new Button("gameinstructup");
			g_button.render();
			setTimeout(gotoGame,100);
		}
	}
	else if (g_gameState == "gameover")
	{
		if ( e.keyCode == 39 ) //check if space is pressed
		{
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
	}
	
}

function keyUp(e)
{
	delete g_keys[e.keyCode];
	//e.preventDefault();

   if ( e.keyCode == 80 )         // p
   {
	if (g_gameState == "inlevel" || g_gameState == "paused")
	{
		if (g_pauseKeyPressed = true) 
		{
			g_pauseKeyPressed = false;
			pause();
		}
	}
   }

}
/*
 * Handles keyboard input.
 */
function keyboard()
{
	if (g_keys[38] == true) //check if up arrow is pressed
	{
		// code moved to fuzzle.js, it's neater that way ;P
		g_fuzzle.up();
		
	}
	if (g_keys[16] == true) //check if shift is pressed
	{
		g_angelAllianceFlag = 1;
	}
	else {g_angelAllianceFlag = 0;}
}