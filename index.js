const i180bj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': `Высококачественные фото в студиии\ \n на природе`,
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}


//  MENU - BURGER
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
let menuOpen = false;
burgerItem.addEventListener('click', () => {
  if (!menuOpen) {
    burgerItem.classList.add('is-active');
    menuOpen = true;
    menu.classList.add('nav-list_active');
  } else {
    burgerItem.classList.remove('is-active');
    menuOpen = false;
    menu.classList.remove('nav-list_active');
  }
});
function closeMenu() {
  menu.classList.remove('nav-list_active');
  burgerItem.classList.remove('is-active');
}
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu,));


// portfolio switch buttons

const portfolioBtn = document.querySelector('.portfolio-button__item');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.portfolio-buttons__div');

function changeImage(event) {
  const grebannueDatu = event.target.dataset.season;
  if(event.target.classList.contains(grebannueDatu)){}
  if(event.target.classList.contains('portfolio-button__item')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    // portfolioBtn.forEach()
  }
}

portfolioBtns.addEventListener('click', changeImage);

// active buttons  
const allButtons = portfolioBtns.getElementsByClassName('portfolio-button__item');
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    const activeButton = document.getElementsByClassName('active');
    activeButton[0].className = activeButton[0].className.replace(' active', '');
    this.className += ' active';
  });
}


// SWITCH LANGUAGE RU ENG

// const switchLangBtns = document.querySelector('.switch-lang');
const langButtons = document.querySelector('.switch-lang');

langButtons.onclick = function getTranslate(event) {
  let language = event.target.textContent; 
  let translateItems = document.querySelectorAll('[data-i18n]');
  translateItems.forEach((elem) => {
    elem.textContent = i180bj[language][elem.dataset.i18n];
  });
  console.log('aue');
};

// active language
const activeLangBtn = langButtons.getElementsByClassName('switch-lang__btn');
for (var i = 0; i < activeLangBtn.length; i++) {
  activeLangBtn[i].addEventListener('click', function() {
    const activeLangBtnColor = document.getElementsByClassName('active-color');
    activeLangBtnColor[0].className = activeLangBtnColor[0].className.replace(' active-color', '');
    this.className += ' active-color';
  });
}

// function setLocalStorage() {
//   localStorage.setItem('lang', i18n);
// }
// window.addEventListener('beforeunload', setLocalStorage);

console.log(`
1.Смена изображений в секции portfolio +25
2.Перевод страницы на два языка +25
3.Переключение светлой и темной темы +25
4.Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
5.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике 0`)