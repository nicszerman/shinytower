/*
Functions:
	startGame()
	setTile(row,col,item)
		Args
			item is itemNumber or imageName
	fillFloor(floorArray)
	updateChar()
	indexToRowCol(index)
	rowcolToIndex(row, col)
	rowcolHasChar(row, col)
	notify(message, duration)
	sendMessage(sendMessage, keydownFun)
	clearMessage()
	godMode()
*/
/*
* The variables used in the game
*/
var char = {level: 0, life: 0, attack: 0, defense: 0, experience: 0,
	yellow: 0, blue: 0, red: 0, row: 0, col: 0, tower: {}, floor: 0,
	state: 'char_front_rest', data: {}, tutorial: {}};
var newChar=$.extend(true, {}, char); // Used by the keypressed to find out if a new char state is valid
var oldChar=$.extend(true, {}, char); // Used by functions that require old states

var GOD=false;

var Core = {};

Core.startGame = function startGame(){
	keyAction={};
	specialItems=tree.clone(specialItemsBackUp, true);// Because it modifies with the game
	disableKeyboard();// Resets keyboard
	enableKeyboard();//
	clearBoard();
	$('#display-fight').hide();
	$('#mob-screen').hide();
	$('#shop-container').hide();
	$('#dialog_warrior').hide();
	$('#dialog_item').hide();

	char.level =1;
	char.life = 1000;
	char.attack = 10;
	char.defense = 10;
	char.coins = 0;
	char.experience = 0;
	char.yellow = 0;
	char.blue = 0;
	char.red = 0;
	char.tower = jQuery.extend(true, {}, floors);
	char.floor = 0;
	char.state='char_front_rest';
	char.data = {
		notificationTimeout: 0, // Used by notify()
		floorReached: 0, // Used by wind compass
		fairyDialog: 1, // Used by fairy
		fight: { // Used to store data about fights
			fastFightSpeed: 25, // Used by fastForward
			slowFightSpeed: 200, // Used by fastForward
			fightSpeed: 200 // Used by fight
		},
		dialogs: { // Used to store data about dialogs
			old_man_1: true,
			old_man_2: true,
			merchant_1: true,
			merchant_2: true,
			thief_1: true,
			thief_2: true,
			princess: true
		},
		items: {
			starPickaxe: false
		},
		mobs: {
			chaos_1_defeated: false
		}
	};
	char.tutorial = {
		firstShop: true
	};
	// Set the player's position to the tile with 99
	var newPos=indexToRowCol( char.tower[char.floor].indexOf(99) );
	char.row= newPos.row;
	char.col= newPos.col;

	// newChar defines the new state,
	// that's why it should be the same as char here
	newChar= $.extend(true, {}, char);
	char.floor=-1;// So updateChar() loads the floor


	updateChar();

	if(GOD)
		godMode();

	// Developing
	// <place in-development things>
}

// Save here acions to perform when a key is pressed
var keyAction={};
function keyPressed(key){
	if(!KEYBOARD_ENABLED)return;
	key=Number(key);
	console.log('The key ' + key + ' was pressed.');
	console.log('The processed key ' + Core.keyAdapter(key) + ' was pressed.');
	newChar= $.extend(true, {}, char);

	// Left: 37&100, Up: 38&104, Right: 39&102, Down: 40&98
	// A: 65, W: 87, D: 68, S: 83
	switch(key){
		case 37:
		case 100:
		case 65:
			newChar.col--;
			newChar.state='char_left_walk';
			char.state='char_left_rest';
			setTimeout(function(){
				if(char.state!='char_left_walk')
					return;
				newChar.state='char_left_rest';
				updateChar();
			},110);
			break;
		case 39:
		case 102:
		case 68:
			newChar.col++;
			newChar.state='char_right_walk';
			char.state='char_right_rest';
			setTimeout(function(){
				if(char.state!='char_right_walk')
					return;
				newChar.state='char_right_rest';
				updateChar();
			},110);
			break;
		case 38:
		case 104:
		case 87:
			newChar.row--;
			newChar.state='char_back_walk';
			char.state='char_back_rest';
			setTimeout(function(){
				if(char.state!='char_back_walk')
					return;
				newChar.state='char_back_rest';
				updateChar();
			},110);
			break;
		case 40:
		case 98:
		case 83:
			newChar.row++;
			newChar.state='char_front_walk';
			char.state='char_front_rest';
			setTimeout(function(){
				if(char.state!='char_front_walk')
					return;
				newChar.state='char_front_rest';
				updateChar();
			},110);
			break;
		case 82:
			Messages.confirmRestart();
			return;
		default: // If another key is pressed
			if(keyAction[key]!==undefined)
				keyAction[key]();
			return;
	}

	// Check if is a valid position
	if(newChar.col==0 || newChar.col==12 || newChar.row==0 || newChar.row==12){
		newChar= $.extend(true, {}, char);
		updateChar();
		return;
	}

	// Do the block action
	var itemNumber = getTile(newChar.row,newChar.col);
	if(specialItems[itemNumber]!==undefined){// Avoid crash if doesn't has item
		// newChar.state=char.state; <-- this seems to not
		// work, but it appeared, commented for precaution
		specialItems[itemNumber].action();
	}

	updateChar();
}

