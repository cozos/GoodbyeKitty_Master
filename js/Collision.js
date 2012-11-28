/*
 * Checks if a singular object collides with a singular object
 */
function collision_singleVSsingle(single1, single2, flag){
	checkCollision(single1, single2, flag);
}
	

/*
 * Checks if a singular object collides with an array of objects 
 */
function collision_singleVSarray(single, array, flag){
	var flag = false;

	for(var i = 0; i < array.length; i++){
		if(checkCollision(single, array[i], flag) == true)
		{
			array.splice(i,1);
			flag = true;
		}
		else 
		{
			flag = false;
		}
	}
	if (flag == true)
	{
		return true;
	}
	else
	{
		return false;
	}
}
	
/*
 * Checks if an array of objects with another array of objects 
 */
function collision_arrayVSarray(array, array){
	// TODO
}
	
/**
* Checks for collision between two objects.
    * @param Fuzzle|Obstacle|Trail $object1
    *       The first object to be checked for collision.
    * 
    * @param Fuzzle|Obstacle|Trail $object2
    *       The second object to be checked for collision.
    * 
    * @param int $fuzzle
    *       Flag sets tells us which hitbox to reconfigure if Fuzzle collides into something. 0 specify that both object1 and object2 are not fuzzle, 1 for object1, 2 for object2. This is because Fuzzle's hitbox is kind of fucked up, so it has to be adjusted a little.
 	*/
 	
 	function checkCollision(object1, object2,flag){
 		// Defines hitbox parameters
 		var lower_x_1 = object1.posx;
 		var upper_x_1 = object1.posx + object1.width;
 		
 		var lower_y_1 = object1.posy;
 		var upper_y_1 = object1.posy + object1.height;
 		
 		var lower_x_2 = object2.posx;
 		var upper_x_2 = object2.posx + object2.width;
 		
 		var lower_y_2 = object2.posy;
 		var upper_y_2 = object2.posy + object2.height;
 		
 		// Adjusts hitbox for fuzzle
 		lower_x_1 += 0.02 * g_canvas.width
 		upper_x_1 += -0.05 * g_canvas.width;
		lower_y_1 += 0.04 * g_canvas.height;	
		upper_y_1 += -0.03 * g_canvas.height;
		
		g_context.drawImage(g_fuzzle.Hitboxtest, lower_x_1, lower_y_1);
		g_context.drawImage(g_fuzzle.Hitboxtest, lower_x_1, upper_y_1);
		g_context.drawImage(g_fuzzle.Hitboxtest, upper_x_1, lower_y_1);
		g_context.drawImage(g_fuzzle.Hitboxtest, upper_x_1, upper_y_1);

		
 		// If the objects intersect, call collide.
 		if ( (((lower_x_1 > lower_x_2) && (lower_x_1 < upper_x_2)) || ((upper_x_1 > lower_x_2) && (upper_x_1 < upper_x_2))) &&
 			 (((lower_y_1 > lower_y_2) && (lower_y_1 < upper_y_2)) || ((upper_y_1 > lower_y_2) && (upper_y_1 < upper_y_2)))){
 			
 			var powerorhealth = object2.collided();
 			if(powerorhealth == "powerup"){
				if (object1 == g_fuzzle)
				{
				object1.collidedpowerup();
				powerupsCollectedCounter++;

			  	g_fuzzleaudio = document.getElementById("yay");
			  	g_fuzzleaudio.volume = 1;
			  	g_fuzzleaudio.play();
				}
			}
			else if (powerorhealth == "health"){
				if (object1 == g_fuzzle)
				{
				g_fuzzle.health += 1;
				heartsCollectedCounter++;

			  	g_fuzzleaudio = document.getElementById("woohoo");
			  	g_fuzzleaudio.volume = 1;
			  	g_fuzzleaudio.play();
				}
			}
 			else if (powerorhealth == "pillar"){
				if (object1 == g_fuzzle)
				{
				object1.collidedobstacle();
				deathCounter++;
				}
			  	g_fuzzleaudio = document.getElementById("pillarCrumble");
			  	g_fuzzleaudio.volume = 0.8;
			  	g_fuzzleaudio.play();
			}
 			else if (powerorhealth == "devil"){
				if (object1 == g_fuzzle)
				{
				object1.collidedobstacle();
				deathCounter++;
				}
			  	g_fuzzleaudio = document.getElementById("demonDeath");
			  	g_fuzzleaudio.volume = 1;
			  	g_fuzzleaudio.play();
			}
 			return true;
		}
 	}
	
	/**
 	* Iterates through the object array and renders each one.
 	*/
	function renderArray(array){
		for (var j=0; j<array.length; j++){
			// If the object past the left of the screen, it is deleted.
			if(array[j].posx < -200){
			array.splice(j,1);
			}
			
			// Renders the object
			array[j].render(j);
		}
	}
