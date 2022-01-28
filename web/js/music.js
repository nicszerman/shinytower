// TODO: FIX THIS NOT-SO-HORRIBLE-ANYMORE MESS

// General music object
var Music = {};

// Vars used in the file
Music.songs;// Here the songs are
Music.sounds;// Here the sounds are


// Will stop the floor music being played before and play the new one.
Music.play_floor=function(floor,oldFloor){
  if(oldFloor<0||oldFloor>=Music.songs.length||oldFloor===undefined)
    oldFloor=char.floor;// In case called by error, try to hack-get the old floor

  var song=Music.songs[floor];
  var oldSong=Music.songs[oldFloor];

  console.log('Setting music for floor '+floor+ ((oldSong!==undefined) ? ', coming from floor '+oldFloor : '' ));

  // Remove fade event in case of restart at same floor
  // Otherwise when the fade ends it will stop the song
  song.stop();
  song.play('main');// Start song(muted)
  song.volume(0);// Keep muted until synchronized with the old one
  // Start the new song and stop the old one, with a fade effect
  if(oldSong!==undefined)
    song.seek( ( (oldSong.seek()<15) ? oldSong.seek() : 0.5 ) );
  song.fade(0,1,100);
  if(oldSong!==undefined)
    song.once('fade',function(){
      if(Music.songs[char.floor] !== oldSong){
        oldSong.volume(0);
        oldSong.stop();
      }
      else {
        song.volume(0);
        song.stop();
      }
    });

  var con = 'At ' + song.seek();
  if(oldSong!==undefined)
    con+=', the old song was at '+oldSong.seek();
  // It may not be a number until it loads, it would log 'At [Object Object]'
  if(isNumber(song.seek()))
    console.log(con);
};

Music.stopFloor=function(floor,duration){
  floor = floor || newChar.floor;
  duration=duration||0;
  var song=Music.songs[floor];
  song.fade(1,0,duration);
  song.once('fade',function(){
    if(Music.songs[char.floor] !== song)
      song.stop();
  });
};

Music.play_sound=function (soundName){
  var sound = Music.sounds[soundName];
  sound.volume(sound.volume()-0.00005);
  Music.sounds[soundName].play('main');
};

Music.load_music=function (){

    Music.songs=[];


    Music.songs[0]= new Howl({
      src: ['./res/sound/floors/floor_0-18.mp3'],
      sprite: {
        main: [0, 15000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 0');
      }
    });

    Music.songs[1]= new Howl({
      src: ['./res/sound/floors/floor_1.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 1');
      }
    });

    Music.songs[2]= new Howl({
      src: ['./res/sound/floors/floor_2.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 2');
      }
    });

    Music.songs[3]= new Howl({
      src: ['./res/sound/floors/floor_3.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 3');
      }
    });

    Music.songs[4]= new Howl({
      src: ['./res/sound/floors/floor_4-5.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 4');
      }
    });

    Music.songs[5]= new Howl({
      src: ['./res/sound/floors/floor_4-5.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 5');
      }
    });

    Music.songs[6]= new Howl({
      src: ['./res/sound/floors/floor_6-7.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 6');
      }
    });

    Music.songs[7]= new Howl({
      src: ['./res/sound/floors/floor_6-7.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 7');
      }
    });

    Music.songs[8]= new Howl({
      src: ['./res/sound/floors/floor_8-9.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 8');
      }
    });

    Music.songs[9]= new Howl({
      src: ['./res/sound/floors/floor_8-9.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 9');
      }
    });

    Music.songs[10]= new Howl({
      src: ['./res/sound/floors/floor_10.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 10');
      }
    });

    Music.songs[11]= new Howl({
      src: ['./res/sound/floors/floor_11.mp3'],
      sprite: {
        main: [200, 32400]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 11');
      }
    });

    Music.songs[12]= new Howl({
      src: ['./res/sound/floors/floor_12.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 12');
      }
    });

    Music.songs[13]= new Howl({
      src: ['./res/sound/floors/floor_13.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 13');
      }
    });

    Music.songs[14]= new Howl({
      src: ['./res/sound/floors/floor_14.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 14');
      }
    });

    Music.songs[15]= new Howl({
      src: ['./res/sound/floors/floor_15.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 15');
      }
    });

    Music.songs[16]= new Howl({
      src: ['./res/sound/floors/floor_16.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 16');
      }
    });

    Music.songs[17]= new Howl({
      src: ['./res/sound/floors/floor_17.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 17');
      }
    });

    Music.songs[18]= Music.songs[0];
    Music.songs[19]= new Howl({
      src: ['./res/sound/floors/floor_19.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 19');
      }
    });

    Music.songs[20]= new Howl({
      src: ['./res/sound/floors/floor_20.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 20');
      }
    });

    Music.songs[21]= new Howl({
      src: ['./res/sound/floors/floor_21.mp3'],
      sprite: {
        main: [200, 16000]
      },
      loop: true,
      autoplay: false,
      html5: true,
      preload: true,
      onload: function(){
        console.log('Finished loading song from floor 21');
      }
    });

    Howler.volume(1);

};

