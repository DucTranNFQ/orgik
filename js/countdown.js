const daysTag = document.querySelector('.countdown__item .days')
const hrsTag = document.querySelector('.countdown__item .hrs')
const minsTag = document.querySelector('.countdown__item .mins')
const secsTag = document.querySelector('.countdown__item .secs')

// Set the date we're counting down to
const countDownDate = new Date("May 5, 2023 22:37:25").getTime();

// Update the count down every 1 second
const clock = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysTag.innerHTML = days
  hrsTag.innerHTML = hours
  minsTag.innerHTML = minutes
  secsTag.innerHTML = seconds
}, 1000);