function updateChar(){ // Updates the character position

	var hasChar=rowcolHasChar(char.row,char.col);
	var tile = $('#rowcol-'+char.row+'-'+char.col);
	tile.removeClass(hasChar);
	tile = $('#rowcol-'+newChar.row+'-'+newChar.col);
	tile.addClass(newChar.state);// Move char to new tile

	if(newChar.floor!=char.floor){
		fillFloor(newChar.tower[newChar.floor]);
		if(char.floor!=-1)// If game just started floor=-1
			Music.play_floor(newChar.floor, char.floor);
		else
			Music.play_floor(newChar.floor);
	}

	// Update the left displays
	$('#stat_level').text(newChar.level);
	$('#stat_life').text(newChar.life);
	$('#stat_attack').text(newChar.attack);
	$('#stat_defense').text(newChar.defense);
	$('#stat_coins').text(newChar.coins);
	$('#stat_experience').text(newChar.experience);
	$('#stat_yellow').text(newChar.yellow);
	$('#stat_blue').text(newChar.blue);
	$('#stat_red').text(newChar.red);
	$('#stat_floor').text(newChar.floor);

	// Update the floor reached for the wind_compass (item# 35)
	if( newChar.data.floorReached<newChar.floor )
		newChar.data.floorReached=newChar.floor;

	char=$.extend(true, {}, newChar);
}


function fillFloor(floorArray){;// Not index of floor; actual floor stored in memory

	for (var i = floorArray.length - 1; i >= 0; i--) {
		var rowcol=indexToRowCol(i);
		setTile( rowcol.row, rowcol.col, floorArray[i] );
	};
}

// Setting the character's classes isn't handled here; handled in updateChar()
// Handles the graphics of the tile only
function setTile(row, col, item){

	// Check if row passed is an index number
	if(item === undefined && isNumber(row))
	{
		item=col;
		row=indexToRowCol(row);
		col=row.col;
		row=row.row;
	}

	// Check if the tile has the char class not to lose it
	var hasChar= rowcolHasChar(row,col);

	var tile = $('#rowcol-'+row+'-'+col);

	tile.removeClass();
	tile.addClass('tile').addClass(getItemName(item));
	if(hasChar!='')tile.addClass(hasChar);

	if(typeof item === 'number'){
		var image='url("./res/image/' + getItemName(item) + '.gif")';
		if(getItemName(item)!='')tile.css("background-image", image);
		else tile.css("background-image", 'url("./res/image/road.gif")');
		// To avoid problems if item wasn't configured
	}
	if(typeof item === 'string'){
		var image='url("./res/image/' + item + '.gif")';
		if( item != '')tile.css("background-image", image);
	}
}

function getTile(row, col){
	return char.tower[char.floor][rowcolToIndex(row,col)];
}

function getItemName(itemNumber){

	switch(itemNumber){
		case 0:
			return 'road';
		case 1:
			return 'wall';
		case 19:
			return 'lava';
		case 20:
			return 'stars';
		default:
			if(specialItems[itemNumber]!==undefined)// Avoid crash if doesn't has item
			{
				if(specialItems[itemNumber]['imageName']!==undefined)
					return specialItems[itemNumber].imageName;
				if(specialItems[itemNumber]['getImageName']!==undefined)
					return specialItems[itemNumber].getImageName();
				return specialItems[itemNumber].itemName;
			}
			return '';
	}
}

