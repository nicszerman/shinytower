/*
  functions:

    exit(status)
      stops execution

    simulateKeydown(key)
      Simulates keydown event

    isNumber(value)
      returns true if is number

    toInt(number)
      returns the number as int

    sizeOf(obj)
      returns the aproximate size of an object

    fadeTextElement(text, duration)
      returns an html element with a style that
      fades the text for the given duration

    function prettyName(name){
      returns the name formated (capitalize first
      letters and remove underscores)

*/



// Stops execution
function exit(status) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // +      input by: Paul
  // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
  // +   improved by: Philip Peterson
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: Should be considered experimental. Please comment on this function.
  // *     example 1: exit();
  // *     returns 1: null

  var i, that = this,
      _addEvent = function(el, type, handler, capturing) {
            if (el.addEventListener) { /* W3C */
          el.addEventListener(type, handler, !!capturing);
            }
            else if (el.attachEvent) { /* IE */
          el.attachEvent('on' + type, handler);
            }
            else { /* OLDER BROWSERS (DOM0) */
          el['on' + type] = handler;
            }
      };
  _stopEvent = function(e) {
    if (e.stopPropagation) { /* W3C */
      e.stopPropagation();
      e.preventDefault();
    }
    else {
      that.window.event.cancelBubble = true;
      that.window.event.returnValue = false;
    }
  };

  if (typeof status === 'string') {
    alert(status);
  }

  _addEvent(this.window, 'error', function(e) {_stopEvent(e);}, false);

  var handlers = [
    'copy', 'cut', 'paste',
    'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
    'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
    'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
  ];

  for (i = 0; i < handlers.length; i++) {
    _addEvent(this.window, handlers[i], function(e) {_stopEvent(e);}, true);
  }

  if (this.window.stop) {
    this.window.stop();
  }

  //throw '';
}




// Simulates a keydown event
function simulateKeydown(key){
  var e = $.Event('keydown');
  e.which = key; // Character 'A'
  $(document).trigger(e);
}



// Check if is a number
function isNumber(value){
   return !isNaN(parseInt(value * 1));
}



// Returns val as an int, supports up to 2^32
function toInt(val){
  return (~~val);
}



// Returns an estimate of the object's size
function sizeOf(object){
    bytes=0;
    function sizeOfRec(obj) {
        if(obj !== null && obj !== undefined) {
            switch(typeof obj) {
            case 'number':
                bytes += 8;
                break;
            case 'string':
                bytes += obj.length * 2;
                break;
            case 'boolean':
                bytes += 4;
                break;
            case 'object':
                var objClass = Object.prototype.toString.call(obj).slice(8, -1);
                if(objClass === 'Object' || objClass === 'Array') {
                    for(var key in obj) {
                        if(!obj.hasOwnProperty(key)) continue;
                        sizeOfRec(obj[key]);
                    }
                } else bytes += obj.toString().length * 2;
                break;
            }
        }
        return bytes;
    }
    return sizeOfRec(object);
}



// Returns an html elemnt with the style for fading
function fadeTextElement(text, duration){
  //console.log(text);
  duration = duration || 1000;
  var element=
  '<div style="font-family: \
  sans-serif; animation-name: fade; \
  animation-duration: '+duration/1000+'s; animation-iteration-count: \
  infinite;">'+text+'</div>';
  //console.log(element);
  return element;
}

// Returns the name formated (capitalize first letters and remove underscores)
function prettyName(name){
  // Capitalize first letters and remove underscore
  var arr = name.split('_');
  var disName = '';// Name of the mob to be displayed
  for(var n=0; n<arr.length; n++){
    disName=disName+' '+arr[n][0].toUpperCase()+arr[n].substring(1);
  }
  disName=disName.substring(1);
  return disName;
}



//
