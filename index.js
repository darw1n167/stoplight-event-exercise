(function() {
  'use strict';

  // YOUR CODE HERE
})();




let controls = document.getElementById('controls');
let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');
stopButton.addEventListener('click',function(e){
    console.log(e)
    stopLight.classList.toggle('stop');
    if (stopLight.className == 'bulb') {
      console.log(`${this.textContent} bulb off`)
    } else {
      console.log(`${this.textContent} bulb on`)
    }
});
slowButton.addEventListener('click',function(){
  slowLight.classList.toggle('slow');
  if (slowLight.className == 'bulb') {
    console.log(`${this.textContent} bulb off`)
  } else {
    console.log(`${this.textContent} bulb on`)
  }
});
goButton.addEventListener('click',function(){
  goLight.classList.toggle('go');
  if (goLight.className == 'bulb') {
    console.log(`${this.textContent} bulb off`)
  } else {
    console.log(`${this.textContent} bulb on`)
  }
});
stopButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${stopButton.innerText} button`)
})
slowButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${slowButton.innerText} button`)
})
goButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${goButton.innerText} button`)
})
stopButton.addEventListener('mouseleave', function(){
  console.log(`Left ${stopButton.innerText} button`)
})
slowButton.addEventListener('mouseleave', function(){
  console.log(`Left ${slowButton.innerText} button`)
})
goButton.addEventListener('mouseleave', function(){
  console.log(`Left ${goButton.innerText} button`)
})

// if () {

// } 
// else if () {

// }



// controls.addEventListener('click', function(e) {
//   if (e.target.nodeName == 'DIV')  {
//     console.log(e.target.classList)
//   }
// })