// Returns an empty string if rowcol doesn't has a char
// If it does have, it returns the char state
function rowcolHasChar(row, col){
	// Check if overloaded
	if(col === undefined)
	{
		// Check if row passed is an index number
		if(isNumber(row)){
			row=indexToRowCol(row);
			col=row.col;
			row=row.row;
		}
		// Else it is rowcol var
		else{
			col=row.col;
			row=row.row;
		}
	}

	var tile = $('#rowcol-'+row+'-'+col);

	var hasChar= ''; // Empty means no
	var indexOfChar=tile.attr('class').indexOf('char');
	if(indexOfChar>-1)// Check if has char
	{
		while(tile.attr('class').charAt(indexOfChar)!= '' && tile.attr('class').charAt(indexOfChar)!= ' ')
			indexOfChar++;
		hasChar=tile.attr('class').slice(tile.attr('class').indexOf('char'),indexOfChar);
	}// Gets the state of char that it has
	return hasChar;
}

// Send a notification
function notify(message, duration){// TODO: Check that it works
	// Default for duration
	duration= duration || 500;

	clearInterval(newChar.data.notificationTimeout);
	// Reset the animation
	var name=$('#notification-container').css('animation-name');
	$('#notification-container').css('animation-name','');
	$('#notification-container').css('animation-name',name);

	$('#notification').text(message);
	$('#notification-container').css('animation-duration', (duration/1000)+'s');
	$('#notification-container').css('display', 'flex');

	newChar.data.notificationTimeout= setTimeout(function(){$('#notification-container').css('display', 'none');}, duration);
	char.data.notificationTimeout=newChar.data.notificationTimeout;
}

// Send a message
// Accepts a keydown function to be run instead of a basic
// function which closes the message when a space or enter is pressed
function sendMessage(message, keydownFun){
	// Disable the keyboard to wait for an enter
	KEYBOARD_ENABLED=false;
	disableKeyboard();
	// Wait for an enter || space, unless
	// a keydown function was passed
	keydownFun = keydownFun || (function(e){
		switch (Core.keyAdapter( e.which )) {
			case 'enter':
			case 'mobScreen':
			case 'windCompass':
			case 'holyWater':
				clearMessage();
				break;
		}
	});
	enableKeyboard(keydownFun);

	// Send message
	message='<div style="width:100%;">'+message+'</div>';
	$('#message-container>#message').html(message);

	$('#message-container').show();

}

// Clear a message sent with the above function
function clearMessage(){
	disableKeyboard();
	KEYBOARD_ENABLED=true;
	enableKeyboard();
	$('#message-container').hide();
}

// Open a shop panel
function shop(main, opts){
	var $shop=$('#shop-container .flex-container').empty();
	$shop.append('<h5 id="main_text" class="text-flow"></h5>');
	var escaped= $shop.find('#main_text').text(main).text();
	$shop.find('#main_text').html(escaped.replace(/\n/g, '<br>'));

	for (var i = 1; i <= opts.length; i++) {
		var str='<div class="flex_item-'+i+'"><h5 id="option-'+i+'">'+opts[i-1]+'</h5></div>';
		$shop.append(str);
	}
	$shop.parent().show();
}

// Enable godMode for development
function godMode(){
	newChar.attack+=10000;
	newChar.defense+=10000;
	newChar.yellow+=100;
	newChar.blue+=100;
	newChar.red+=100;
	newChar.coins+=100000;
	newChar.experience+=100000;
	newChar.data.floorReached=21;
	specialItems[33].action();// Holy Water
	specialItems[34].action();// Light Emblem
	specialItems[35].action();// Wind Compass
	updateChar();
}

// Enable fastForward or disable, must replace
// to this function every manual execution
function fastForward(on){
	// Just an example
	if(on){
		newChar.data.fight.fightSpeed=newChar.data.fight.fastFightSpeed;
	}
	else{
		newChar.data.fight.fightSpeed=newChar.data.fight.slowFightSpeed;
	}
	char.data.fight.fightSpeed=newChar.data.fight.fightSpeed
}

// Levels up the passed character, if no characted
// is passed newChar will be default
Core.levelUp = function levelUp(character, levels){
	// Input
	if(typeof character == 'number'){
		levels = character;
		character = undefined;
	}
	var obj = character || newChar;
	levels = levels || 1;

	var x=0;
	while(x++<levels){
		obj.life+=150*Math.pow(obj.level, 1/10);
		obj.life=toInt(obj.life);
		obj.life+=800;
		obj.attack+=7;
		obj.defense+=7;
		obj.level++;
	}


	if(character===undefined)// Call intended to level up the char
		updateChar();
	return obj;
};

