var Messages = (function Messages() {
  var Messages = function Messages() {
    alert('Called the Messages contructor, what has no sense.');
  };

  Messages.confirmRestart = function (open) {

    // If open is false then close the confirm
    if(open === false){
      this.confirmRestart.open = false;
      $('#restart-container').hide();
      disableKeyboard();
      enableKeyboard();
      return;
    }

    if(this.confirmRestart.open) {
      console.error('Restart confirmation box is already open.');
      return;
    }

    this.confirmRestart.open = true;

    disableKeyboard();
    $('#restart-container').show();

    var option = 2;

    $('#restart-container #option_'+option).addClass('selected');

    // enableKeyboard with function
    enableKeyboard(function(e){

      $('#restart-container #option_'+option).removeClass('selected');

      switch( Core.keyAdapter(e.which) ) {
        case 'left':
          if(option>1)
            option--;
          $('#restart-container #option_'+option).addClass('selected');
          break;

        case 'right':
          if(option<2)
            option++;
          $('#restart-container #option_'+option).addClass('selected');
          break;

        case 'esc':
          Messages.confirmRestart(false);
          break;

        case 'enter':
          Messages.confirmRestart(false);
          if(option==1)
            Core.restart();
          break;

        default:
          $('#restart-container #option_'+option).addClass('selected');
          break;
      }

    });

  };
  Messages.confirmRestart.open = false;

  Messages.tutorial = function (open) {

    if(open === false){
      this.tutorial.open = false;
      $('#tutorial').hide();
      disableKeyboard();
      enableKeyboard();
      return;
    }

    if(this.tutorial.open) {
      console.error('Tutorial message is already open.');
      return;
    }

    this.tutorial.open = true;


    disableKeyboard();
    $('#tutorial').show();

    var autoRemover = setTimeout(function(){
      disableKeyboard();
      enableKeyboard();
      Messages.tutorial(false);
    },this.tutorial.timer);

    // Wait a bit before enabling the skip
    setTimeout(function(){
      enableKeyboard(function(){
        clearInterval(autoRemover);
        disableKeyboard();
        enableKeyboard();
        Messages.tutorial(false);
      });
    }, 2500);

    //console.log(this.tutorial.timer);
  }
  Messages.tutorial.open = false;
  Messages.tutorial.timer = 12000;

  Messages.beta = function (open){

    if(open === false){
      this.beta.open = false;
      $('#beta').hide();
      disableKeyboard();
      enableKeyboard();
      return;
    }

    if(this.beta.open) {
      console.error('Tutorial message is already open.');
      return;
    }

    this.beta.open = true;


    disableKeyboard();
    $('#beta').show();

    enableKeyboard(function(e){
      switch (Core.keyAdapter( e.which )) {
        case 'enter':
          Messages.beta(false);
          break;
      }
    });

  };
  Messages.beta.open = false;

  return Messages;
})();
