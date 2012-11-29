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
		if ( e.keyCode == 32 ) //check if space is pressed
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
   if (g_gameState == "inlevel")
   {
	if (g_keys[38] == true) //check if up arrow is pressed
	{
		// code moved to fuzzle.js, it's neater that way ;P
		g_fuzzle.up();
		g_fuzzle.upPressed = true;
	}
	else
	{
		g_fuzzle.upPressed = false;
	}
	if (g_keys[16] == true) //check if shift is pressed
	{
		g_fuzzle.collidedpowerup();
	}
	
	// DEBUGGING PURPOSES - PRESS CONTROL
	if(g_keys[17] == true){
		var s = "g_alliance.length:" + g_alliance.length + "START";
		for(var i = 0; i<g_alliance.length; i++){
			s = s + ", " +  g_alliance[i].position + "/" + g_alliance[i].total;
		}
		alert(s);
		g_keys = [];
	}
	if (g_powerupGUN == true)
   	{
		if (g_keys[90] == true) //check if z arrow is pressed
		{
			g_zKeyPressed = true;
			if (g_zKeyCounter%3 == 0)
			{
				// create the laser bullet
				var a = new Projectile("laserBeam",g_fuzzle.posx + g_fuzzle.FLRwidth,g_fuzzle.posy + 0.65*g_fuzzle.FLRheight);
				g_projectile.push(a);
			}
			g_zKeyCounter++;	
		}
		else 
		{
			g_zKeyPressed = false;
			g_zKeyCounter = 0;
		}
 	  }	
   }
}