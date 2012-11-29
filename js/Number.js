/** * Its Number Printer. * @constructor */function NumberPrinter(){	//0 attributes	this.zero = document.getElementById("zero");	this.zerowidth = this.zero.width * g_resize;	this.zeroheight = this.zero.height * g_resize;	//1 attributes	this.one = document.getElementById("one");	this.onewidth = this.one.width * g_resize;	this.oneheight = this.one.height * g_resize;	//2 attributes	this.two = document.getElementById("two");	this.twowidth = this.two.width * g_resize;	this.twoheight = this.two.height * g_resize;	//3 attributes	this.three = document.getElementById("three");	this.threewidth = this.three.width * g_resize;	this.threeheight = this.three.height * g_resize;	//4 attributes	this.four = document.getElementById("four");	this.fourwidth = this.four.width * g_resize;	this.fourheight = this.four.height * g_resize;	//5 attributes	this.five = document.getElementById("five");	this.fivewidth = this.five.width * g_resize;	this.fiveheight = this.five.height * g_resize;	//6 attributes	this.six = document.getElementById("six");	this.sixwidth = this.six.width * g_resize;	this.sixheight = this.six.height * g_resize;	//7 attributes	this.seven = document.getElementById("seven");	this.sevenwidth = this.seven.width * g_resize;	this.sevenheight = this.seven.height * g_resize;	//8 attributes	this.eight = document.getElementById("eight");	this.eightwidth = this.eight.width * g_resize;	this.eightheight = this.eight.height * g_resize;	//9 attributes	this.nine = document.getElementById("nine");	this.ninewidth = this.nine.width * g_resize;	this.nineheight = this.nine.height * g_resize;	//H attributes	this.h = document.getElementById("H");	this.hwidth = this.h.width * g_resize;	this.hheight = this.h.height * g_resize;

	//D attributes	this.d = document.getElementById("D");	this.dwidth = this.d.width * g_resize;	this.dheight = this.d.height * g_resize;

	//M attributes	this.m = document.getElementById("M");	this.mwidth = this.m.width * g_resize;	this.mheight = this.m.height * g_resize;	//S attributes	this.s = document.getElementById("S");	this.swidth = this.s.width * g_resize;	this.sheight = this.s.height * g_resize;}/** * Renders the numbers as images. */NumberPrinter.prototype.render = function(){            g_context.fillStyle = "black";	    g_context.font="15pt Comic Sans MS";	if (g_gameState == "inlevel" || g_gameState == "gameovercutscene" || g_gameState == "hellcutscene" || g_gameState == "heavencutscene")
	{
	printNumberIntoStringAsImages(g_fuzzle.score,0.50*g_canvas.width,0.10*g_canvas.height,0.35,false,false);
	printNumberIntoStringAsImages(g_fuzzle.lives,0.95*g_canvas.width,0.06*g_canvas.height,0.35,false,false);
	}
	else if (g_gameState == "instatistics")
	{
		var remainingdays = totalPlayTime%864000;
		var remaininghours = remainingdays%36000;
		var remainingminutes = remaininghours % 600;
		var remainingseconds = remainingminutes/10;
		var seconds = Math.floor(remainingminutes/10);
		var minutes = Math.floor(remaininghours / 600);
		var hours = Math.floor(remainingdays/36000);
		var days = Math.floor(totalPlayTime/864000);

	printNumberIntoStringAsImages(bestScore,0.14*g_canvas.width,0.3*g_canvas.height,0.35,false,false);
	printNumberIntoStringAsImages(worstScore,0.45*g_canvas.width,0.3*g_canvas.height,0.35,false,false);
	printNumberIntoStringAsImages(days,0.68*g_canvas.width,0.3*g_canvas.height,0.35,false,false);
	g_context.drawImage(this.d, 0.70*g_canvas.width, 0.3*g_canvas.height, this.dwidth * 0.35, this.dheight * 0.35);
	printNumberIntoStringAsImages(hours,0.763*g_canvas.width,0.3*g_canvas.height,0.35,true,true);
	g_context.drawImage(this.h, 0.773*g_canvas.width, 0.3*g_canvas.height, this.hwidth * 0.35, this.hheight * 0.35);
	printNumberIntoStringAsImages(minutes,0.836*g_canvas.width,0.3*g_canvas.height,0.35,true,true);
	g_context.drawImage(this.m, 0.846*g_canvas.width, 0.3*g_canvas.height, this.mwidth * 0.35, this.mheight * 0.35);
	printNumberIntoStringAsImages(seconds,0.915*g_canvas.width,0.3*g_canvas.height,0.35,true,true);
	g_context.drawImage(this.s, 0.925*g_canvas.width, 0.3*g_canvas.height, this.swidth * 0.35, this.sheight * 0.35);
	printNumberIntoStringAsImages(totalPlay,0.14*g_canvas.width,0.53*g_canvas.height,0.35,false,false);
	printNumberIntoStringAsImages(totalHeartsCollected,0.45*g_canvas.width,0.53*g_canvas.height,0.35,false,false);
	printNumberIntoStringAsImages(totalPowerupsCollected,0.8*g_canvas.width,0.53*g_canvas.height,0.35,false,false);
	printNumberIntoStringAsImages(totalDeath,0.73*g_canvas.width,0.75*g_canvas.height,0.35,false,false);

	}}function printNumberIntoStringAsImages(number,printX,printY,ratio,printonR,limit2){	var str = number.toString();	var length = str.length;	var imageWidth = 0;	var totalWidth = 0;	if (printonR == false)
	{	// Cycle through all numbers first to get the total width	for (var counter = length; counter >= 0; counter--)	{	var n = str.charAt(counter);
		if (n == '0')		{		   totalWidth += g_NumberPrinter.zerowidth * ratio;		} 		else if (n == '1')		{		   totalWidth += g_NumberPrinter.onewidth * ratio;		} else if (n == '2')		{		   totalWidth += g_NumberPrinter.twowidth * ratio;		} else if (n == '3')		{		   totalWidth += g_NumberPrinter.threewidth * ratio;		} else if (n == '4')		{		   totalWidth += g_NumberPrinter.fourwidth * ratio;		} else if (n == '5')		{		   totalWidth += g_NumberPrinter.fivewidth * ratio;		} else if (n == '6')		{		   totalWidth += g_NumberPrinter.sixwidth * ratio;		} else if (n == '7')		{		   totalWidth += g_NumberPrinter.sevenwidth * ratio;		} else if (n == '8')		{		   totalWidth += g_NumberPrinter.eightwidth * ratio;		} else if (n == '9')		{		   totalWidth += g_NumberPrinter.ninewidth * ratio;		}

	}
	}	// Cycle through each number and print them at the respective places	for (var counter = length; counter >= 0; counter--)	{	var n = str.charAt(counter);		if (n == '0')		{		   g_context.drawImage(g_NumberPrinter.zero, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.zerowidth * ratio, printY, g_NumberPrinter.zerowidth * ratio, g_NumberPrinter.zeroheight * ratio);		   imageWidth -= g_NumberPrinter.zerowidth * ratio;		} 		else if (n == '1')		{		   g_context.drawImage(g_NumberPrinter.one, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.onewidth * ratio, printY, g_NumberPrinter.onewidth * ratio, g_NumberPrinter.oneheight * ratio);		   imageWidth -= g_NumberPrinter.onewidth * ratio;		} else if (n == '2')		{		   g_context.drawImage(g_NumberPrinter.two, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.twowidth * ratio, printY, g_NumberPrinter.twowidth * ratio, g_NumberPrinter.twoheight * ratio);		   imageWidth -= g_NumberPrinter.twowidth * ratio;		} else if (n == '3')		{		   g_context.drawImage(g_NumberPrinter.three, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.threewidth * ratio, printY, g_NumberPrinter.threewidth * ratio, g_NumberPrinter.threeheight * ratio);		   imageWidth -= g_NumberPrinter.threewidth * ratio;		} else if (n == '4')		{		   g_context.drawImage(g_NumberPrinter.four, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.fourwidth * ratio, printY, g_NumberPrinter.fourwidth * ratio, g_NumberPrinter.fourheight * ratio);		   imageWidth -= g_NumberPrinter.fourwidth * ratio;		} else if (n == '5')		{		   g_context.drawImage(g_NumberPrinter.five, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.fivewidth * ratio, printY, g_NumberPrinter.fivewidth * ratio, g_NumberPrinter.fiveheight * ratio);		   imageWidth -= g_NumberPrinter.fivewidth * ratio;		} else if (n == '6')		{		   g_context.drawImage(g_NumberPrinter.six, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.sixwidth * ratio, printY, g_NumberPrinter.sixwidth * ratio, g_NumberPrinter.sixheight * ratio);		   imageWidth -= g_NumberPrinter.sixwidth * ratio;		} else if (n == '7')		{		   g_context.drawImage(g_NumberPrinter.seven, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.sevenwidth * ratio, printY, g_NumberPrinter.sevenwidth * ratio, g_NumberPrinter.sevenheight * ratio);		   imageWidth -= g_NumberPrinter.sevenwidth * ratio;		} else if (n == '8')		{		   g_context.drawImage(g_NumberPrinter.eight, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.eightwidth * ratio, printY, g_NumberPrinter.eightwidth * ratio, g_NumberPrinter.eightheight * ratio);		   imageWidth -= g_NumberPrinter.eightwidth * ratio;		} else if (n == '9')		{		   g_context.drawImage(g_NumberPrinter.nine, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.ninewidth * ratio, printY, g_NumberPrinter.ninewidth * ratio, g_NumberPrinter.nineheight * ratio);		   imageWidth -= g_NumberPrinter.ninewidth * ratio;		}

		if (limit2 == true && counter == 0 && length == 1)
		{		   g_context.drawImage(g_NumberPrinter.zero, printX + 0.5*totalWidth + imageWidth - g_NumberPrinter.zerowidth * ratio, printY, g_NumberPrinter.zerowidth * ratio, g_NumberPrinter.zeroheight * ratio);		   imageWidth -= g_NumberPrinter.zerowidth * ratio;		} 	}
}