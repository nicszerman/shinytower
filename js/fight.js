/*
  TODO:
    Add sounds to the fight
*/
// The fight lasts for about  after-fight_constant + (turns + 1)*fightSpeed*2
// turns is Math.floor(mob.life/damChar)
// damChar is newChar.attack-mob.defense

var Fight=(function Fight(){

    var Fight=function Fight(){
      // Constructor properties
      alert('Called the Fight contructor, what has no sense.');
    };

    Fight.afterFun=function(){};

    return Fight;
})();

// Returns true if can win
function fight(mobNumber, afterFun){
  afterFun = afterFun || function(){};
  Fight.afterFun=afterFun;

  // Retrieve the stats of the mob
  var name=specialItems[mobNumber].itemName;
  var mob=specialItems[mobNumber].stats;
  var life=mob.life;
  var attack=mob.attack;
  var defense=mob.defense;

  var damChar=newChar.attack-defense;
  if(damChar<=0){Music.play_sound('too_weak');newChar=$.extend(true, {}, char);return false;}
  var turns = Math.ceil(life/damChar)-1;
  // It's -1 because the player attacks first
  var damMob=attack-newChar.defense;

  if(turns*damMob > newChar.life){
    Music.play_sound('too_weak');
    newChar=$.extend(true, {}, char);
    return false;
  }


  // Disable the keyboard while in fight
  KEYBOARD_ENABLED=false;
  // Start the fight
  $('#mob #name').text(prettyName(name));
  $('#mob #body').attr('src','./res/image/'+name+'.gif');
  $('#mob #life').text(life);
  $('#mob #attack').text(attack);
  $('#mob #defense').text(defense);
  $('#warrior #life').text(newChar.life);
  $('#warrior #attack').text(newChar.attack);
  $('#warrior #defense').text(newChar.defense);
  $('#display-fight').css('display', 'block');/*.show()*/;
  Doc.style();
  setTimeout(attackChar, 40, life, attack, defense, mob);


  var damChar=newChar.attack-mob.defense;
  var turns = Math.floor(mob.life/(damChar));
  oldChar= $.extend(true, {}, newChar);

  newChar.row= char.row;
  newChar.col= char.col;

  updateChar();
  return true;
}

function attackChar(life, attack, defense, mob){
  var fightSpeed= newChar.data.fight.fightSpeed;

  var damChar=newChar.attack-defense;
  life-=damChar;
  if(life<1)life=0;

  $('#mob #life').text(life);
  if(life>0)
    setTimeout(attackMob, fightSpeed, life, attack, defense, mob);
  else{
    //Music.play_sound('attack_strong');
    setTimeout(function(mob){
      Music.play_sound('end_fight');
      // Set the tile of the mob to a road
      setTile(oldChar.row, oldChar.col, 0);
      newChar.tower[oldChar.floor][rowcolToIndex(oldChar.row,oldChar.col)]=0;

      newChar.coins=oldChar.coins+mob.coins;
      newChar.experience=oldChar.experience+mob.experience;
      KEYBOARD_ENABLED=true;
      notify('GAINED ' + mob.coins + ' '+(mob.coins>1?'COINS':'COIN')+' AND ' + mob.experience + ' EXP!', 700);

      updateChar();
      $('#display-fight').hide();
      Fight.afterFun();
    }, fightSpeed*2, mob);
  }
}

function attackMob(life, attack, defense, mob){
  var fightSpeed= newChar.data.fight.fightSpeed;

  var damMob=attack-newChar.defense;
  if(damMob<0)damMob=0;
  // To avoid adding health, the char doesn't do this
  // because if this happened he wouldn't win
  newChar.life-=damMob;

  //if(damMob<newChar.life/10)Music.play_sound('attack_weak');
  $('#warrior #life').text(newChar.life);
  setTimeout(attackChar, fightSpeed, life, attack, defense, mob);
}






//
