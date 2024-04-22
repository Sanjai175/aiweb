  //navbar for moblie and lap navgition bar
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
  //animation effects wile scrolling the page content will appear
  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.animation-section');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });

  //details that shown in the about context will appear
  /*
  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.about-details');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });*/

  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.service-card');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });

  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.c-img');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });

  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.question');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });

  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.our-team');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });

  window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.footer2');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
  });

  //question show js

  function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var questions = document.getElementsByClassName('ques');
    var answers = document.getElementsByClassName('answer');

    // Close all answers and reset background color
    for (var i = 0; i < answers.length; i++) {
      answers[i].style.display = 'none';
      questions[i].style.backgroundColor = 'green'; // Reset background color
    }

    // Open the clicked answer and change background color of the clicked question
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    var questionIndex = Array.from(answers).indexOf(answer);
    questions[questionIndex].style.backgroundColor = 'red'; // Change background color of clicked question
  }