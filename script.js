// Remove obsolete preview/tracking query parameters from the browser URL.
// Preserve the current section anchor and any unrelated query parameters.
(function cleanLegacyUrl() {
  try {
    const current = new URL(window.location.href);
    let changed = false;
    for (const key of [...current.searchParams.keys()]) {
      if (key === 'v' || key === 'utm_source' || key.startsWith('utm_')) {
        current.searchParams.delete(key);
        changed = true;
      }
    }
    if (changed) window.history.replaceState(window.history.state, '', current.pathname + current.search + current.hash);
  } catch (_) { /* No impact on navigation if URL cleanup is unavailable. */ }
})();

const runeFiles=['fire','lightning','nature','shadow','radiance'];
const board=document.getElementById('rune-board');
if(board){const fragment=document.createDocumentFragment();for(let i=0;i<49;i++){const tile=document.createElement('div');tile.className='tile';tile.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=`assets/rune-${runeFiles[(i*13+Math.floor(i/7)*7+i*i)%runeFiles.length]}.png`;img.alt='';img.loading='lazy';tile.appendChild(img);fragment.appendChild(tile)}board.appendChild(fragment)}
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

const shareButton=document.getElementById('share-project');
if(shareButton){shareButton.addEventListener('click',async()=>{const status=document.getElementById('share-status');const url='https://seroo1945.github.io/runeshatter/';try{if(navigator.share){await navigator.share({title:'Runeshatter: Dark Fantasy Match-3 RPG',text:'Discover Runeshatter: a dark fantasy RPG for Android.',url});if(status)status.textContent='Thanks for spreading the word.';}else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);if(status)status.textContent='Page link copied!';}else{if(status)status.textContent='Copy the page address from your browser to share.';}}catch(error){if(error.name!=='AbortError'&&status)status.textContent='You can share this page using your browser.';}})}
