/*js is case sensitive!!*/
var today = new Date(); //create a new date object
var hourNow = today.getHours(); //find the current hour
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var gruesse;
var greeting;
var selamlama;
var salutation;
var body = document.getElementsByTagName('body')[0]; //for the cover photo in body
//display the appropriate greeting based on the current time
if (hourNow > 18) {
/*blue part determines which code will run and purple curly braces indicate the start and end of the code block*/
 gruesse = 'Guten Abend' ;//statement
 /*each statement should start on a new line and end with a semicolon*/
 greeting = 'Good Evening'; //= is to assign a value to the variable
 selamlama = 'İyi akşamlar'; //this a string data type
/* string data type can be in single or double quotes but it should be straight not curly, it should be on the same line; and opening and closing one should match.
If there will be an additional quote within the string data type then surrounding quote should be the other type*/
/*in js no need to specify the data type*/
 salutation = 'Bonsoir';
 body.style.backgroundImage = 'url(img/evening.jpg)';
 }
else if (hourNow > 11) {
 gruesse = 'Guten Tag';
 greeting = 'Good Afternoon';
 selamlama = 'İyi Günler';
 salutation = 'Bonne Après-midi';
 body.style.backgroundImage = 'url(img/noon.jpg)';
/*pay attention if the file is jpg or jpeg*/
 }

else if (hourNow > 3) {
 gruesse = 'Guten Morgen';
 greeting = 'Good Morning';
 selamlama = 'Günaydın';
 salutation = 'Bonjour';
 body.style.backgroundImage = 'url(img/sunrise.jpg)';
 }
else {
gruesse = 'Hallo!';
greeting = 'Hello!';
selamlama = 'Merhaba!';
salutation = 'Salut!';
body.style.backgroundImage = 'url(img/horizon.jpg)';
}
document.getElementById('js-content-gruesse').innerHTML = "<h1>" + gruesse + "</h1>";
document.getElementById('js-content-greeting').innerHTML = "<h1>" + greeting + "</h1>";
document.getElementById('js-content-selamlama').innerHTML = "<h1>" + selamlama + "</h1>";
document.getElementById('js-content-salutation').innerHTML = "<h1>" + salutation + "</h1>";
// the above code is better than this: document.write('<h1>' + greeting + '</h1>');

if(dd<10) {
	dd = '0'+dd;
}
if(mm<10) {
	mm = '0'+mm;
}
today = mm + '/' + dd + '/' + yyyy;
document.getElementById('js-content-today').innerHTML = "<p>" + today + "</p>";

//DRAW CLOCK
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.opacity = '0.5'; //inside the round dark blue #0000ffff
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#BF0B2C'); /*inner round, hourhand & vane (akrep ve yelkovan)*/
  grad.addColorStop(0.5,'#F5900F'); //color of inside round
  grad.addColorStop(1, '#0AA38C'); //outer round
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#02173D'; //color of numbers
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.20 + "px Bookman Old Style";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour=hour%12;
  hour=(hour*Math.PI/6)+
  (minute*Math.PI/(6*60))+
  (second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  // second
  second=(second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
