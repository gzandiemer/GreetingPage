/*js is case sensitive!!*/
var today = new Date(); //create a new date object
var hourNow = today.getHours(); //find the current hour
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var gruesse; //declare the variable 
/*if a variable name is more than one word than it is written in camelCase*/
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
	dd = '0'+dd
}
if(mm<10) {
	mm = '0'+mm
}
today = mm + '/' + dd + '/' + yyyy;
document.getElementById('js-content-today').innerHTML = "<p>" + today + "</p>";

  

