
// Vars to be used
var dialog_chat_message_number;
var dialog_chat;
var dialog_after_function;

// Start a dialog and after it ends execute the passed function
function dialog(name, afterFun) {
  var dia=dialogs[name];
  var $item=$('#dialog_item');
  var $war=$('#dialog_warrior');
  $item.find('#icon').attr('src','./res/image/'+dia.icon+'.gif');
  $item.find('#title').text(dia.title+':');

  dialog_chat=dia.chat;
  dialog_chat_message_number = 0;
  dialog_after_function=(afterFun=== undefined ? (function(){}): afterFun);

  /*
    Below the keydown event:
      simulateKeydown(32);// Start the dialog
  */
  // Detect Space to advance
  disableKeyboard();
  enableKeyboard(function(e){
    var key=Number(e.which);
    if(Core.keyAdapter(key)!='enter')// Detect only Spacebar and enter
      return;

    var i=dialog_chat_message_number;

    if(i>=dialog_chat.length){
      $war.hide();
      $item.hide();
      disableKeyboard();
      enableKeyboard();
      dialog_after_function();
      return;
    }
    if(i>0)
      Music.play_sound('dialog');

    var mess=dialog_chat[i];
    if(mess[0]==0){
      mess[1] = $war.find('#message').text(mess[1]).text();
      $war.find('#message').html(mess[1].replace(/\n/g, '<br>'));

      $item.hide();
      $war.show();
    }
    else{
      mess[1] = $item.find('#message').text(mess[1]).text();
      $item.find('#message').html(mess[1].replace(/\n/g, '<br>'));

      $war.hide()
      $item.show();;
    }
    dialog_chat_message_number++;
  });

  simulateKeydown(32);// Start the dialog

}