Music.load_sounds=function (){
  // Empty and declare object
  var sounds={};

  sounds['move']= new Howl({
    src: ['./res/sound/move.mp3'],
    sprite: {
      main: [0, 10000]
    },
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "move"');
    },
    volume: 0.3
  });

  sounds['pick_up_key'] = new Howl({
    src: ['./res/sound/pick_up_key.mp3'],
    sprite: {
      main: [100, 10000]
    },
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "pick_up_key"');
    }
  });

  sounds['open_door_yellow'] = new Howl({
    src: ['./res/sound/open_door_yellow.mp3'],
    sprite: {
      main: [100, 10000]
    },
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "open_door_yellow"');
    }
  });

  sounds['open_door_blue'] = new Howl({
    src: ['./res/sound/open_door_blue.mp3'],
    sprite: {
      main: [100, 10000]
    },
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "open_door_blue"');
    }
  });

  sounds['open_door_red'] = new Howl({
    src: ['./res/sound/open_door_red.mp3'],
    sprite: {
      main: [100, 10000]
    },
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "open_door_red"');
    }
  });

  sounds['pick_up_item'] = new Howl({
    sprite: {
      main: [0, 10000]
    },
    src: ['./res/sound/pick_up_item.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "pick_up_item"');
    }
  });

  sounds['move_shop'] = new Howl({
    src: ['./res/sound/move_shop.mp3'],
    sprite: {
      main: [0, 10000]
    },
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "move_shop"');
    }
  });

  sounds['exit_shop'] = new Howl({
    sprite: {
      main: [100, 10000]
    },
    src: ['./res/sound/exit_shop.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "exit_shop"');
    }
  });

  sounds['attack_weak'] = new Howl({
    sprite: {
      main: [100, 10000]
    },
    src: ['./res/sound/attack_weak.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "attack_weak"');
    }
  });

  sounds['attack_normal'] = new Howl({
    sprite: {
      main: [100, 10000]
    },
    src: ['./res/sound/attack_normal.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "attack_normal"');
    }
  });

  sounds['attack_strong'] = new Howl({
    sprite: {
      main: [100, 10000]
    },
    src: ['./res/sound/attack_strong.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "attack_strong"');
    }
  });

  sounds['end_fight'] = new Howl({
    sprite: {
      main: [100, 10000]
    },
    src: ['./res/sound/end_fight.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "end_fight"');
    }
  });

  sounds['dialog'] = new Howl({
    sprite: {
      main: [0, 10000]
    },
    src: ['./res/sound/dialog.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "dialog"');
    }
  });

  sounds['end_fairy_dialog'] = new Howl({
    sprite: {
      main: [0, 10000]
    },
    src: ['./res/sound/end_fairy_dialog.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "end_fairy_dialog"');
    }
  });

  sounds['too_weak'] = new Howl({
    sprite: {
      main: [0, 10000]
    },
    src: ['./res/sound/too_weak.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "too_weak"');
    }
  });

  sounds['wind_compass'] = new Howl({
    sprite: {
      main: [0, 10000]
    },
    src: ['./res/sound/wind_compass.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "wind_compass"');
    }
  });

  sounds['use_stairs'] = new Howl({
    sprite: {
      main: [0, 10000]
    },
    src: ['./res/sound/use_stairs.mp3'],
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    onload: function(){
      console.log('Finished loading sound "use_stairs"');
    }
  });

  Music.sounds=sounds;
};

Music.loadController = function(){

  var val = Cookies.get('volume');
  if(val !== undefined)
    $('#volume input').value = val;

  $('#volume input').on('input', function(e){
    Music.volume( e.target.value );
    Cookies.set('volume', e.target.value);
  });

};

Music.volume = function(vol){
  // If no args, return actual volume
  var ret=Howler.volume(vol);
  // If Howler didn't load it will return the Howler object
  return (typeof ret === 'object') ? this : ret;
};

Music.load = function(){
  Music.load_music();
  Music.load_sounds();
  Music.loadController();
};




//
