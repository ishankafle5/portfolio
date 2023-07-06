
// var i = 0;
// var txt = 'Hello NEpal';
// var speed = 50;
// function typeWriter() {
   

//     for (let i=0;i<1;i++) {
//     document.getElementById("typewritejs").innerHTML += 'kjsdfkj';
//     setTimeout(typeWriter, speed);
//     };
//   if (i < txt.length) {
//     document.getElementById("typewritejs").innerHTML += txt.charAt(i);
//     i++;
//   }
// }
// typeWriter();


var app = document.getElementById('typewritejs');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Software Developer_')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Web Developer_')
    .pauseFor(1000)
    .deleteChars(15 )
    .typeString('Application Developer_')
    .pauseFor(1000)
    .start();