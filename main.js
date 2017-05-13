function makeGarden() {
  $('#controls').show();
  $('#intro').hide();
  gardenFlower();  
  gardenFlower();  
  gardenFlower();  
  gardenFlower(); 
  gardenFlower();  
  gardenFlower();   
  bunny();
  bunny();
  bunny();
  bunny();
  bunny();
  bunny();
}

$("body").on('click', '.flower', function() {
  stopAll();
  var xGroup = document.querySelectorAll('.soundtrack');
  var audio = xGroup[getRandomInt(0,4)];
  audio.play();
});

Mousetrap.bind('space', function() { 
 stopAll();
});

function stopAll() {
  var xGroup = document.querySelectorAll('.soundtrack');
  for (var i = 0; i < xGroup.length; i++) {
    xGroup[i].pause();
    xGroup[i].currentTime = 0;
  }
}

$("body").on('click', '.bunny', function() {
  displayMessage();
});

function displayMessage() {
  $("body").append('<div class="modalOverlay">');
  var text = "<p id='message-text'>" + generateMessage() + "</p>";
  $('body').append("<div id='message'><img id='scroll' src='scroll.png'/>"+text+"<br><button onclick='closeMessage()'>Back to the Garden!</button></div>");
}

function closeMessage() {
  $(".modalOverlay").remove();
  $('#message').remove();
}

function generateMessage() {
  if (message.length < 1) {
    return "You've seen all the messages the bunnies have for you. I think they have to go to sleep now. Happy Mother's Day! (Reload the page to see messages again)";
  }

  var bunny_index = getRandomInt(0, bunnies.length-1);
  var bunny_text = bunnies[bunny_index];
  bunnies.splice(bunny_index, 1);

  var message_index = getRandomInt(0, message.length-1);
  var message_text = message[message_index];
  message.splice(message_index, 1);

  var output = greeting[getRandomInt(0, 7)] + " " + bunny_text + " " + transition[getRandomInt(0, 3)] + " " + message_text;
  console.log(message);
  console.log(output);
  return output;
  
}

function bunny() {
  source = "gifs/giphy"+getRandomInt(1,4)+'.gif';
  flower = $("<img class='gif bunny' src='"+source+"'>");
  flower.attr("src", source+"?a="+Math.random());
  
  //flower size
  flower.css({
      'width':getRandomInt(5, 10)+'%',
  });

  //flower position
  flower.css({
      'left':getRandomInt(60, 90)+'%',
      'bottom':getRandomInt(10, 60)+'%'
  }).appendTo( 'body' );
}

function gardenFlower() {
  source = "gifs/garden"+getRandomInt(1,3)+'.gif';
  flower = $("<img class='gif flower' src='"+source+"'>");
  flower.attr("src", source+"?a="+Math.random());
  
  //flower size
  flower.css({
      'width':getRandomInt(10, 15)+'%',
  });

  //flower position
  flower.css({
      'left':getRandomInt(10, 50)+'%',
      'bottom':getRandomInt(10, 50)+'%'
  }).appendTo( 'body' );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//turn off background music 
var bg_on=true;
Mousetrap.bind('shift', function() { 
  if (bg_on) {
    $('#bg-audio')[0].pause();
    bg_on = false;
  } else {
    $('#bg-audio')[0].play();
    bg_on = true;
  }
});