const runeFiles=['fire','lightning','nature','shadow','radiance'];
const board=document.getElementById('rune-board');
if(board){const fragment=document.createDocumentFragment();for(let i=0;i<36;i++){const tile=document.createElement('div');tile.className='tile';tile.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=`assets/rune-${runeFiles[(i*13+Math.floor(i/6)*7+i*i)%runeFiles.length]}.png`;img.alt='';img.loading='lazy';tile.appendChild(img);fragment.appendChild(tile)}board.appendChild(fragment)}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();


// Switch all three hero portraits while preserving the original three-card layout.
(()=>{
 const portraits={warrior:{male:'assets/warrior.png',female:'assets/warrior-female.png'},mage:{male:'assets/mage-male.png',female:'assets/mage.png'},rogue:{male:'assets/rogue.png',female:'assets/rogue-female.png'}};
 const buttons=[...document.querySelectorAll('[data-hero-gender]')];
 const images=[...document.querySelectorAll('[data-hero-image]')];
 if(!buttons.length||!images.length)return;
 let requestId=0;
 buttons.forEach(button=>button.addEventListener('click',()=>{
  const gender=button.dataset.heroGender,id=++requestId;
  buttons.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
  images.forEach(img=>{
   const cls=img.dataset.heroImage,src=portraits[cls][gender];
   if(img.getAttribute('src')===src)return;
   const preload=new Image();preload.onload=()=>{if(id!==requestId)return;img.src=src;img.alt=`${gender==='male'?'Male':'Female'} ${cls} hero`;};preload.src=src;
  });
 }));
})();
