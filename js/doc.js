var Doc = (function(){
  var Doc = function Doc(){
    alert('Called the Doc contructor, what has no sense.');
  };

  Doc.appendBoard = function appendBoard() {
    var board = $('#tiles');
    for(var i=1;i<12;i++)
      for(var j=1;j<12;j++)
        board.append('<div class="tile" id="rowcol-'+i+'-'+j+'"></div>');
  };

  Doc.load = function load() {
    Doc.appendBoard();
    Doc.style();
    $('#display-fight').hide();
    $('#mob-screen').hide();
    $('#shop-container').hide();
    $('#dialog_warrior').hide();
    $('#dialog_item').hide();
    $('#restart-container').hide();
    $('#beta').hide();
  };

  Doc.style = function style(){

      // Place the names of display-fight in the middle and below of the mob body
      // warrior
      var $body=$('#warrior #body-container');
      var $name=$('#warrior #name');
      $name.css('right', ( parseFloat($body.css('right'))+parseFloat($body.outerWidth(true))/2-parseFloat($name.outerWidth(false))/2-parseFloat($name.css('margin-right')) ) +'px' );
      $name.css('top', ( parseFloat($body.css('top'))+parseFloat($body.outerHeight(true))-parseFloat($name.css('margin-top')) ) +'px' );
      // mob
      $body=$('#mob #body-container');
      $name=$('#mob #name');
      $name.css('left', ( parseFloat($body.css('left'))+parseFloat($body.outerWidth(true))/2-parseFloat($name.outerWidth(false))/2-parseFloat($name.css('margin-left')) ) +'px' );
      $name.css('top', ( parseFloat($body.css('top'))+parseFloat($body.outerHeight(true))-parseFloat($name.css('margin-top')) ) +'px' );

      // Don't overlap the game container display
      var $game=$('#game-container');
      var $displaysLeft=$('#displays_left');
      $game.css('left','26vw');
      if($game.position().left<$displaysLeft.width())
        $game.css('left',$displaysLeft.width());


      // Center the keys in the middle of the box
      var $keysContainer= $('#keys-container');
      var $keys= $('#keys');
      // bottom = cont.height - (keys.top + height)
      // top = top + (bottom - top) / 2    <-- Calculate the error and distribute it
      // top = top + (cont.height - (top + height) - top)/2
      // top = top + (cont.height - height)/2 - top
      // top = (cont.height - height)/2
      $keys.css('top', (parseFloat($keysContainer.height()) - parseFloat($keys.height()) )/2 + 'px');


      // Put the volume slider below and on the right of the game container
      var $vol = $('#volume');
      $vol.css('top', parseFloat($game.css('top')) + parseFloat($game.outerHeight(true)) + 'px' );
      $vol.css('left', parseFloat($game.css('left')) + parseFloat($game.outerWidth(true)) - parseFloat($vol.outerWidth(true)) + 'px' );

      // console.log(style.o);
  };

  return Doc;
})();


$( window ).resize(Doc.style);
