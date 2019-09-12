var quote = document.getElementsByClassName('quote')[0];
var green = document.getElementsByClassName('green')[0];
var amber = document.getElementsByClassName('amber')[0];
var red = document.getElementsByClassName('red')[0];
var box = document.getElementsByClassName('box')[0];
var content = document.getElementsByClassName('box__content')[0];

quote.addEventListener('click', function(){
    green.classList.add("active");
    amber.classList.remove("active");
    red.classList.add("active");
    box.classList.remove("max");
    box.classList.remove("exit");
    quote.classList.remove("show");
    content.classList.add("show");
});

green.addEventListener('click', function(){
    green.classList.remove("active");
    amber.classList.add("active");
    box.classList.add("max");
});

amber.addEventListener('click', function(){
    green.classList.add("active");
    amber.classList.remove("active");
    box.classList.remove("max");
});

red.addEventListener('click', function(){
    green.classList.remove("active");
    amber.classList.remove("active");
    red.classList.remove("active");
    box.classList.add("exit");
    quote.classList.add("show");
    content.classList.remove("show");
});