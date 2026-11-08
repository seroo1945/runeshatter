const runeFiles=['fire','lightning','nature','shadow','radiance'];
const board=document.getElementById('rune-board');
if(board){const fragment=document.createDocumentFragment();for(let i=0;i<36;i++){const tile=document.createElement('div');tile.className='tile';tile.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=`assets/rune-${runeFiles[(i*13+Math.floor(i/6)*7+i*i)%runeFiles.length]}.png`;img.alt='';img.loading='lazy';tile.appendChild(img);fragment.appendChild(tile)}board.appendChild(fragment)}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
