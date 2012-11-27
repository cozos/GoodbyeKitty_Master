// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text



function LevelDirector()
{
   this.myCurrentLevel = 0;
   this.myClock = 0;
}

LevelDirector.prototype.mainMenu = function()
{
	g_gameState = "mainmenu";
	rendermainmenu();
}

LevelDirector.prototype.showStatistics = function()
{
	g_gameState = "instatistics";
	g_background = new Background("gamestatisticsscreen",0);
	g_background.render();
	g_button = new Button("gamebackup");
	g_button.render();
	g_NumberPrinter = new NumberPrinter();
	g_NumberPrinter.render();
}

LevelDirector.prototype.showInstructions = function()
{
	g_background = new Background("gameinstructionscreen",0);
	g_background.render();
	g_button = new Button("gamebackup");
	g_button.render();
	g_gameState = "ininstructions";
}

LevelDirector.prototype.startLevel = function()
{
   if ( this.myCurrentLevel == 0 )
   {
      g_background = new Background("sky", 5);
      g_foreground = new Background("cloud", 8);
      g_alliance = [];
      g_obstacle = [];

      g_fuzzle = new fuzzle();
      g_HUD = new HUD();
      g_NumberPrinter = new NumberPrinter();

      g_gameState = "inlevel";

      g_audioLoop = document.getElementById("background_loop");
      g_audioLoop.loop = true;
      g_audioLoop.volume = 0.3;
      g_audioLoop.currentTime = 0;
      //g_audioLoop.play();
   }

   g_inputInterval = setInterval(inputLoop, 1000/24);
   g_clockInterval = setInterval(clockLoop, 100);
   g_renderInterval = setInterval(renderLoop, 1000/24);
   g_createObstacleInterval = setInterval(createObstacle, 1000/1000);
}

LevelDirector.prototype.gameOverCutScene = function()
{
	g_gameState = "gameovercutscene";

	clearInterval(g_inputInterval);
	clearInterval(g_renderInterval);
	clearInterval(g_clockInterval);
	clearInterval(g_createObstacleInterval);

	if (g_fuzzle.posy < g_canvas.height)
	{g_renderInterval = setInterval(renderLoop, 1000/24);}

	playCounter = 1;

	if (firstTimePlay == true)
	{
		bestScore = g_fuzzle.score;
		// show best score
		worstScore = g_fuzzle.score;
		totalPlayTime = Math.round(g_levelDirector.myClock);
		totalPlay = playCounter;
		totalHeartsCollected = heartsCollectedCounter;
		totalPowerupsCollected = powerupsCollectedCounter;
		totalDeath = deathCounter;
		firstTimePlay = false;
	} else
	{
		if (g_fuzzle.score > bestScore)
		{
			bestScore = g_fuzzle.score;
			// show best score
		}
		else {bestScore = bestScore;}
		if (g_fuzzle.score < worstScore)
		{
			worstScore = g_fuzzle.score;
		}
		else {worstScore = worstScore;}
		totalPlayTime += Math.round(g_levelDirector.myClock);
		totalPlay += playCounter;
		totalHeartsCollected = heartsCollectedCounter;
		totalPowerupsCollected = powerupsCollectedCounter;
		totalDeath = deathCounter;
	}
}

LevelDirector.prototype.gameOver = function()
{
	g_gameState = "gameover";
	g_background = new Background("gameover",0);
	g_background.render();
	g_button = new Button("gamereplayup");
	g_button.render();
	g_button = new Button("gamestatsup");
	g_button.render();
	g_button = new Button("gameinstructup");
	g_button.render();

}

function gotoMainMenu()
{
	g_levelDirector = new LevelDirector();
	g_levelDirector.mainMenu();
}

function gotoInstructions()
{
	g_levelDirector = new LevelDirector();
	g_levelDirector.showInstructions();
}

function gotoStatistics()
{
	g_levelDirector = new LevelDirector();
	g_levelDirector.showStatistics();
}

function gotoGame()
{
	g_levelDirector = new LevelDirector();
	g_levelDirector.startLevel();
}

function rendermainmenu()
{
	g_background = new Background("gamemainmenu",0);
	g_background.render();
	g_button = new Button("gameplayup");
	g_button.render();
	g_button = new Button("gamestatsup");
	g_button.render();
	g_button = new Button("gameinstructup");
	g_button.render();
}


/* -------------------- Pause Loop ------------------- */
function pause()
{
	if (g_paused == false )
	{
		g_gameState = "paused";
		g_paused = true;
		g_audioLoop.pause();
		clearInterval(g_renderInterval);
		clearInterval(g_clockInterval);
		clearInterval(g_createObstacleInterval);

	var pauseScreen = document.getElementById("pausescreen");
	g_context.drawImage(pauseScreen, 0, 0, g_canvas.width, g_canvas.height);
	}
	else
	{
		g_paused = false;
		gobacktoGame();
		g_audioLoop.play();
		g_gameState = "inlevel";
	}
}

function gobacktoGame()
{
	g_renderInterval = setInterval(renderLoop, 1000/24);	
	g_clockInterval = setInterval(clockLoop, 100);
	g_createObstacleInterval = setInterval(createObstacle, 1000/1000);

}

/* --------- End of Pause Loop ------------------ */

function clockLoop()
{
	if ( g_paused )
	return;

	var transition = 400;

	g_levelDirector.myClock += 1;

	if (g_levelDirector.myCurrentLevel < 4)
	{
	g_levelDirector.myCurrentLevel = (g_levelDirector.myClock - (g_levelDirector.myClock % transition)) / transition;
	}

	g_fuzzle.score += (g_levelDirector.myCurrentLevel+1);
}
