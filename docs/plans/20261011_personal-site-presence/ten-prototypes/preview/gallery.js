'use strict';
let prototypes = [], filter = 'all';
const worlds = document.getElementById('worlds'), summary = document.getElementById('summary');
function render() {
  worlds.replaceChildren();
  const shown = prototypes.filter(p => filter === 'all' || p.group === filter);
  for (const p of shown) {
    const article = document.createElement('article'); article.className = 'world';
    const media = document.createElement('div'); media.className = 'media';
    if (p.ready && p.thumbnail) {
      const image = document.createElement('img'); image.src = p.thumbnail; image.alt = p.title + ' — actual prototype preview'; image.loading = 'lazy'; image.width=1440; image.height=900; media.append(image);
    } else { const pending = document.createElement('span'); pending.className='pending'; pending.textContent='Preview being prepared'; media.append(pending); }
    const title=document.createElement('h2'); title.textContent=p.number+'. '+p.title;
    const copy=document.createElement('p'); copy.textContent=p.description;
    const details=document.createElement('div'); details.className='details';
    const references=document.createElement('div');references.className='reference-links';
    const reference=document.createElement('a');reference.className='reference';reference.textContent='Reference: '+p.reference;
    reference.href=p.source_url;reference.target='_blank';reference.rel='noopener noreferrer';reference.title='Open original inspiration site in a new tab';
    references.append(reference);
    if(p.reference_url && p.reference_url !== p.source_url){const archived=document.createElement('a');archived.className='reference';archived.textContent='View reference gallery';archived.href=p.reference_url;archived.target='_blank';archived.rel='noopener noreferrer';references.append(archived);}
    details.append(references);
    if(p.ready){const link=document.createElement('a');link.className='open';link.href=p.slug+'/';link.textContent='Open prototype ↗';details.append(link);}
    else {const label=document.createElement('span');label.className='unavailable';label.textContent='Not yet assembled';details.append(label);}
    article.append(media,title,copy,details);worlds.append(article);
  }
  const ready=prototypes.filter(p=>p.ready).length;
  summary.textContent=ready+' of '+prototypes.length+' prototypes available · Showing '+shown.length+'.';
}
for(const button of document.querySelectorAll('[data-filter]')) button.addEventListener('click',()=>{filter=button.dataset.filter;for(const b of document.querySelectorAll('[data-filter]'))b.setAttribute('aria-pressed',String(b===button));render();});
fetch('manifest.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Manifest unavailable');return r.json();}).then(rows=>{prototypes=rows;render();}).catch(()=>{summary.textContent='The prototype list could not load. Refresh to try again.';});
