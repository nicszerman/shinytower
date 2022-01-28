

$(document).on('keydown.special',function(e){

  switch ( Core.keyAdapter( e.which ) ) {
		case 'f':
			fastForward(true);
			break;
    case 'g':// remove god condition easily for debuging as user
      GOD=false;
      break;
    case 'left':
    case 'right':
    case 'up':
    case 'down':
    case 'enter':
      e.preventDefault();
      break;
  }


});

$(document).on('keyup.special',function(e){

  switch( Core.keyAdapter( e.which ) ){
      case 'f':
        fastForward(false);
        break;
  }

});







//
