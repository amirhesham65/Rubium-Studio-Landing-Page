var i = 0;
var speed = 100;
var txtArray = [
    'websites',
    'social media',
    'mobile apps',
    'UI',
    'UX',
    'landing pages',
    'web apps',
    'marketing'
];


function typeWriteEffect() { 
    if (i < txt.length) {
        document.getElementById('typewrite-element').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriteEffect, speed);
    }
}

setInterval(function() {
    txt = txtArray[Math.floor(Math.random() * 4)];
    document.getElementById('typewrite-element').innerHTML = '';
    i = 0
    typeWriteEffect();
    
    
}, 2000);
