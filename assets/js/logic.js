// Bruno Game logic
$(document).ready(function(){
  console.log('Hello! Welcome to my portfolio!');

// Bruno dress up game
var scene = $('#scene');


// change scene with buttons
// beach button
$('#beachBtn').click(function(){
    scene.removeClass('park');
    scene.removeClass('party');
    scene.addClass('beach');
});

// park button
$('#parkBtn').click(function(){
    scene.removeClass('beach');
    scene.removeClass('party');
    scene.addClass('park');
});

// party button
$('#partyBtn').click(function(){
    scene.removeClass('beach');
    scene.removeClass('park');
    scene.addClass('party');
});


//canvas
var canvas = window._canvas = new fabric.Canvas('c');

//Bruno displayed on the canvas
var dog = document.getElementById('bruno');
var imgInstance1 = new fabric.Image(dog, {
  left: 300,
  top: 100,
  angle: 0,
  opacity: 1
});
canvas.add(imgInstance1);

//clothings
var blackShoes = document.getElementById('blackShoes');
blackShoes.onclick = function(){
  var imgInstance2 = new fabric.Image(blackShoes, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance2);
};

var blackTuxPants = document.getElementById('blackTuxPants');
blackTuxPants.onclick = function(){
  var imgInstance3 = new fabric.Image(blackTuxPants, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance3);
};

var blueJeans = document.getElementById('blueJeans');
blueJeans.onclick = function(){
  var imgInstance4 = new fabric.Image(blueJeans, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance4);
};

var blueShirt = document.getElementById('blueShirt');
blueShirt.onclick = function(){
  var imgInstance5 = new fabric.Image(blueShirt, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance5);
};

var brownPants = document.getElementById('brownPants');
brownPants.onclick = function(){
  var imgInstance6 = new fabric.Image(brownPants, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance6);
};

var blueSneakers = document.getElementById('blueSneakers');
blueSneakers.onclick = function(){
  var imgInstance7 = new fabric.Image(blueSneakers, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance7);
};

var duckFloatie = document.getElementById('duckFloatie');
duckFloatie.onclick = function(){
  var imgInstance8 = new fabric.Image(duckFloatie, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance8);
};

var gladSandal = document.getElementById('gladSandal');
gladSandal.onclick = function(){
  var imgInstance9 = new fabric.Image(gladSandal, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance9);
};

var grayHoodie = document.getElementById('grayHoodie');
grayHoodie.onclick = function(){
  var imgInstance10 = new fabric.Image(grayHoodie, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance10);
};

var grayShort = document.getElementById('grayShort');
grayShort.onclick = function(){
  var imgInstance11 = new fabric.Image(grayShort, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance11);
};

var redShort = document.getElementById('redShort');
redShort.onclick = function(){
  var imgInstance12 = new fabric.Image(redShort, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance12);
};

var plaidSweater = document.getElementById('plaidSweater');
plaidSweater.onclick = function(){
  var imgInstance13 = new fabric.Image(plaidSweater, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance13);
};

var tutu = document.getElementById('tutu');
tutu.onclick = function(){
  var imgInstance14 = new fabric.Image(tutu, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance14);
};

var tuxedoTop = document.getElementById('tuxedoTop');
tuxedoTop.onclick = function(){
  var imgInstance15 = new fabric.Image(tuxedoTop, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance15);
};

var redHeels = document.getElementById('redHeels');
redHeels.onclick = function(){
  var imgInstance16 = new fabric.Image(redHeels, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance16);
};

var whiteTshirt = document.getElementById('whiteTshirt');
whiteTshirt.onclick = function(){
  var imgInstance17 = new fabric.Image(whiteTshirt, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance17);
};

var redBowTie = document.getElementById('redBowTie');
redBowTie.onclick = function(){
  var imgInstance18 = new fabric.Image(redBowTie, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance18);
};

var orangeBathingSuit = document.getElementById('orangeBathingSuit');
orangeBathingSuit.onclick = function(){
  var imgInstance19 = new fabric.Image(orangeBathingSuit, {
    left: 150,
    top: 10,
    angle: 0,
    opacity: 1
  });
  canvas.add(imgInstance19);
};

//icon buttons
//delete button
$('#deleteBtn').click(function(){
    var object = canvas.getActiveObject();
    if (!object){
        alert('Please select the element to remove');
        return '';
    }
    canvas.remove(object);
});

//refresh button
$('#refreshBtn').click(function(){
  window.location.reload();
});

//save button
$('#saveBtn').click(function(){
  // here is the most important part because if you dont replace you will get a DOM 18 exception.
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image; // it will save locally
});


  });
