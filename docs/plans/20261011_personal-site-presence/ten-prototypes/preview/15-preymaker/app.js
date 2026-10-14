const dialog=document.querySelector('#chapter-menu');const opener=document.querySelector('#menu-open');const closer=document.querySelector('#menu-close');
opener.addEventListener('click',()=>{dialog.showModal();document.body.classList.add('menu-visible');closer.focus();});
function closeMenu(){dialog.close();}
closer.addEventListener('click',closeMenu);
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeMenu();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('menu-visible');opener.focus();});
function revealChapter(hash){const chapter=document.querySelector(hash);if(!chapter)return;chapter.querySelectorAll('.film-frame').forEach(f=>{f.classList.remove('reveal');void f.offsetWidth;f.classList.add('reveal');});}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{const hash=link.getAttribute('href');if(dialog.open)closeMenu();revealChapter(hash);}));
// Poster imagery and every section remain visible with JavaScript or motion disabled.
