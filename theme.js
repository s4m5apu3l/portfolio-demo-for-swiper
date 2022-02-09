// theme toggle 
const themeSwitchers = document.querySelectorAll('.theme-toggle__btn');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
      themeConfirm(this.dataset.theme);
     
    });
});

function themeConfirm(themeName) {
  const themeSrc = `theme-${themeName}.css`;
  document.querySelector('[title="theme"]').setAttribute('href', themeSrc);
  localStorage.setItem('theme', themeName);
};

const activeTheme = localStorage.getItem('theme'); 

if(activeTheme === null || activeTheme === 'light') { 
    themeConfirm('light');
} else if (activeTheme === 'dark') {
    themeConfirm('dark');
}
