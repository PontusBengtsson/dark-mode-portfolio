window.onload = function() {
   const button = document.querySelector('#toggle-button');
   button.addEventListener('click', toggle);

   const body = document.querySelector('body');
   const gradient = document.querySelector('.background-gradient');
   const logo = document.querySelector('.logo');
   const headline = document.querySelector('#headline');
   const portrait = document.querySelector('.portrait');
   const textDay = document.querySelector('.dark-mode-day');
   const textNight = document.querySelector('.dark-mode-night');

   function toggle(event) {
    if (event.target.checked){
      goDark();
    } else {
      goLight();
    }
   }

   function goDark() {
      body.style.backgroundImage = 
      'linear-gradient(180deg, #10091d 0%, #28193d 100%)';
      body.style.color = '#ffffff';
      gradient.setAttribute('src','/images/dark-bg.png');
      logo.setAttribute('src','/images/logo-light.png');
      portrait.style.filter = 'grayscale(1) brightness(0.7)';
      textDay.style.color ='#ffffff4d';
      textNight.style.color = '#ffffff';
      headline.innerText = "Dark";
   }

   function goLight () {
      body.style.backgroundImage = 
      'linear-gradient(180deg, #e7f0f8 0%, #ffffff 100%)';
      body.style.color = '#262626';
      gradient.setAttribute('src','/images/light-bg.png');
      logo.setAttribute('src','/images/logo-dark.png');
      portrait.style.filter = 'unset';
      textDay.style.color = '#262626';
      textNight.style.color = '#2626268d';
      headline.innerText = "Light";
   }
};