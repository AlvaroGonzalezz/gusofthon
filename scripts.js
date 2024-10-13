const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Nov 09, 2024 17:00:00').getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('dias').innerText = Math.floor(distance / (day)),
      document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

  }, second);


const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
