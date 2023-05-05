

let theName = 'Геннадий Пронин';
let i = 0;
let speed = 100;

function print() {
  if (i < theName.length) {
    document.querySelector('h1').textContent += theName.charAt(i);
    i++;
    setTimeout(print, speed)
  }
}
print()
// Swal.fire({
//     title: 'Добро пожаловать на мой сайт!',
//     showClass: {
//       popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//       popup: 'animate__animated animate__fadeOutUp'
//     }
//   })
// const allPoems = document.querySelector(".all");


// const poems = document.querySelectorAll(".poet");


// const back = document.querySelector('#back')
// const next = document.querySelector('#next')



// let i = 0;
// next.addEventListener('click', function () {

// })

