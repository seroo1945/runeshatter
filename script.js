const runeFiles=['fire','lightning','nature','shadow','radiance'];
const board=document.getElementById('rune-board');
if(board){const fragment=document.createDocumentFragment();for(let i=0;i<36;i++){const tile=document.createElement('div');tile.className='tile';tile.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=`assets/rune-${runeFiles[(i*13+Math.floor(i/6)*7+i*i)%runeFiles.length]}.png`;img.alt='';img.loading='lazy';tile.appendChild(img);fragment.appendChild(tile)}board.appendChild(fragment)}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();


// Character appearance selector. Direct source replacement avoids preload races.
(function () {
  const portraits = {
    warrior: { male: 'assets/warrior.png', female: 'assets/warrior-female.png' },
    mage: { male: 'assets/mage-male.png', female: 'assets/mage.png' },
    rogue: { male: 'assets/rogue.png', female: 'assets/rogue-female.png' }
  };
  const buttons = Array.from(document.querySelectorAll('[data-hero-gender]'));
  const images = Array.from(document.querySelectorAll('[data-hero-image]'));
  function selectGender(gender) {
    if (!['male', 'female'].includes(gender)) return;
    buttons.forEach(button => {
      const active = button.getAttribute('data-hero-gender') === gender;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    images.forEach(img => {
      const cls = img.getAttribute('data-hero-image');
      if (!portraits[cls]) return;
      const src = portraits[cls][gender];
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
      img.alt = (gender === 'male' ? 'Male ' : 'Female ') + cls + ' hero';
    });
  }
  buttons.forEach(button => button.addEventListener('click', () => selectGender(button.getAttribute('data-hero-gender'))));
  selectGender('male');
})();
