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
	for(var i = 0; i < array.length; i++){
		checkCollision(single, array[i], flag);
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
 		if (flag == 1){
 			lower_x_1 += 60;
 			upper_x_1 += -60;
 			lower_y_1 += 50;
 			upper_y_1 += -40;
 		} else if (flag == 2){
 			lower_x_2 += 60;
 			upper_x_2 += -60;
 			lower_y_2 += 50;
 			upper_y_2 += -40;
		}
 		
 		// If the objects intersect, call collide.
 		if ( (((lower_x_1 > lower_x_2) && (lower_x_1 < upper_x_2)) || ((upper_x_1 > lower_x_2) && (upper_x_1 < upper_x_2))) &&
 			 (((lower_y_1 > lower_y_2) && (lower_y_1 < upper_y_2)) || ((upper_y_1 > lower_y_2) && (upper_y_1 < upper_y_2)))){
 			
 			var powerorhealth = object2.collided();
 			if(powerorhealth == 1){
				object1.collidedpowerup();
				powerupsCollectedCounter++;
			}
			else if (powerorhealth == 2){
				g_fuzzle.health += 1;
				heartsCollectedCounter++;
			}
 			else 
			{
				object1.collidedobstacle();
				deathCounter++;
			}
 			
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
			array[j].render();
		}
	}
