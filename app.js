let cover = '';
function setup(){
  createCanvas(1024, 1024);
  rectMode(CENTER);
}

// function preload() {
//   myFont = loadFont('https://github.com/google/fonts/blob/master/ofl/montserrat/Montserrat-Regular.ttf?raw=true');
//   console.log(myFont);
// } 
function getImage(){
  cover = loadImage('cover.jpg');
}
// function getPhotos(){
//   $.ajax({
//     url: 'https://api.unsplash.com/photos/?client_id= ',
//   }).done(function(response, textStatus, jqXHR){
//     console.log(response);
//   }).fail(function(jqXHR, status, errorThrown) {
//     var response = $.parseJSON(jqXHR.responseText);
//     console.log(response);
//     throwErrorMessage(response, product);
//   });
// }

function title(){
  let coverName = 'Cigarro e Solidão.';
  push();
  fill(255,255,255);
  textSize(122);
  textAlign(LEFT);
  textFont('Montserrat-Bold');
  text(coverName, 400, 400, 300, 600);
  pop();
}

function particles (){
  
}

function draw(){
  background(35, 35, 35);
  image(cover, 0,0); 
  title();
}