var dialogs={
  /*
   Every dialog item has:
    icon
    title: The name of the item to be displayed
    char: array of array, where each
    array has in the first place a 0
    for warrior and a 1 for item

  */
  fairy_1:
    {
      icon: 'fairy',
      title: 'Fairy',
      chat: [
       [0, '......'],
       [1, 'You are awake!'],
       [0, 'Who are you? Where am I?'],
       [1, 'I am a fairy, I was here when mobs knocked you out.'],
       [0, 'Did you see my sword?'],
       [1, 'Your sword was taken away, I only had time to rescue you.'],
       [0, 'Is the princess alright? I\'m here to rescue her.'],
       [1, 'The princess is inside, but you are no match for the monsters in there.'],
       [0, 'What can I do? I promised the king that I was going to save her.'],
       [1, 'Do not worry. I will lend you all of my power to help you beat those mobs that have beaten me before.'],
       [1, 'However, you have to help me find something first.'],
       [0, 'Find something? What do you want to find?'],
       [1, 'A cross with a red gem in the middle.'],
       [0, 'What\'s that thing for?'],
       [1, 'I had this guardian tower not long ago, and an evil group of monsters from the north with magic took it from me and sealed my magic in this cross. '],
       [1, 'If you can bring it out of the tower, the magic in the seal will gradually come back to me, then, I will be able to lend you strength to rescue the princess.'],
       [0, 'Well... I will try.'],
       [1, 'I just went there to look for your stuff. Your sword is on the third floor, and your shield on the fifth.'],
       [1, 'Oh, and that cross I just mentioned is on the seventh floor, but to go to the seventh floor you must first retrieve your sword and shield.'],
       [1, 'In addition, the other floors in the tower have had for centuries swords and treasures, which, if you recover, they’ll help you a lot in dealing with the monsters inside.'],
       [0, 'But... How do I get in?'],
       [1, 'I\'ve got three keys, take them. There aren\'t a lot of them in the tower.'],
       [1, 'Go, brave warrior!!!'],
      ]
    },

  fairy_2:
    {
      icon: 'fairy',
      title: 'Fairy',
      chat: [
       [0, 'Fairy, I’ve found the cross with the gem.'],
       [1, 'You did very well. Now I can give you more power!'],
       [1, 'Mew La Quiver Mew Clamor... '],
       [1, 'There, I’ve enhanced your ability!'],
      ]
    },

  old_man_1:
    {
      icon: 'old_man',
      title: 'Old Man',
      chat: [
       [0, 'You are safe now!'],
       [1, 'Oh, my son. Thank you so much!'],
       [1, 'This place is so dirty and scary. I can\'t stand it anymore!'],
       [0, 'Just go now. I still need to rescue the princess.'],
       [1, 'Oh, you\'re here to rescue our princess. To express my appreciation \
       please allow me to give this to you. I used it when I was still young.'],
       [1, 'Use it to save the princess!!'],
      ]
    },

  old_man_2:
    {
      icon: 'old_man',
      title: 'Old Man',
      chat: [
       [1, 'Hello, brave child, you are finally here.'],
       [1, 'I\'ll give you a very good treasure.'],
       [1, 'It will increase your attack by a 120 points. But it will cost you \
       500 experience points.'],
       [1, 'Just think about it.'],
      ]
    },

  merchant_1:
    {
      icon: 'merchant',
      title: 'Businessman',
      chat: [
       [0, 'You are safe now!'],
       [1, 'Oh, thanks! I really appreciate it!'],
       [1, 'I\'m a business man. I don\'t know why I was brought here.'],
       [0, 'Go on, you are free now!'],
       [1, 'Oh, yeah, I\'m free now!'],
       [1, 'I\'ll give this to you, then. I was going to sell this before but you can keep it.'],
       [1, 'I hope it helps!'],
      ]
    },

  merchant_2:
    {
      icon: 'merchant',
      title: 'Businessman',
      chat: [
       [1, 'Aha, welcome! I have an item that will be good for you.'],
       [1, 'As long as you have the money, I\'ll sell it to you.'],
       [0, 'What kind of thing? How much?'],
       [1, 'It is the best shield in this world. It will increase 120 your defense.'],
       [1, 'It only costs you 800 gold coins.'],
      ]
    },

  thief_1:
    {
      icon: 'thief',
      title: 'Thief',
      chat: [
       [0, 'You are saved!'],
       [1, 'Ah, that is great! I can hunt treasures again!'],
       [1, 'Oh, I haven\'t introduced myself. I\'m Jack.'],
       [1, 'I\'m a famous thief around here. I stole many treasures before.'],
       [1, 'But I had bad luck this time. I was caught just after I got in here.'],
       [1, 'Since you opened this door for me, let me help you out.'],
       [0, 'Just go now. There\'re many monsters outside. I may not be able to take care of you.'],
       [1, 'No, It doesn\'t matter.\nJust tell me what do you want me to do.'],
       [0, '....Can you open a door?'],
       [1, 'Of course.'],
       [0, 'Then please open the door of the 2nd floor for me!'],
       [1, 'That\'s easy.'],
       [1, 'If you happen to find a pickaxe studded with a ruby...'],
       [1, '… come talk to me.\nSomething weird is going on here.'],
       [0, 'A pickaxe studded with a ruby? Ok, I\'ll try to help you.'],
       [1, 'Thank you very much.\nI\'ll open the door on 2nd floor right now.'],
       [1, 'If you find that pickaxe, come here again and talk to me.'],
      ]
    },

  thief_2:
    {
      icon: 'thief',
      title: 'Thief',
      chat: [
       [0, 'Hey, look what I found!'],
       [1, 'Wow! So the tales were true! That thing was really here!'],
       [1, 'The tale says that if a thief breaks the roof of this tower,  a very important person can conjure a gate to the real top of the tower.'],
       [1, 'They say it is a cursed land, called by most as \"Dark Clouds\".'],
       [0, 'I need to go go there to save the kingdom!'],
       [1, 'As a thief, I can do this, but it is very dangerous. I\'m only going to do it because you saved me. '],
       [1, 'Tell my family I love them.'],
       [1, 'After the roof breaks you will need to find a way to open the portal, meanwhile, I will use the debris to make a bridge to reach the princess, and stairs for the portal.'],
      ]
    },

  princess:
    {
      icon: 'princess',
      title: 'Princess',
      chat: [
        [0, 'Princess! You are safe now!'],
        [1, 'Oh, are you here to save me?'],
        [0, 'Yes, I am instructed by the king\'s command to save you.'],
        [0, 'Please follow me out of here!'],
        [1, 'No, I don\'t want to leave yet.'],
        [0, 'Why? There are demons everywhere in here.'],
        [1, 'That’s exactly why I can’t just leave.'],
        [1, 'I want to see this demon killed myself!'],
        [1, 'Heroic warrior, if you can kill the Demon...'],
        [1, 'I\'ll go with you'],
        [0, 'The Demon?\nI\'ve already killed the demon!'],
        [1, 'The demon on the top of the tower?\nBut if the gate isn\'t open...?'],
        [0, 'The top of the tower?\nI killed a demon on my way here.'],
        [1, 'You didn\'t kill the demon, the one you killed might just be a squadron leader.'],
        [1, 'The Demon is on the top of the tower.\nI\'ll open the gate for you.'],
        [1, 'The power of the big demon at the top isn\'t comparable to anything that you\'ve seen before in your life!'],
        [0, 'Then what are you waiting for? Run!'],
        [1, 'What for? To leave you here to die and get me locked up again?\nYou must kill him!'],
        [0, 'Ok, wait here.\nI\'ll kill that Demon.'],
        [1, 'The Demon is not only much stronger, but he can also transform.\nAfter his transformation...'],
        [1, 'his attack and defence will increase immensely.\nBe careful!'],
        [1, 'Please come back safe!'],
      ]
    },

  red_devil:
    {
      icon: 'devil',
      title: 'Devil',
      chat: [
        [0, 'Die, Demon!'],
        [1, 'Hahaha... You are such a fool.'],
        [1, 'Don\'t think you can beat me just because that fairy butterfly  gave you some power.'],
        [1, 'You are still too young!'],
        [0, 'Shut up and die!'],
      ]
    },

  chaos_1:
    {
      icon: 'chaos',
      title: 'Chaos',
      chat: [
        [0, 'Die, Demon!'],
        [1, 'Hahaha... You are such a fool.'],
        [1, 'Don\'t think you can beat me just because that fairy butterfly  gave you some power.'],
        [1, 'You are still too young!'],
        [0, 'Shut up and die!'],
      ]
    },

  chaos_1_after:
    {
      icon: 'chaos',
      title: 'Chaos',
      chat: [
        [1, 'You\'ve got some skills. Just try to follow me to the 21st floor!'],
        [1, 'There, now you can see my real power!'],
      ]
    },

  chaos_2_after:
    {
      icon: 'chaos',
      title: 'Chaos',
      chat: [
        [1, 'Ah... How could this be, how could I...'],
        [1, '...be defeated by you?!\nNo, this can\'t be...'],
      ]
    }
};









//
