var Items = {};

Items.getByName=function(name){
	// Search through all items
	for(var item in specialItems){
		if(specialItems[item].itemName==name || prettyName(specialItems[item].itemName)==name)
			return specialItems[item];// toInt(item); Option 2
	}
	return null; // -1; Option 2
};

var floors = [	// Save the floors, the index is the
				// floor number, then each item is a tile
	[/*0*/
	1,20,20,20,20,13,20,20,20,20,1,
	1,20,20,20,20,98,20,20,20,20,1,
	1,20,20,20,20,0,20,20,20,20,1,
	1,20,20,20,20,0,20,20,20,20,1,
	1,20,20,20,20,0,20,20,20,20,1,
	1,20,20,20,20,0,20,20,20,20,1,
	1,1,20,20,20,0,20,20,20,1,1,
	1,1,1,1,1,2,1,1,1,1,1,
	19,1,19,1,0,24,0,1,19,1,19,
	19,19,19,19,19,99,19,19,19,19,19,
	19,19,19,19,19,0,19,19,19,19,19
	],

	[/*1*/
	13,98,6,40,41,40,0,0,0,0,0,
 	1,1,1,1,1,1,1,1,1,1,0,
  11,0,44,2,0,1,11,6,11,1,0,
  6,44,10,1,0,1,11,6,11,1,0,
  1,2,1,1,0,1,1,1,43,1,0,
  6,45,0,1,0,2,63,40,42,1,0,
  9,0,7,1,0,1,1,1,1,1,0,
 	1,2,1,1,0,0,0,0,0,0,0,
	0,45,0,1,1,4,1,1,1,2,1,
	11,12,6,1,8,97,0,1,6,46,7,
 	11,34,6,1,0,14,0,1,6,6,6
	],

	[/*2*/
	14,1,0,55,0,1,10,9,6,8,1,
	97,1,9,1,12,1,10,9,6,7,1,
	0,1,6,1,6,1,10,9,6,54,1,
	0,1,6,1,6,1,1,1,1,2,1,
	0,1,0,1,0,0,0,2,0,0,1,
	0,1,2,1,1,2,1,1,2,1,1,
	0,5,0,0,0,0,1,0,54,0,1,
	0,1,2,1,1,3,1,115,1,115,1,
	0,1,6,1,12,11,1,0,1,0,1,
	98,1,6,1,12,11,1,0,1,0,1,
	13,1,10,1,12,11,1,26,1,27,1
	],

	[/*3*/
	71,41,6,1,23,22,21,1,1,1,1,
	41,6,0,1,0,0,0,1,0,42,0,
	6,44,0,1,1,2,1,1,0,1,0,
	1,2,1,1,0,44,0,1,6,1,41,
	0,0,0,1,1,1,0,1,6,1,42,
	40,1,0,42,41,42,0,1,6,1,41,
	40,1,1,1,1,1,0,0,0,1,0,
	0,0,0,0,0,1,1,2,1,1,0,
	1,1,1,1,42,1,41,0,41,1,0,
	1,0,0,0,0,1,9,42,6,1,98,
	14,97,1,1,1,1,10,12,6,1,13
	],

	[/*4*/
	0,43,0,1,0,25,0,1,0,43,0,
	2,1,2,1,0,0,0,1,2,1,2,
	0,1,0,1,1,115,1,1,0,1,0,
	0,1,44,1,48,49,48,1,44,1,0,
	42,1,11,1,9,48,9,1,11,1,42,
	42,1,11,1,1,4,1,1,11,1,42,
	41,1,0,1,46,47,46,1,0,1,41,
	0,1,0,1,10,46,10,1,0,1,0,
	0,1,0,1,1,3,1,1,0,1,0,
	98,1,0,1,6,0,6,1,0,1,97,
	13,1,0,43,0,0,0,43,0,1,14
	],

	[/*5*/
	36,1,11,1,12,63,0,0,63,6,7,
	0,1,10,1,63,0,0,0,0,63,6,
	48,1,0,1,45,0,1,1,2,1,1,
	0,2,63,1,76,45,1,0,46,45,27,
	48,1,0,1,1,1,1,0,0,0,45,
	10,1,0,0,0,42,44,0,0,0,0,
	9,1,1,43,1,1,1,1,0,0,0,
	0,26,1,43,1,0,0,0,46,47,0,
	1,1,1,42,1,2,1,3,1,2,1,
	97,0,1,0,1,42,1,9,2,98,1,
	14,0,42,0,0,0,1,6,1,13,1
	],

	[/*6*/
	30,56,1,9,1,6,51,39,1,12,12,
	56,6,1,10,1,0,6,51,1,65,12,
	6,49,3,0,3,49,0,6,1,0,65,
	0,0,1,47,1,0,0,0,1,66,0,
	1,1,1,4,1,1,1,1,1,2,1,
	0,0,64,0,6,6,6,0,64,0,0,
	0,1,1,1,1,1,1,1,1,1,1,
	0,1,48,2,48,0,0,0,0,0,1,
	0,1,2,1,2,1,1,1,1,3,1,
	0,1,48,1,0,0,1,1,0,97,1,
	0,0,0,1,13,98,2,2,0,14,1
  ],

	[/*7*/
	13,98,0,0,0,0,0,0,1,1,1,
	1,1,0,49,1,3,1,56,0,1,1,
	1,0,49,9,1,50,1,10,56,0,1,
	0,0,1,1,1,15,1,1,1,0,0,
	0,0,3,50,115,32,15,50,3,0,0,
	0,1,1,1,1,15,1,1,1,1,0,
	0,1,11,10,1,50,1,9,11,1,0,
	0,1,6,11,1,3,1,11,6,1,0,
	0,1,1,7,7,12,7,7,1,1,0,
	0,0,1,1,1,4,1,1,1,0,0,
	1,0,0,2,14,97,0,2,0,0,1
  ],

	[/*8*/
	14,1,0,0,0,0,1,0,6,56,0,
	97,1,0,1,1,2,1,2,1,1,0,
	0,1,0,1,0,0,3,0,0,1,10,
	201,1,0,1,60,1,1,1,48,1,43,
	48,1,0,1,11,1,13,98,0,1,43,
	49,1,9,1,11,1,1,1,1,1,0,
	48,1,43,1,0,0,0,1,0,49,0,
	0,1,43,1,1,1,47,1,2,1,1,
	0,1,0,56,0,1,56,1,0,0,0,
	0,1,1,1,2,1,0,1,1,1,0,
	0,0,60,0,0,1,0,51,50,51,0
  ],

	[/*9*/
	35,6,0,1,1,1,0,0,0,1,0,
	6,0,66,2,0,0,0,1,0,2,56,
	1,2,1,1,0,1,1,1,0,1,6,
	0,0,0,1,0,1,97,0,0,1,6,
	0,0,0,4,0,1,14,1,0,1,11,
	1,3,1,1,0,1,1,1,0,1,1,
	9,52,10,1,60,1,13,1,0,1,11,
	1,2,1,1,0,0,98,2,0,1,6,
	56,11,56,1,1,3,1,1,0,1,6,
	7,56,11,1,65,60,65,1,0,2,56,
	72,7,56,2,12,65,12,1,0,1,0
  ],

	[/*10*/
	0,1,1,9,66,1,66,10,1,1,0,
	0,0,1,1,2,1,2,1,1,0,65,
	0,0,0,0,0,1,0,0,0,65,12,
	0,1,0,1,1,1,1,1,0,1,1,
	48,1,0,0,6,6,6,0,0,1,6,
	49,1,0,1,1,1,1,2,1,1,6,
	48,1,0,115,97,14,1,0,2,49,0,
	0,1,1,1,1,1,1,2,1,1,0,
	0,1,11,9,10,1,0,49,0,1,6,
	98,1,11,9,10,4,60,1,60,1,6,
	13,1,11,9,10,1,7,1,7,1,11
  ],

	[/*11*/
	11,1,6,1,7,1,8,1,12,77,12,
	11,1,6,1,7,1,8,1,47,47,47,
	11,1,6,1,7,1,8,1,0,47,0,
	2,1,2,1,2,1,2,1,1,3,1,
	0,0,0,0,0,1,0,0,0,0,0,
	2,1,1,3,1,1,1,3,1,1,2,
	9,1,0,68,12,67,12,68,0,1,10,
	9,1,66,1,1,1,1,1,66,1,10,
	9,1,66,1,23,22,21,1,66,1,10,
	1,1,4,1,11,0,11,1,4,1,1,
	14,97,0,0,0,0,0,0,0,98,13
  ],

	[/*12*/
	27,9,1,0,54,55,54,0,1,12,38,
	10,0,1,0,1,2,1,0,1,0,12,
	0,0,1,0,1,55,1,0,1,0,0,
	0,67,1,0,1,6,1,0,1,58,0,
	67,61,1,0,1,6,1,0,1,57,58,
	1,3,1,0,1,11,1,0,1,3,1,
	0,0,0,0,1,11,1,0,0,0,0,
	1,1,1,0,1,1,1,0,1,1,1,
	9,67,2,68,68,69,68,68,2,67,10,
	1,1,1,1,1,3,1,1,1,1,1,
	13,98,0,0,0,0,0,0,0,97,14
  ],

	[/*13*/
	0,67,0,0,0,0,0,1,0,61,0,
	0,1,1,1,1,1,2,1,0,1,0,
	0,1,0,0,68,0,0,1,0,1,0,
	12,1,4,1,1,1,0,1,0,1,0,
	54,1,0,0,61,1,68,1,10,1,0,
	55,1,0,62,15,1,69,1,10,1,0,
	54,1,61,115,26,1,68,1,10,1,9,
	0,1,1,1,1,1,0,1,0,1,9,
	0,54,0,1,0,0,0,61,0,1,9,
	1,1,0,1,12,1,1,1,1,1,0,
	14,97,0,3,98,13,1,31,62,2,0
  ],

	[/*14*/
	1,0,58,36,13,98,0,0,0,0,1,
	1,0,12,1,1,1,1,1,12,0,1,
	1,0,1,1,1,1,1,1,1,0,1,
	1,0,1,1,1,33,1,1,1,0,1,
	1,0,1,1,1,115,1,1,1,0,1,
	1,0,11,1,1,61,1,1,11,0,1,
	1,0,20,20,1,62,1,20,20,0,1,
	1,0,20,20,1,61,1,20,20,0,1,
	1,0,20,20,1,3,1,20,20,0,1,
	1,68,69,68,3,97,3,68,69,68,1,
	1,1,1,1,1,14,1,1,1,1,1
  ],

	[/*15*/
	0,0,0,97,14,20,13,98,0,0,0,
	0,20,20,20,20,20,20,20,20,20,0,
	0,20,20,1,1,1,1,1,20,20,0,
	0,20,1,1,26,1,27,1,1,20,0,
	0,20,1,1,9,1,9,1,1,20,0,
	0,20,1,1,10,1,10,1,1,20,0,
	0,20,20,1,0,1,0,1,20,20,0,
	0,20,20,1,2,1,2,1,20,20,0,
	0,20,20,20,0,0,0,20,20,20,0,
	0,20,20,20,20,4,20,20,20,20,0,
	0,0,0,0,0,0,0,0,0,0,0
  ],

	[/*16*/
	20,20,20,20,20,97,14,20,20,20,20,
	20,20,20,20,20,0,20,20,20,20,20,
	20,20,20,20,20,0,20,20,20,20,20,
	20,20,20,20,1,4,1,20,20,20,20,
	20,20,20,1,1,119,1,1,20,20,20,
	20,20,20,1,1,53,1,1,20,20,20,
	20,20,20,1,1,98,1,1,20,20,20,
	20,20,20,1,1,13,1,1,20,20,20,
	20,20,20,20,1,1,1,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20
  ],

	[/*17*/
	20,58,62,0,0,0,0,0,0,0,58,
	20,62,20,20,20,20,20,20,20,20,0,
	20,0,20,58,0,0,0,0,0,0,58,
	20,0,20,0,20,20,20,20,20,20,20,
	20,0,20,0,20,58,0,0,0,58,20,
	20,0,20,58,0,0,20,20,20,0,20,
	20,0,20,20,20,20,20,58,0,58,20,
	20,62,20,20,20,14,20,0,20,20,20,
	20,58,62,0,70,97,20,58,0,0,58,
	20,20,20,20,20,20,20,20,20,20,0,
	13,98,70,0,0,0,0,0,0,0,58
  ],

	[/*18*/
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,1,1,1,20,20,20,20,
	20,20,20,1,1,28,1,1,20,20,20,
	20,20,20,1,1,115,1,1,20,20,20,
	20,20,20,1,1,4,1,1,20,20,20,
	20,20,20,20,1,4,1,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	14,97,0,0,0,0,0,0,0,98,0
  ],

	[/*19*/
	0,0,0,0,0,0,0,0,0,0,0,
	0,20,0,20,20,20,20,20,0,20,0,
	0,20,0,20,20,20,20,20,0,20,0,
	0,20,0,20,20,13,20,20,0,20,0,
	0,20,0,20,20,98,20,20,0,20,0,
	0,20,53,20,20,0,20,20,53,20,0,
	0,20,115,20,20,59,20,20,115,20,0,
	0,20,75,20,20,129,20,20,80,20,0,
	0,20,20,20,20,0,20,20,20,20,0,
	0,20,20,20,20,0,20,20,20,20,0,
	0,0,0,0,0,0,0,0,0,97,14
  ],

	[/*20*/
	70,10,50,11,62,8,62,11,50,10,70,
	12,20,6,20,7,20,7,20,6,20,12,
	20,9,50,0,58,0,58,0,50,9,20,
	11,20,6,20,0,14,0,20,6,20,11,
	62,7,58,0,0,97,0,0,58,7,62,
	8,20,0,20,0,20,0,20,0,20,8,
	62,7,58,0,0,98,0,0,58,7,62,
	11,20,6,20,0,13,0,20,6,20,11,
	20,9,50,0,58,0,58,0,50,9,20,
	12,20,6,20,7,20,7,20,6,20,12,
	70,10,50,11,62,8,62,11,50,10,70
  ],

	[/*21*/
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,0,0,20,59,20,0,0,20,20,
	20,0,0,20,20,57,20,20,0,0,20,
	20,0,0,0,20,57,20,0,0,0,20,
	20,20,0,0,0,0,0,0,0,20,20,
	20,20,0,0,0,97,0,0,0,20,20,
	20,20,20,0,0,20,0,0,20,20,20,
	20,20,20,20,15,14,15,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20,
	20,20,20,20,20,20,20,20,20,20,20
  ],

];

