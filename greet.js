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
 gruesse = 'Guten Abend' ;
 greeting = 'Good Evening'; 
 selamlama = 'İyi akşamlar'; 
 salutation = 'Bonsoir';
    body.style.backgroundImage = 'url(img/evening.jpg)';
 }
else if (hourNow > 11) {
 gruesse = 'Guten Tag';
 greeting = 'Good Afternoon';
 selamlama = 'İyi Günler';
 salutation = 'Bonne Après-midi';
 body.style.backgroundImage = 'url(img/noon.jpg)'; 
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

  

