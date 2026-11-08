const runeFiles=['fire','lightning','nature','shadow','radiance'];
const board=document.getElementById('rune-board');
if(board){const fragment=document.createDocumentFragment();for(let i=0;i<36;i++){const tile=document.createElement('div');tile.className='tile';tile.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=`assets/rune-${runeFiles[(i*13+Math.floor(i/6)*7+i*i)%runeFiles.length]}.png`;img.alt='';img.loading='lazy';tile.appendChild(img);fragment.appendChild(tile)}board.appendChild(fragment)}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();


// Hero class / appearance selector. Real artwork only, no placeholders.
(()=>{
 const image=document.getElementById('hero-preview-image');if(!image)return;
 const heroData={
  warrior:{label:'CLASS I / WARRIOR',title:'THE WARRIOR',description:'Stand your ground against the darkness.',male:'assets/warrior.png',female:'assets/warrior-female.png'},
  mage:{label:'CLASS II / MAGE',title:'THE MAGE',description:'Command the power of ancient runes.',male:'assets/mage-male.png',female:'assets/mage.png'},
  rogue:{label:'CLASS III / ROGUE',title:'THE ROGUE',description:'Strike from the shadows.',male:'assets/rogue.png',female:'assets/rogue-female.png'}
 };
 let currentClass='warrior',currentGender='male',changeId=0;
 const classButtons=[...document.querySelectorAll('[data-hero-class]')],genderButtons=[...document.querySelectorAll('[data-hero-gender]')];
 function render(){
  const id=++changeId,hero=heroData[currentClass],src=hero[currentGender];
  classButtons.forEach(b=>{const selected=b.dataset.heroClass===currentClass;b.classList.toggle('is-active',selected);b.setAttribute('aria-pressed',String(selected))});
  genderButtons.forEach(b=>{const selected=b.dataset.heroGender===currentGender;b.classList.toggle('is-active',selected);b.setAttribute('aria-pressed',String(selected))});
  image.classList.add('is-changing');
  const next=new Image();next.onload=()=>{if(id!==changeId)return;image.src=src;image.alt=`${currentGender==='male'?'Male':'Female'} ${currentClass}, a Runeshatter hero`;document.getElementById('hero-preview-label').textContent=hero.label;document.getElementById('hero-preview-title').textContent=hero.title;document.getElementById('hero-preview-description').textContent=hero.description;requestAnimationFrame(()=>image.classList.remove('is-changing'))};
  next.onerror=()=>{if(id===changeId)image.classList.remove('is-changing')};next.src=src;
 }
 classButtons.forEach(b=>b.addEventListener('click',()=>{currentClass=b.dataset.heroClass;render()}));
 genderButtons.forEach(b=>b.addEventListener('click',()=>{currentGender=b.dataset.heroGender;render()}));
})();