var specialItems={
	/*
		Each special item has to have:
			itemName{ the class name for css }
			action(){does what the item should do}
		Each mob item has to have:
			(Apart from the above)
			stats{stats(life, attack, defense, etc)}
		Optional:
			imageName
	*/
	0:
		{
			itemName: 'road',
			action: function(){
				Music.play_sound('move');
			},
			mob: false
		},
	1:
		{
			itemName: 'wall',
			action: function(){
				newChar= $.extend(true, {}, char);
			},
			mob: false
		},
	2:
		{
			itemName: 'door_yellow',
			action: function(){
				if(newChar.yellow>0){
					newChar.yellow--;

					// Set the tile of the door to a road
					setTile(newChar.row, newChar.col, 0);
					newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;

					// Make the char don't move to the door's position
					newChar.row = char.row;
					newChar.col = char.col;

					return;
				}

				newChar=$.extend(true, {}, char);
				return;

			},
			mob: false
		},

	3:
		{
			itemName: 'door_blue',
			action: function(){
				if(newChar.blue>0){
					newChar.blue--;
					// Set the tile of the door to a road
					setTile(newChar.row, newChar.col, 0);
					newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
					// Make the char don't move to the door's position
					newChar.row = char.row;
					newChar.col = char.col;
					return;
				}
				newChar=$.extend(true, {}, char);
				return;
			},
			mob: false
		},

	4:
		{
			itemName: 'door_red',
			action: function(){
				if(newChar.red>0){
					newChar.red--;
					// Set the tile of the door to a road
					setTile(newChar.row, newChar.col, 0);
					newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
					// Make the char don't move to the door's position
					newChar.row = char.row;
					newChar.col = char.col;
					return;
				}
				newChar=$.extend(true, {}, char);
				return;
			},
			mob: false
		},

	5:
		{
			itemName: 'door_locked',
			action: function(){
				newChar=$.extend(true, {}, char);
			},
			mob: false
		},

	6:
		{
			itemName: 'key_yellow',
			action: function(){
				Music.play_sound('pick_up_key');
				newChar.yellow++;
				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('FOUND YELLOW KEY!');
			},
			mob: false
		},

	7:
		{
			itemName: 'key_blue',
			action: function(){
				Music.play_sound('pick_up_key');
				newChar.blue++;
				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('FOUND BLUE KEY!');
			},
			mob: false
		},

	8:
		{
			itemName: 'key_red',
			action: function(){
				Music.play_sound('pick_up_key');
				newChar.red++;
				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('FOUND RED KEY!');
			},
			mob: false
		},

	9:
		{
			itemName: 'defense_gem',
			action: function(){
				Music.play_sound('pick_up_item');
				newChar.defense+=3;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 3 DEFENSE!');
			},
			mob: false
		},

	10:
		{
			itemName: 'attack_gem',
			action: function(){
				Music.play_sound('pick_up_item');
				newChar.attack+=3;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 3 ATTACK!');
			},
			mob: false
		},

	11:
		{
			itemName: 'small_potion',
			action: function(){
				Music.play_sound('pick_up_item');
				newChar.life+=200;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 200 HEALTH!');
			},
			mob: false
		},

	12:
		{
			itemName: 'big_potion',
			action: function(){
				Music.play_sound('pick_up_item');
				newChar.life+=500;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 500 HEALTH!');
			},
			mob: false
		},

	13:
		{
			itemName: 'stair_up',
			action: function(){
				Music.play_sound('use_stairs');
				newChar.floor++;
				var newPos=indexToRowCol( newChar.tower[newChar.floor].indexOf(97) );
				newChar.row= newPos.row;
				newChar.col= newPos.col;
				// Avoid accidental move
				KEYBOARD_ENABLED=false;
				setTimeout(function(){KEYBOARD_ENABLED=true;},240);
			},
			mob: false
		},

	14:
		{
			itemName: 'stair_down',
			action: function(){
				Music.play_sound('use_stairs');
				newChar.floor--;
				var newPos=indexToRowCol( newChar.tower[newChar.floor].indexOf(98) );
				newChar.row= newPos.row;
				newChar.col= newPos.col;
				// Avoid accidental move
				KEYBOARD_ENABLED=false;
				setTimeout(function(){KEYBOARD_ENABLED=true;},240);
			},
			mob: false
		},

	15:
		{// This one can't be opened
			itemName: 'door_jail_fake',
			action: function(){
				newChar=$.extend(true, {}, char);
			},
			mob: false,
			imageName: 'door_jail'
		},

	19:
		{
			itemName: 'lava',
			action: function(){
				newChar= $.extend(true, {}, char);
			},
			mob: false
		},

	20:
		{
			itemName: 'stars',
			action: function(){
				newChar= $.extend(true, {}, char);
			},
			mob: false
		},

	21:
		{
			itemName: 'shop_right',
			action: function(){
				newChar=$.extend(true, {}, char);
			},
			mob: false
		},

	22:
		{
			itemName: 'shop_head',
			action: function(){
				// Do not move the char over
				newChar=$.extend(true, {}, char);

				disableKeyboard();// To move inside the menu

				// TODO
				// The tutorial (if first time)
				if(newChar.tutorial.firstShop){
					notify('See your stats on the left', 3000);
					newChar.tutorial.firstShop = false;
				}
				// END TODO

				// Load the contents
				switch(newChar.floor){
					case 3:
						var main_text='Want to improve your abilities?\nFor only 25 cold coins, you can choose:';
						var opts=['800 point increase in life','4 point increase in attack','4 point increase in defense','Leave the store'];
						break;
					case 11:
						var main_text='Want to improve your abilities?\nFor only 100 cold coins, you can choose:';
						var opts=['4000 point increase in life','20 point increase in attack','20 point increase in defense','Leave the store'];
						break;
					default:
						console.log('newChar.floor insn\'t 3 nor 11. newChar.floor is '+newChar.floor);
						var main_text='This is an error';
						var opts=[];
						break;
				}
				shop(main_text,opts);

				// Var to be used
				var $shop=$('#shop-container .flex-container');

				$shop.find('.flex_item-'+specialItems[22].selected).toggleClass('selected');

				// Close open windows
				if(specialItems[34].mobScreen)
					keyAction[76]();
				if(specialItems[35].floorScreen)
					keyAction[79]();

				// Move in the menu with the keys
				enableKeyboard(function(e){
					e.preventDefault();

					var key=Number(e.which);
					console.log('The key ' + key + ' was pressed.');

					// Vars to be used
					var $shop=$('#shop-container .flex-container');
					var obj=specialItems[22];// A reference to 'this'
					var selected=obj.selected;
					var coins_needed;
					var life_earned;
					var attack_earned;
					var defense_earned;

					// Set the numbers for this shop
					switch(newChar.floor){
						case 3:
							coins_needed=25;
							life_earned=800;
							attack_earned=4;
							defense_earned=4;
							break;
						case 11:
							coins_needed=100;
							life_earned=4000;
							attack_earned=20;
							defense_earned=20;
							break;
						default:
							console.log('newChar.floor insn\'t 3 nor 11. newChar.floor is '+newChar.floor);
							main_text='This is an error';
							break;
					}

					// Unselect the current one
					$shop.find('.flex_item-'+selected).removeClass('selected');

					// Spacebar: 32, Left: 37&100, Up: 38&104, Right: 39&102, Down: 40&98, W: 87, A: 65, S: 83, D: 68
					switch (Core.keyAdapter( key ) ) {
						case 'left':
						case 'up':
							if(selected>1){
								selected--;
								Music.play_sound('move_shop');
							}
							break;
						case 'right':
						case 'down':
							if(selected<opts.length){
								selected++;
								Music.play_sound('move_shop');
							}
							break;
						case 'enter':
							// Make the selected action
							if(selected<4 && newChar.coins>=coins_needed){
								newChar.coins-=coins_needed;
								if(selected==1)
									newChar.life+=life_earned;
								if(selected==2)
									newChar.attack+=attack_earned;
								if(selected==3)
									newChar.defense+=defense_earned;
								// Update
								updateChar();
								break;
							}
							if(selected<4 && newChar.coins<coins_needed)
								break;
							// (selected == 4)
							selected=1;
						case 'esc':// ESC (if(selected == 4) Leave the store)
							Music.play_sound('exit_shop');
							$shop.parent().hide();
							disableKeyboard();
							enableKeyboard();
							break;
						case 'mobScreen':// The mob stats
							if(keyAction[key])
								keyAction[key]();
							break;
					}
					obj.selected=selected;

					// Select the new one
					$shop.find('.flex_item-'+selected).toggleClass('selected');

				});// Keydown event close

			},
			mob: false,
			selected: 1
		},

	23:
		{
			itemName: 'shop_left',
			action: function(){
				newChar=$.extend(true, {}, char);
			},
			mob: false
		},

	24:
		{
			itemName: 'fairy',
			action: function(){
				// Do not do anything else except the dialogs
				newChar=$.extend(true, {}, char);
				if(newChar.data.fairyDialog==1){
					// Start the dialog
					var afterFun=function(){
						newChar.yellow++;
						newChar.blue++;
						newChar.red++;
						Music.play_sound('end_fairy_dialog');
						// Move the fairy to the left
						newChar.tower[newChar.floor][93]=0;
						setTile(9,6,0);
						newChar.tower[newChar.floor][92]=24;
						setTile(9,5,24);
						newChar.data.fairyDialog++;
						updateChar();
						notify('EARNED ONE KEY OF EACH TYPE!');
					};
					dialog('fairy_1', afterFun);
				} else

				if(newChar.data.fairyDialog==2 && newChar.data.luckyCross){
					// Start the dialog
					var afterFun=function(){
						newChar.life=Math.round(newChar.life*4/3);
						newChar.attack=Math.round(newChar.attack*4/3);
						newChar.defense=Math.round(newChar.defense*4/3);
						newChar.data.fairyDialog++;
						updateChar();
						notify('YOU ARE MUCH STRONGER!!', 1400);
					};
					dialog('fairy_2', afterFun);
				}
			},
			mob: false
		},

	25:
		{
			itemName: 'thief',
			action: function(){
				// Do not do anything else except the dialogs
				newChar=$.extend(true, {}, char);
				if(newChar.data.dialogs.thief_1){
					// Start the dialog
					var afterFun=function(){
						// Save as done
						newChar.data.dialogs.thief_1=false;
						// Open the door
						newChar.tower[2][67]=0;
						updateChar();
					};
					dialog('thief_1', afterFun);
				}
				else if(newChar.data.dialogs.thief_2 && newChar.data.items.starPickaxe){
					newChar.data.items.starPickaxe = false;
					newChar.data.dialogs.thief_2 = false;
					updateChar();
					var afterFun=function(){
						// Leave to the roof
						newChar.tower[4][5]=0;
						setTile(1,6,0);
						// Make the bridge to the princess
						newChar.tower[18][rowcolToIndex(9,6)]=0;
						newChar.tower[18][rowcolToIndex(10,6)]=0;
						updateChar();
					};
					dialog('thief_2', afterFun);
				}
			},
			mob: false,
		},

	26:
		{
			itemName: 'old_man',
			action: function(){
				// Do not move the char over
				newChar=$.extend(true, {}, char);

				// Load the shop if you are in the old man shop level
				if(newChar.floor==5 || newChar.floor==13){
					disableKeyboard();// To move inside the menu

					// Load the contents
					switch(newChar.floor){
						case 5:
							var main_text='Hello, hero of humanity. As long as you have enough experience, I can make you more powerful:';
							var opts=['Level Up (100 points)','Increase 5 attack (30 points)','Increase 5 defense (30 points)','Leave the store'];
							break;
						case 13:
							var main_text='Hello, savior of humanity, as long as you have enough experience, I can make you stronger:';
							var opts=['Enhance yourself (270 points)','Increase 17 attack (95 points)','Increase 17 defense (95 points)','Leave the store'];
							break;
						default:
							console.log('newChar.floor insn\'t 5 nor 13. newChar.floor is '+newChar.floor);
							var main_text='This is an error';
							var opts=[];
							break;
					}
					shop(main_text,opts);

					// Var to be used
					var $shop=$('#shop-container .flex-container');

					$shop.find('.flex_item-'+specialItems[22].selected).toggleClass('selected');

					// Close open windows
					if(specialItems[34].mobScreen)
						keyAction[76]();
					if(specialItems[35].floorScreen)
						keyAction[79]();

					// Move in the menu with the keys
					enableKeyboard(function(e){
						e.preventDefault();

						var key=Number(e.which);
						console.log('The key ' + key + ' was pressed.');

						// Vars to be used
						var $shop=$('#shop-container .flex-container');
						var obj=specialItems[22];// A reference to 'this'
						var selected=obj.selected;
						var experience_needed_stat_increase;
						var experience_needed_level_up;
						var attack_earned_normal;
						var defense_earned_normal;
						var levels_earned;

						// Set the numbers for this shop
						switch(newChar.floor){
							case 5:
								experience_needed_stat_increase=30;
								experience_needed_level_up=100;
								attack_earned_normal=5;
								defense_earned_normal=5;
								levels_earned=1;
								break;
							case 13:
								experience_needed_stat_increase=95;
								experience_needed_level_up=270;
								attack_earned_normal=17;
								defense_earned_normal=17;
								levels_earned=3;
								break;
							default:
								console.log('newChar.floor insn\'t 3 nor 11. newChar.floor is '+newChar.floor);
								main_text='This is an error';
								break;
						}

						// Unselect the current one
						$shop.find('.flex_item-'+selected).removeClass('selected');

						// Spacebar: 32, Left: 37&100, Up: 38&104, Right: 39&102, Down: 40&98, W: 87, A: 65, S: 83, D: 68
						switch ( Core.keyAdapter(key) ) {
							case 'left':
							case 'up':
								if(selected>=2){
									selected--;
									Music.play_sound('move_shop');
								}
								break;
							case 'right':
							case 'down':
								if(selected<opts.length){
									selected++;
									Music.play_sound('move_shop');
								}
								break;
							case 'enter':
								// Make the selected action
								if(selected==1){
									if(newChar.experience<experience_needed_level_up)
										break;
									newChar.experience-=experience_needed_level_up;
									Core.levelUp(levels_earned);
									break;
								}

								if(selected<4){
									if(newChar.experience<experience_needed_stat_increase)
										break;
									newChar.experience-=experience_needed_stat_increase;
									if(selected==2)
										newChar.attack+=attack_earned_normal;
									if(selected==3)
										newChar.defense+=defense_earned_normal;
									// Update
									updateChar();
									break;
								}else{
									Music.play_sound('exit_shop');
									$shop.parent().hide();
									selected=1;
									disableKeyboard();
									enableKeyboard();
									break;
								}
							case 'esc':
								Music.play_sound('exit_shop');
								$shop.parent().hide();
								disableKeyboard();
								enableKeyboard();
								break;
							case 'mobScreen':
								if(keyAction[key])
									keyAction[key]();
								break;
						}
						obj.selected=selected;

						// Select the new one
						$shop.find('.flex_item-'+selected).toggleClass('selected');

					});// Keydown event close

				}else{// if newChar.floor==5 || 13 close
					if(newChar.floor==2 && newChar.data.dialogs.old_man_1) dialog('old_man_1', function(){
						newChar.attack+=70;
						notify('Earned 70 attack!', 1000);
						newChar.data.dialogs.old_man_1=false;
						updateChar();
					});

					else if(newChar.floor==15 && newChar.data.dialogs.old_man_2) dialog('old_man_2', function(){
						sendMessage(' \
						<div style="height: calc(100% + 120px);width: 100%;display:flex;flex-direction:column;margin: auto;align-items: center;"> \
							<p id="main_text" style=" display: block; position: relative;">Spend 500 experience points?</p> \
							<div style=" display: flex; width: 100%;"> \
								<div id="option_1" style="display: flex; position: relative; float: left; width: 50%;" class="selected"> <h1 style="margin:auto;">Yeah</h1> </div>	\
								<div id="option_2" style="display: flex; position: relative; float: right; width: 50%;" > <h1 style="margin:auto;">Maybe later</h1> </div> \
							</div> \
						</div>'
						,function(e){
							$('#option_1').removeClass('selected');
							$('#option_2').removeClass('selected');
							var option=newChar.data.optionSelected||1;
							switch ( Core.keyAdapter(e.which) ) {
								case 'left':
									if(option>1){
										option--;
										Music.play_sound('move_shop');
									}
									break;
								case 'right':
									if(option<2){
										option++;
										Music.play_sound('move_shop');
									}
									break;
								case 'enter':
									if(option==2){
										clearMessage();
									}
									if(option==1){
										if(newChar.experience>=500){
											newChar.attack+=120;
											newChar.experience-=500;
											clearMessage();
											notify('GAINED 120 ATTACK!');
											newChar.data.dialogs.old_man_2=false;
										}
										else{
											clearMessage();
											notify('NOT ENOUGH EXPERIENCE');
										}
									}
									option=1;
									break;
								case 'esc':
									clearMessage();
									break;
							}
							$('#option_'+option).addClass('selected');
							newChar.data.optionSelected=option;
							updateChar();
						});
					});
				}

			},
			mob: false,
			selected: 1
		},

	27:
		{
			itemName: 'merchant',
			action: function(){
				// Do not move the char over
				newChar=$.extend(true, {}, char);

				if(newChar.floor==5 || newChar.floor==12){
					disableKeyboard();// To move inside the menu

					// Load the contents
					switch(newChar.floor){
						case 5:
							var main_text='I’m sure you have other needs as well.\nAs long as you have money, I can help you:';
							var opts=['Buy a yellow key ($ 10)','Buy a blue key ($ 50)','Buy a red key ($ 100)','Leave the store'];
							break;
						case 12:
							var main_text='If you are short of gold, I may be of help:';
							var opts=['Sell a yellow key ($ 7)','Sell a blue key ($ 35)','Sell a red key ($ 70)','Leave the store'];
							break;
						default:
							console.log('newChar.floor insn\'t 5 nor 13. newChar.floor is '+newChar.floor);
							var main_text='This is an error';
							var opts=[];
							break;
					}
					shop(main_text,opts);

					// Var to be used
					var $shop=$('#shop-container .flex-container');

					$shop.find('.flex_item-'+specialItems[22].selected).toggleClass('selected');

					// Close open windows
					if(specialItems[34].mobScreen)
						keyAction[76]();
					if(specialItems[35].floorScreen)
						keyAction[79]();

					// Move in the menu with the keys
					enableKeyboard(function(e){
						e.preventDefault();

						var key=Number(e.which);
						console.log('The key ' + key + ' was pressed.');

						// Vars to be used
						var $shop=$('#shop-container .flex-container');
						var obj=specialItems[22];// A reference to 'this'
						var selected=obj.selected;
						var yellow_key_price;
						var blue_key_price;
						var red_key_price;

						// Set the numbers for this shop
						switch(newChar.floor){
							case 5:
								yellow_key_price=10;
								blue_key_price=50;
								red_key_price=100;
								break;
							case 12:
								yellow_key_price=7;
								blue_key_price=35;
								red_key_price=70;
								break;
							default:
								console.log('newChar.floor insn\'t 3 nor 12. newChar.floor is '+newChar.floor);
								break;
						}

						// Unselect the current one
						$shop.find('.flex_item-'+selected).removeClass('selected');

						// Spacebar: 32, Left: 37&100, Up: 38&104, Right: 39&102, Down: 40&98, W: 87, A: 65, S: 83, D: 68
						switch ( Core.keyAdapter(key) ) {
							case 'left':
							case 'up':
								if(selected>=2){
									selected--;
									Music.play_sound('move_shop');
								}
								break;
							case 'right':
							case 'down':
								if(selected<opts.length){
									selected++;
									Music.play_sound('move_shop');
								}
								break;
							case 'enter':
								// Make the selected action
								if(selected<4) {
									if(newChar.floor==5){
										if(selected==1 && newChar.coins>yellow_key_price){
											newChar.coins-=yellow_key_price;
											newChar.yellow++;
										}
										if(selected==2 && newChar.coins>blue_key_price){
											newChar.coins-=blue_key_price;
											newChar.blue++;
										}
										if(selected==3 && newChar.coins>red_key_price){
											newChar.coins-=red_key_price;
											newChar.red++;
										}
									}
									if(newChar.floor==12){
										if(selected==1 && newChar.yellow>0){
											newChar.coins+=yellow_key_price;
											newChar.yellow--;
										}
										if(selected==2 && newChar.blue>0){
											newChar.coins+=blue_key_price;
											newChar.blue--;
										}
										if(selected==3 && newChar.red>0){
											newChar.coins+=red_key_price;
											newChar.red--;
										}
									}
									// Update
									updateChar();
									break;
								}
								else {
									Music.play_sound('exit_shop');
									$shop.parent().hide();
									selected=1;
									disableKeyboard();
									enableKeyboard();
									break;
								}
							case 'esc':// ESC (if(selected == 4) Leave the store)
								Music.play_sound('exit_shop');
								$shop.parent().hide();
								disableKeyboard();
								enableKeyboard();
								break;
							case 'mobScreen':// The mob stats
								if(keyAction[key])
									keyAction[key]();
								break;
						}
						obj.selected=selected;

						// Select the new one
						$shop.find('.flex_item-'+selected).toggleClass('selected');

					});// Keydown event close

				}else{//if newChar.floor==5 || 12 close

					if(newChar.floor==2 && newChar.data.dialogs.merchant_1)dialog('merchant_1', function(){
						Core.levelUp(newChar);
						notify('Level Up!', 1000);
						newChar.life+=1000;
						newChar.defense+=85;
						setTimeout(function() {
							notify('Earned 85 defense and 1000 HP!',1000);
						},1050);
						newChar.data.dialogs.merchant_1=false;
						updateChar();
					});

					else if(newChar.floor==15 && newChar.data.dialogs.merchant_2) dialog('merchant_2', function(){
						sendMessage(' \
						<div style="height: calc(100% + 120px);width:100%;display:flex;flex-direction:column;margin: auto;align-items: center;"> \
							<p id="main_text" style="display:block;position:relative;">Spend 800 gold coins?</p> \
							<div style="display: flex; width: 100%;"> \
								<div id="option_1" style="display:flex;position:relative;float:left;width:50%;" class="selected"> <h1 style="margin:auto;">Yeah</h1> </div>	\
								<div id="option_2" style="display:flex;position:relative;float:right;width:50%;" > <h1 style="margin:auto;">Maybe later</h1> </div> \
							</div> \
						</div>'
						,function(e){
							$('#option_1').removeClass('selected');
							$('#option_2').removeClass('selected');
							var option=newChar.data.optionSelected||1;
							switch ( Core.keyAdapter(e.which) ) {
								case 'left':
									if(option>1){
										option--;
										Music.play_sound('move_shop');
									}
									break;
								case 'right':
									if(option<2){
										option++;
										Music.play_sound('move_shop');
									}
									break;
								case 'enter':
									if(option==1){
										if(newChar.coins>=800){
											clearMessage();
											Core.levelUp(newChar);
											notify('LEVEL UP', 1000);
											newChar.life+=1000;
											newChar.attack+=85;
											setTimeout(function(){notify('GAINED 85 ATTACK AND 1000 HP!', 1000);},1000);
											newChar.coins-=800;
											newChar.data.dialogs.merchant_2=false;
										}
										else{
											clearMessage();
											notify('NOT ENOUGH COINS');
										}
									}
									if(option==2){
										clearMessage();
									}
									option=1;
									break;
							}
							$('#option_'+option).addClass('selected');
							newChar.data.optionSelected=option;
							updateChar();
						});
					});
				}

			},
			mob: false
		},

	28:
		{
			itemName: 'princess',
			action: function(){
				newChar=$.extend(true, {}, char);
				if(newChar.data.dialogs.princess)
					dialog('princess', function(){
						newChar.data.dialogs.princess=false;
						newChar.tower[18][120]=13;
						setTile(11,11,13);
						updateChar();
					});
			},
			mob: false
		},

	30:
		{
			itemName: 'super_wing_1',
			action: function(){
				Core.levelUp(newChar);
				newChar.life+=200;
				newChar.attack+=4;
				newChar.defense+=4;
				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('EARNED STATS AND LEVEL!', 1000);
			},
			mob: false
		},

	31:
		{
			itemName: 'super_wing_2',
			action: function(){
				Core.levelUp(newChar);
				newChar.life+=600;
				newChar.attack+=12;
				newChar.defense+=12;
				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('EARNED STATS AND LEVELS!', 1000);
			},
			mob: false
		},

	32:
		{
			itemName: 'lucky_cross',
			action: function(){
				// Add as found
				newChar.data.luckyCross=true;
				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;

				sendMessage('<div style="display: block;"> \
				 <div style="color:sandybrown"><center><h1>Lucky Cross</h1></center></div> \
				 <h5><br>Give it to the fairy to enhance her abilities</h5>'+
			   fadeTextElement('<h6 style="bottom: 0px; float:right;">Space</h6>')+
				 '</div>');

				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;
 				updateChar();
			},
			mob: false
		},

	33:
		{
			itemName: 'holy_water',
			action: function(){
				// Add as found
				newChar.data.holyWater=true;

				sendMessage('<div style="display: block;"> \
				 <div style="color:sandybrown"><center><h1>Holy Water</h1></center></div> \
				 <h5><br>Drinking the holy water doubles your constitution </h5> \
				 <br><h5>To use it, press the <span style="color:#18D800">U</span> \
				 in your keyboard.</h5>'+
			   fadeTextElement('<h6 style="bottom: 0px; float:right;">Space</h6>')+
				 '</div>');

				// Add key to show stats
 				// 85 = U
				keyAction[85]=function(){
					if(newChar.data.holyWater){
						// Drink and double life
						newChar.data.holyWater=false;
						newChar.life*=2;

						notify('DOUBLED YOUR CONSTITUTION', 1000);
						updateChar();
					}
				};

				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;

				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;
 				updateChar();
			},
			mob: false
		},

	34:
		{
			itemName: 'light_emblem',
			action: function(){
				// Message the user the user about the feature he just got
				sendMessage('<div style="display: block;"> \
				 <div style="color:khaki"><center><h1>Light Emblem</h1></center></div> \
				 <h5><br>This treasure can see the basic situation \
				 of monsters.<br>To use it, press the <span style="color:#18D800">L</span> \
				 in your keyboard.</h5>'+
			   fadeTextElement('<h6 style="bottom: 0px; float:right;">Space</h6>')+
				 '</div>');
				// Add key to show stats
				// 76 = L
				keyAction[76]=function(){
					KEYBOARD_ENABLED=false;
					setTimeout(function(){KEYBOARD_ENABLED=true;},160);
					$mobScreen=$('#mob-screen');
					if(specialItems[34].mobScreen){
						$mobScreen.hide();
						specialItems[34].mobScreen=false;
					}
					else {
						$mobScreen.show();
						specialItems[34].mobScreen=true;

						// Get all the enemies in the floor
						var floor=newChar.tower[newChar.floor];
						var enemies=[];
						for (var i = 0; i < floor.length; i++) {
							if(specialItems[ floor[i] ] === undefined)
								continue;// If doesn't exist (avoid errors)

							var isMob;
							if(typeof specialItems[floor[i]].mob === 'function')
								isMob = specialItems[floor[i]].mob();
							else
								isMob = specialItems[floor[i]].mob;

							if(isMob)
								if(enemies.indexOf(specialItems[floor[i]])==-1)
									enemies.push(specialItems[floor[i]]);
						}

						// Sort them alphabetically
						enemies.sort(function(a,b){
							if(a.itemName>b.itemName)
								return 1;
							if(a.itemName<b.itemName)
								return -1;
							return 0;
						});

						// Display them
						$('#mob-screen [id^="row-"]').hide();
						for (var i = 0; i < enemies.length; i++) {
							var name=enemies[i].itemName;
						  var mob=enemies[i].stats;

							// Capitalize first letters and remove underscore
						  var arr=name.split('_');
						  var disName='';// Name of the mob to be displayed
						  for(n=0; n<arr.length; n++){
						    disName=disName+' '+arr[n][0].toUpperCase()+arr[n].substring(1);
						  }
						  disName=disName.substring(1);

							// Load the DOM
							var $row=$('#mob-screen #row-' + (i+1) ).show();
							$row.find('#name').text(disName);
							$row.find('#body').attr('src','./res/image/'+name+'.gif');
							$row.find('#life').text(mob.life);
							$row.find('#attack').text(mob.attack);
							$row.find('#defense').text(mob.defense);
							$row.find('#gains').text(mob.coins+'~'+mob.experience);
							//debugger;
							// Calculate Loss
							var loss=0;
							var damChar=newChar.attack-mob.defense;
							if(damChar<=0)loss='∞';
							else loss=(Math.ceil(mob.life/damChar)-1)*(mob.attack-newChar.defense);// HERE, changed floor with ceil
							if(loss!='∞' && loss<1)
								loss=0;
							$row.find('#loss').text(loss);
						}

					}

					// After showing or hiding the fight screen, update the style
					Doc.style();
				};

				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;

				newChar.row=char.row;
				newChar.col=char.col;
			},
			mob: false,
			mobScreen: false
		},

	35:
		{
			itemName: 'wind_compass',
			action: function(){
				// Message the user the user about the feature he just got
			sendMessage('<div style="display: block;"> \
				 <div style="color:lightsteelblue"><center><h1>Wind Compass</h1></center></div> \
				 <h5><br>This treasure lets you go freely up or down \
				 floors that you’ve visited previously.<br> Use the \
				 <span style="color:#18D800">O</span> \
				 and select the floor you want to send a \
				 stream of wind that will carry you there.</h5>'+
				 fadeTextElement('<h6 style="bottom: 0px; float:right;">Space</h6>')+
				 '</div>');
				// Add key to show stats
				// 76 = L, 79 = O
				keyAction[79]=function(){
					var $floorScreen=$('#floor-screen');
					var $flex=$floorScreen.find('.flex-container');
					if(specialItems[35].floorScreen){
						$floorScreen.hide();
						disableKeyboard();
						enableKeyboard();
						specialItems[35].floorScreen=false;
					}
					else {
						// On last floor you shouldn't be able to return down
						if(newChar.floor==floors.length-1)
							return;

						specialItems[35].floorScreen=true;
						$floorScreen.show();
						disableKeyboard();// To move inside the menu

						// Load the contents
						$flex.empty();//$('[class^="flex_item-"]').remove();
						for (var i = 1; i <=newChar.data.floorReached; i++) {
							var floorDiv='<div class="flex_item-'+i+'"><h5 id="floor-'+i+'">Floor '+i+'</h5></div>';
							$flex.append(floorDiv);
						}
						$flex.find('#floor-'+specialItems[35].selected).toggleClass('selected');

						// Move in the menu with the keys
						enableKeyboard(function(e){
							e.preventDefault();

							var key=Number(e.which);
							//console.log('The key ' + key + ' was pressed.');

							// Vars to be used
							var selected=specialItems[35].selected;
							var floorReached=newChar.data.floorReached;

							// Unselect the current one
							$flex.find('#floor-'+selected).removeClass('selected');

							switch (Core.keyAdapter(key)) {
								case 'left':
									if(selected>7)
										selected-=7;
									break;
								case 'right':
									if(selected<=floorReached-7)
										selected+=7;
									break;
								case 'up':
									if(selected>=2)
										selected--;
									break;
								case 'down':
									if(selected<floorReached)
										selected++;
									break;
								case 'enter':
									// Move to floor
									if(newChar.floor<selected){
										var newPos=indexToRowCol( newChar.tower[selected].indexOf(97) );
										newChar.row= newPos.row;
										newChar.col= newPos.col;
									}
									if(newChar.floor>selected){
										var newPos=indexToRowCol( newChar.tower[selected].indexOf(98) );
										newChar.row= newPos.row;
										newChar.col= newPos.col;
									}
									newChar.floor=selected;
									Music.play_sound('wind_compass');
								case 'esc':
									// Close open windows
									if(specialItems[34].mobScreen)
										keyAction[76]();
									keyAction[79]();
									// Update
									updateChar();
									break;
								default:
									if(keyAction[key])
										keyAction[key]();
									break;
							}
							specialItems[35].selected=selected;

							// Select the new one
							$flex.find('#floor-'+selected).toggleClass('selected');

						});


					}

				};

				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;

				newChar.row=char.row;
				newChar.col=char.col;
			},
			floorScreen: false,
			selected: 1
		},

	36:
		{
			itemName: 'key_super',
			action: function(){
				newChar.yellow++;
				newChar.blue++;
				newChar.red++;

				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;
				notify('EARNED KEYS!', 600);
			},
			mob: false
		},

	38:
		{
			itemName: 'star_pickaxe',
			action: function(){
				// Add as found
				newChar.data.items.starPickaxe=true;

				sendMessage('<div style="display: block;"> \
				 <div style="color:sandybrown"><center><h1>Starlight God Ornament</h1></center></div> \
				 <h5><br>An experienced locksmith can open the gate to the Dark Clouds using the Starlight.</h5>' +
				 fadeTextElement('<h6 style="bottom: 0px; float:right;">Space</h6>')+
				 '</div>');


				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;

				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;
				updateChar();
			},
			mob: false
		},

	39:
		{
			itemName: 'king_coin',
			action: function(){
				newChar.coins+=300;

				// Set the tile of the key to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;
				notify('KING COIN! EARNED 300 GOLD!', 1000);
			},
			mob: false
		},

	40:
		{
			itemName: 'green_slime',
			action: function(){//Start the fight
				fight(40);
			},
			stats: {
				life: 50,
				attack: 20,
				defense: 1,
				coins: 1,
				experience: 1
			},
			mob: true
		},

	41:
		{
			itemName: 'red_slime',
			action: function(){//Start the fight
				fight(41);
			},
			stats: {
				life: 70,
				attack: 15,
				defense: 2,
				coins: 3,
				experience: 2
			},
			mob: true
		},

	42:
		{
			itemName: 'bat',
			action: function(){//Start the fight
				fight(42);
			},
			stats: {
				life: 100,
				attack: 20,
				defense: 5,
				coins: 3,
				experience: 2
			},
			mob: true
		},

	43:
		{
			itemName: 'dark_mass',
			action: function(){//Start the fight
				fight(43);
			},
			stats: {
				life: 200,
				attack: 35,
				defense: 10,
				coins: 5,
				experience: 3
			},
			mob: true
		},

	44:
		{
			itemName: 'skeleton',
			action: function(){//Start the fight
				fight(44);
			},
			stats: {
				life: 110,
				attack: 25,
				defense: 5,
				coins: 5,
				experience: 3
			},
			mob: true
		},

	45:
		{
			itemName: 'armed_skeleton',
			action: function(){//Start the fight
				fight(45);
			},
			stats: {
				life: 150,
				attack: 40,
				defense: 20,
				coins: 8,
				experience: 5
			},
			mob: true
		},

	46:
		{
			itemName: 'sand_guardian',
			action: function(){//Start the fight
				fight(46);
			},
			stats: {
				life: 300,
				attack: 75,
				defense: 45,
				coins: 13,
				experience: 10
			},
			mob: true
		},

	47:
		{
			itemName: 'sand_god',
			action: function(){//Start the fight
				fight(47);
			},
			stats: {
				life: 450,
				attack: 150,
				defense: 90,
				coins: 22,
				experience: 19
			},
			mob: true
		},

	48:
		{
			itemName: 'large_bat',
			action: function(){//Start the fight
				fight(48);
			},
			stats: {
				life: 150,
				attack: 65,
				defense: 30,
				coins: 10,
				experience: 8
			},
			mob: true
		},

	49:
		{
			itemName: 'vampire',
			action: function(){//Start the fight
				fight(49);
			},
			stats: {
				life: 550,
				attack: 170,
				defense: 100,
				coins: 25,
				experience: 20
			},
			mob: true
		},

	50:
		{
			itemName: 'white_knight',
			action: function(){//Start the fight
				fight(50);
			},
			stats: {
				life: 1300,
				attack: 400,
				defense: 225,
				coins: 40,
				experience: 30
			},
			mob: true
		},

	51:
		{
			itemName: 'mysterious_king',
			action: function(){//Start the fight
				fight(51);
			},
			stats: {
				life: 700,
				attack: 250,
				defense: 125,
				coins: 32,
				experience: 25
			},
			mob: true
		},

	52:
		{
			itemName: 'wizard',
			action: function(){//Start the fight
				fight(52);
			},
			stats: {
				life: 500,
				attack: 400,
				defense: 260,
				coins: 47,
				experience: 35
			},
			mob: true
		},

	53:
		{
			itemName: 'devil',
			action: function(){
				/* This mob has two possible stats, this one in floor 16:
					stats: {
						life: 15000,
						attack: 1000,
						defense: 1000,
						coins: 100,
						experience: 100
					}
					this one in floor 19:
						stats: {
							life: 20000,
							attack: 1333,
							defense: 1333,
							coins: 100,
							experience: 100
						}
				*/
				switch(newChar.floor){
					case 16:
						this.stats={
							life: 15000,
							attack: 1000,
							defense: 1000,
							coins: 100,
							experience: 100
						};
						break;
					case 19:
						this.stats={
							life: 20000,
							attack: 1333,
							defense: 1333,
							coins: 100,
							experience: 100
						};
						break;
				}
				//Start the fight
				fight(53);
			},
			stats: {
				life: 15000,
				attack: 1000,
				defense: 1000,
				coins: 100,
				experience: 100
			},
			mob: true
		},

	54:
		{
			itemName: 'officer',
			action: function(){//Start the fight
				fight(54);
			},
			stats: {
				life: 1000,
				attack: 500,
				defense: 380,
				coins: 45,
				experience: 35
			},
			mob: function mob () {
        if(newChar.floor==2)return false;
        return true;
      }
		},

	55:
		{
			itemName: 'major',
			action: function(){//Start the fight
				fight(55);
			},
			stats: {
				life: 900,
				attack: 750,
				defense: 650,
				coins: 77,
				experience: 60
			},
      // Don't show the stats if char is on floor 2, to hide the super strong monsters
			mob: function mob () {
        if(newChar.floor==2)return false;
        return true;
      }
		},

	56:
		{
			itemName: 'skeleton_captain',
			action: function(){//Start the fight
				fight(56);
			},
			stats: {
				life: 400,
				attack: 90,
				defense: 50,
				coins: 15,
				experience: 12
			},
			mob: true
		},

	57:
		{
			itemName: 'dark_king',
			action: function(){//Start the fight
				fight(57);
			},
			stats: {
				life: 1500,
				attack: 830,
				defense: 730,
				coins: 80,
				experience: 65
			},
			mob: true
		},

	58:
		{
			itemName: 'dark_knight',
			action: function(){//Start the fight
				fight(58);
			},
			stats: {
				life: 1200,
				attack: 980,
				defense: 900,
				coins: 88,
				experience: 75
			},
			mob: true
		},

	59:
		{
			itemName: 'chaos',
			action: function(){// After he loses he transforms, so must upgrade stats to 37500, 2250, 1800
				if(newChar.floor==19)
					fight(59, function(){
						var mob=specialItems[59].stats;
						// Transform
						mob.life=37500;
						mob.attack=2250;
						mob.defense=1800;
						newChar.data.mobs.chaos_1_defeated=true;
						updateChar();
						dialog('chaos_1_after');
					});
				if(newChar.floor==21) {
					fight(59,function(){
						dialog('chaos_2_after');
					});
				}


			},
			stats: {
				life: 25000,
				attack: 1500,
				defense: 1200,
				coins: 150,
				experience: 120
			},
			mob: true
		},

	60:
		{
			itemName: 'mage',
			action: function(){//Start the fight
				fight(60);
			},
			stats: {
				life: 150,
				attack: 120,
				defense: 70,
				coins: 20,
				experience: 5
			},
			mob: true
		},

	61:
		{
			itemName: 'knight',
			action: function(){//Start the fight
				fight(61);
			},
			stats: {
				life: 2000,
				attack: 680,
				defense: 590,
				coins: 70,
				experience: 55
			},
			mob: true
		},

	62:
		{
			itemName: 'osiris',
			action: function(){//Start the fight
				fight(62);
			},
			stats: {
				life: 2500,
				attack: 900,
				defense: 850,
				coins: 84,
				experience: 70
			},
			mob: true
		},

	63:
		{
			itemName: 'sorcerer',
			action: function(){//Start the fight
				fight(63);
			},
			stats: {
				life: 125,
				attack: 50,
				defense: 25,
				coins: 10,
				experience: 7
			},
			mob: true
		},

	64:
		{
			itemName: 'necromancer',
			action: function(){//Start the fight
				fight(64);
			},
			stats: {
				life: 100,
				attack: 200,
				defense: 110,
				coins: 30,
				experience: 25
			},
			mob: true
		},

	65:
	{
		itemName: 'moai',
		action: function(){//Start the fight
			fight(65);
		},
		stats: {
			life: 500,
			attack: 115,
			defense: 65,
			coins: 15,
			experience: 15
		},
		mob: true
	},

	66:
		{
			itemName: 'sand_warrior',
			action: function(){//Start the fight
				fight(66);
			},
			stats: {
				life: 900,
				attack: 450,
				defense: 330,
				coins: 50,
				experience: 40
			},
			mob: true
		},

	67:
		{
			itemName: 'zoro',
			action: function(){//Start the fight
				fight(67);
			},
			stats: {
				life: 1200,
				attack: 620,
				defense: 520,
				coins: 65,
				experience: 50
			},
			mob: true
		},

	68:
		{
			itemName: 'apep',
			action: function(){//Start the fight
				fight(68);
			},
			stats: {
				life: 1250,
				attack: 500,
				defense: 400,
				coins: 55,
				experience: 45
			},
			mob: true
		},

	69:
		{
			itemName: 'sutekh',
			action: function(){//Start the fight
				fight(69);
			},
			stats: {
				life: 1500,
				attack: 560,
				defense: 460,
				coins: 60,
				experience: 50
			},
			mob: true
		},

	70:
		{
			itemName: 'teslathor',
			action: function(){//Start the fight
				fight(70);
			},
			stats: {
				life: 3100,
				attack: 1050,
				defense: 950,
				coins: 92,
				experience: 80
			},
			mob: true
		},

	71:
		{
			itemName: 'sword_1',
			action: function(){
				newChar.attack+=10;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 10 ATTACK!');
			},
			mob: false
		},

	72:
		{
			itemName: 'sword_2',
			action: function(){
				newChar.attack+=40;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 40 ATTACK!');
			},
			mob: false
		},

	75:
		{
			itemName: 'sword_5',
			action: function(){
				newChar.attack+=120;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;
			},
			mob: false
		},

	76:
		{
			itemName: 'shield_1',
			action: function(){
				newChar.defense+=15;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 15 DEFENSE!');
			},
			mob: false
		},

	77:
		{
			itemName: 'shield_2',
			action: function(){
				newChar.defense+=50;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 50 DEFENSE!');
			},
			mob: false
		},

	80:
		{
			itemName: 'shield_5',
			action: function(){
				newChar.defense+=150;
				// Set the tile to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the item's position
				newChar.row=char.row;
				newChar.col=char.col;

				notify('GAINED 150 DEFENSE!');
			},
			mob: false
		},

	97:
		{
			itemName: 'move_up_target',
			action: function(){
				// Call the road action (to play the sound, for example), because it acts as a road,
				// the role of having a different number is given by the other items
				// that use it.
				Items.getByName('road').action();
			},
			mob: false,
			imageName: 'road'
		},

	98:
		{
			itemName: 'move_down_target',
			action: function(){
				// Call the road action (to play the sound, for example), because it acts as a road,
				// the role of having a different number is given by the other items
				// that use it.
				Items.getByName('road').action();
			},
			mob: false,
			imageName: 'road'
		},

	115:
		{
			itemName: 'door_jail_real',
			action: function(){
				// Set the tile of the door to a road
				setTile(newChar.row, newChar.col, 0);
				newChar.tower[newChar.floor][rowcolToIndex(newChar.row,newChar.col)]=0;
				// Make the char don't move to the door's position
				newChar.row = char.row;
				newChar.col = char.col;
				return;
			},
			mob: false,
			imageName: 'door_jail'
		},

	119:
		{
			itemName: 'devil_dialog_start',
			action: function(){
				newChar=$.extend({}, char, true);
				dialog('red_devil', function(){
					newChar.tower[16][rowcolToIndex(5, 6)]=0;
					updateChar();
				});
				return;
			},
			mob: false,
			imageName: 'road'
		},

	129:
		{
			itemName: 'chaos_dialog_start',
			action: function(){
				newChar=$.extend(true,{},char);
				dialog('chaos_1', function(){
					newChar.tower[19][rowcolToIndex(8,6)]=0;
					updateChar();
				});
				return;
			},
			mob: false,
			imageName: 'road'
		},

	201:
		{
			itemName: 'sign',
			action: function(){
				Messages.beta();
				newChar = $.extend(true, {}, char);
				return;
			},
			mob: false
		}

};

var specialItemsBackUp=tree.clone(specialItems, true);
























//
