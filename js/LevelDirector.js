// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text



function LevelDirector()
{
   this.myCurrentLevel = 1;
   this.myCurrentWave = 0;
   this.myClock = 0;
   this.myGameOverClock = 0;

   this.myEOLLives = 2;
   this.myEOLScore = 0;
}

LevelDirector.prototype.mainMenu = function()
{
	g_gameState = "mainmenu";
	rendermainmenu();
}

LevelDirector.prototype.showStatistics = function()
{
	g_background = new Background("gamestatisticsscreen",0);
	g_background.render();
	g_button = new Button("gamebackup");
	g_button.render();

            g_context.fillStyle = "black";
	    g_context.font="20px Comic Sans MS";
            g_context.fillText("Best score : " + bestScore,0.75*g_canvas.width,0.35*g_canvas.height);
            g_context.fillText("Worst score : " + worstScore,0.65*g_canvas.width,0.40*g_canvas.height);
            g_context.fillText("Total Play Time : " + totalPlayTime,0.55*g_canvas.width,0.45*g_canvas.height);
            g_context.fillText("Total Play : " + totalPlay,0.50*g_canvas.width,0.50*g_canvas.height);
            g_context.fillText("Total Number of Hearts Collected : " + totalHeartsCollected,0.35*g_canvas.width,0.55*g_canvas.height);
            g_context.fillText("Total Number of Powerups Collected : " + totalPowerupsCollected,0.25*g_canvas.width,0.60*g_canvas.height);
            g_context.fillText("Total Number of Death : " + totalDeath,0.55*g_canvas.width,0.70*g_canvas.height);

	g_gameState = "instatistics";
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
   if ( this.myCurrentLevel == 1 )
   {
      g_background = new Background("sky", 5);
      g_foreground = new Background("cloud", 8);
      g_fuzzle = new fuzzle();
      g_HUD = new HUD();

      g_gameState = "inlevel";
      
      g_audioLoop = document.getElementById("background_loop");
      g_audioLoop.loop = true;
      g_audioLoop.volume = 1;
      g_audioLoop.play();
   }

   g_inputInterval = setInterval(inputLoop, 1000/24);
   g_clockInterval = setInterval(clockLoop, 100);
   g_renderInterval = setInterval(renderLoop, 1000/24);
   g_createObstacleInterval = setInterval(createObstacle, 1000/1000);
}

LevelDirector.prototype.gameOver = function()
{
	g_gameState = "gameover";

	clearInterval(g_inputInterval);
	clearInterval(g_renderInterval);
	clearInterval(g_clockInterval);
	clearInterval(g_createObstacleInterval);

	g_context.clearRect(0,0,g_canvas.width,g_canvas.height);
	g_background = new Background("gameover",0);
	g_background.render();
	g_button = new Button("gamereplayup");
	g_button.render();
	g_button = new Button("gamestatsup");
	g_button.render();
	g_button = new Button("gameinstructup");
	g_button.render();
	playCounter = 1;

	if (firstTimePlay == true)
	{
		bestScore = Math.round(g_levelDirector.myClock);
		// show best score
		worstScore = Math.round(g_levelDirector.myClock);
		totalPlayTime = Math.round(g_levelDirector.myClock);
		totalPlay = playCounter;
		totalHeartsCollected = heartsCollectedCounter;
		totalPowerupsCollected = powerupsCollectedCounter;
		totalDeath = deathCounter;
		firstTimePlay = false;
	} else
	{
		if (Math.round(g_levelDirector.myClock) > bestScore)
		{
			bestScore = Math.round(g_levelDirector.myClock);
			// show best score
		}
		else {bestScore = bestScore;}
		if (Math.round(g_levelDirector.myClock) < worstScore)
		{
			worstScore = Math.round(g_levelDirector.myClock);
		}
		else {worstScore = worstScore;}
		totalPlayTime += Math.round(g_levelDirector.myClock);
		totalPlay += playCounter;
		totalHeartsCollected = heartsCollectedCounter;
		totalPowerupsCollected = powerupsCollectedCounter;
		totalDeath = deathCounter;
	}
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
		clearInterval(g_renderInterval);
		clearInterval(g_clockInterval);
		clearInterval(g_createObstacleInterval);

	var pauseScreen = document.getElementById("gamemainmenu");
	g_context.drawImage(pauseScreen, 0, 0, g_canvas.width, g_canvas.height);
	}
	else
	{
		g_gameState = "inlevel";
		g_paused = false;
		renderLoop();

		g_context.fillStyle = "red";
		g_context.font="60px Comic Sans MS";
		g_context.fillText("3",0.45*g_canvas.width,0.5*g_canvas.height); 
		setTimeout(rendercountdown2,1000);
	}
}

function rendercountdown2()
{
	g_context.fillText("2",0.5*g_canvas.width,0.5*g_canvas.height);
	setTimeout(rendercountdown1,1000);
}

function rendercountdown1()
{
		g_context.fillText("1",0.55*g_canvas.width,0.5*g_canvas.height);
		setTimeout(gobacktoGame,1000);
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

	var tempLevel = 1;
	var transition = 100;

	g_levelDirector.myClock += 1;

	if (g_levelDirector.myCurrentLevel < 3)
	{
	tempLevel = g_levelDirector.myCurrentLevel;
	g_levelDirector.myCurrentLevel = (g_levelDirector.myClock - (g_levelDirector.myClock % transition)) / transition;
	}
}
