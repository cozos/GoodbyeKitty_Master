// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text



function LevelDirector()
{
   this.myCurrentLevel = 0;
   this.myClock = 0;
   this.myAllianceClock = 0;
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
      g_powerupGUN = false;
      g_alliance = [];
      g_obstacle = [];
	  g_universe = "Heaven";
	  g_helltimer = 0;
	  
      g_fuzzle = new fuzzle();
      g_HUD = new HUD();
      g_NumberPrinter = new NumberPrinter();

      g_gameState = "inlevel";

      g_audioLoop = document.getElementById("background_loop");
      g_audioLoop.loop = true;
      g_audioLoop.volume = 0.3;
      g_audioLoop.currentTime = 0;
      g_audioLoop.play();
   }

   g_inputInterval = setInterval(inputLoop, 1000/24);
   g_clockInterval = setInterval(clockLoop, 100);
   g_allianceClockInterval = setInterval(allianceClockLoop, 1000/24);
   g_renderInterval = setInterval(renderLoop, 1000/24);
   g_createObstacleInterval = setInterval(createObstacle, 1000/1000);
}

LevelDirector.prototype.hellLevel = function()
{
	g_gameState = "hellcutscene";
	clearInterval(g_createObstacleInterval);
	clearInterval(g_clockInterval);
   	g_universe = "Hell";
   	g_tempalliance = g_alliance;
   	g_alliance = [];
   	var a;
	a = new Alliance("devil", g_alliance.length, g_alliance.length+1,1,0,windowHeight);
	g_alliance.push(a);
	a = new Alliance("devil", g_alliance.length, g_alliance.length+1,1,windowWidth,windowHeight);
	g_alliance.push(a);
	a = new Alliance("devil", g_alliance.length, g_alliance.length+1,1,0.5 * windowWidth,windowHeight);
	g_alliance.push(a); 
}

LevelDirector.prototype.heavenLevel = function()
{
	g_gameState = "heavencutscene";
	clearInterval(g_createObstacleInterval);
	clearInterval(g_clockInterval);
   	g_universe = "Heaven";
    g_tempalliance = g_alliance;
   	g_alliance = [];
   	var a;
   	for (var i = 0; i< 10; i++){
   	a = new Alliance("angelalliance", g_alliance.length, g_alliance.length+1,1,(1+i) * 0.1 *windowWidth,0);
	g_alliance.push(a);
	}
	
}

LevelDirector.prototype.gameOverCutScene = function()
{
	var saveData;
	g_gameState = "gameovercutscene";

	clearInterval(g_inputInterval);
	clearInterval(g_renderInterval);
	clearInterval(g_clockInterval);
	clearInterval(g_createObstacleInterval);

	if (g_fuzzle.posy < g_canvas.height)
	{g_renderInterval = setInterval(renderLoop, 1000/24);}

	playCounter = 1;

	if(firstTimePlay && !hasLoaded)
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
	}
	else
	{
		if (g_fuzzle.score > bestScore)
		{
			bestScore = g_fuzzle.score;
			// show best score
		}
		
		if (g_fuzzle.score < worstScore)
		{
			worstScore = g_fuzzle.score;
		}
		
		totalPlayTime += Math.round(g_levelDirector.myClock);
		totalPlay += playCounter;
		totalHeartsCollected = heartsCollectedCounter;
		totalPowerupsCollected = powerupsCollectedCounter;
		totalDeath = deathCounter;
	}
	
	// If we support HTML5 Local Storage, we're going to
	// create a JSON string and then store that.
	if(supports_storage)
	{
		//alert("The enemy has taken the intelligence.");
		
		// Construct the JSON string.
		saveData = '{"bestScore":' + bestScore +
		',"worstScore":' + worstScore +
		',"totalPlayTime":' + totalPlayTime +
		',"totalPlay":' + totalPlay +
		',"totalHeartsCollected":' + totalHeartsCollected +
		',"totalPowerupsCollected":' + totalPowerupsCollected +
		',"totalDeath":' + totalDeath +
		'}';
		
		// Now store it.
		window.localStorage.setItem(storage_prefix + 'SavedScores', saveData);
	}
}

LevelDirector.prototype.gameOver = function()
{
	g_projectile =[];
	g_afterEffects = [];
	g_universe = "Heaven";
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
	var pressP2Continue = document.getElementById("PressP");
	g_context.drawImage(pressP2Continue, 0.5*g_canvas.width - (0.5*g_resize*pressP2Continue.width) , 0.3*g_canvas.height - (0.5*g_resize*pressP2Continue.height) , pressP2Continue.width*g_resize, pressP2Continue.height*g_resize);
	var GamePaused = document.getElementById("GamePaused");
	g_context.drawImage(GamePaused, 0.5*g_canvas.width - (1.5*0.5*g_resize*GamePaused.width) , 0.2*g_canvas.height - (1.5*0.5*g_resize*GamePaused.height) , GamePaused.width*g_resize*1.5, GamePaused.height*g_resize*1.5);

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
	
	if(g_universe == "Heaven"){
	g_fuzzle.score += (g_levelDirector.myCurrentLevel+1);
	}
	else{
	g_fuzzle.score += (g_levelDirector.myCurrentLevel+1) * 3;
	g_helltimer += 1;
	}
}

function allianceClockLoop()
{
	g_levelDirector.myAllianceClock += 0.2;
}