Core.keyAdapter = function keyAdapter(key){

	// The most called keys will end the execution here
	switch (key) {
		// FILL
		case 13:
		case 32: // Spacebar
		case 101: // 5 numpad
			return 'enter';
		case 37:
		case 65:
		case 100:
			return 'left';
		case 39:
		case 68:
		case 102:
			return 'right';
		case 38:
		case 87:
		case 104:
			return 'up';
		case 40:
		case 83:
		case 98:
			return 'down';
		case 27:
			return 'esc';
		case 18:
			return 'alt';
		case 9:
			return 'tab';
		case 76:
			return 'mobScreen'
		case 79:
			return 'windCompass';
		case 85:
			return 'holyWater';
	}

	// Here onward will only go the unused keys,
	// just to support unexpected input

	/*
		Code from:
		http://stackoverflow.com/questions/2220196/how-to-decode-character-pressed-from-jquerys-keydowns-event-handler
	*/
	var _to_ascii = {
	  '188': '44',
	  '109': '45',
	  '190': '46',
	  '191': '47',
	  '192': '96',
	  '220': '92',
	  '222': '39',
	  '221': '93',
	  '219': '91',
	  '173': '45',
	  '187': '61', //IE Key codes
	  '186': '59', //IE Key codes
	  '189': '45'  //IE Key codes
	}

  var c = key;

  //normalize keyCode
  if (_to_ascii[c]) {
    c = _to_ascii[c];
  }

  if (c >= 65 && c <= 90) {
    c = String.fromCharCode(c + 32);
  } else {
    c = String.fromCharCode(c);
  }

	return c;
};

function indexToRowCol(index){
	return ( {row: (Math.floor(index/11)+1), col: (index%11+1)} );
}
function rowcolToIndex(row, col){/* if col isn't passed, it means
								 row is an object with row and col */
	if(typeof col !== "undefined")return ((row-1)*11+col-1);
	return ((row.row-1)*11+row.col-1);
}

Core.restart = function restart(){
	Music.stopFloor(char.floor, 3000);
	Core.startGame();
};

Core.loadGame = function loadGame(){
	Music.load();
	Doc.load();
};

// Detecting keypress
// Added a keydownFun param for custom keyboard
var KEYBOARD_ENABLED=true;// Works on the keyPressed function
var keys = {};
var counter=0;
function enableKeyboard(keydownFun){
	// Default to the game's general keydown function
	keydownFun = keydownFun || (function (e) {

		// To avoid opposed keys being pressed at the same time
		// Esc: 27, Left: 37, Up: 38, Right: 39, Down: 40
		switch(e.which){
			case 9:// tab
			case 18:// alt
			case 27:// To stop all keypresses intervals
				for(var key in keys){
					clearInterval(keys[key]);
					delete keys[key];
				}
				return;
			case 37:
				clearInterval(keys[39]);
				delete keys[39];
				e.preventDefault();
				break;
			case 39:
				clearInterval(keys[37]);
				delete keys[37];
				e.preventDefault();
				break;
			case 38:
				clearInterval(keys[40]);
				delete keys[40];
				e.preventDefault();
				break;
			case 40:
				clearInterval(keys[38]);
				delete keys[38];
				e.preventDefault();
				break;
		}

		// To avoid the key repeater; if key repeates without the if, the setInterval id
		// is overwritten with a new one and the old one would be impossible to stop.
		if(!counter || !keys[e.which]){keyPressed(e.which);}
		if(counter==2)counter=-1;
		counter++;

		if (keys[e.which])
			return;

		// Start the interval and save the id to stop it at keyup
		keys[e.which] = setTimeout(function(){
			keys[e.which] = setInterval(keyPressed, 100, e.which);
		}, 150);

	});
	$(document).on('keydown.interaction',keydownFun);
}

// To disable the keyboard when in menus
// Will not disable special keys because
// they are handled with keypress
function disableKeyboard(){
	$(document).off('keydown.interaction');
	//$(document).off('keydown');
	// Disable the repeting keys
	for(var key in keys){
		console.log('Stopping the interval of key: '+key);
		clearInterval(keys[key]);
		delete keys[key];
	}
}


$(document).on('keyup.interaction',function (e) {
	clearInterval(keys[e.which]);
	delete keys[e.which];
});


// DOM loaded
$(window).load(function () {
	//debugger;
	Core.loadGame();
	Core.startGame();
	if(!GOD)
		Messages.tutorial();
});



// Clear the board to restart
function clearBoard() {
	for (var i = 120; i >= 0; i--) {
		var rowcol=indexToRowCol(i);
		var tile = $('#rowcol-'+rowcol.row+'-'+rowcol.col);
		tile.removeClass().addClass('tile');
	}
}
