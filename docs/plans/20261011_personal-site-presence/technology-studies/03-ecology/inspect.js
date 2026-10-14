const details = {
 gpio: ['GPIO header', 'The 40-pin header exposes general-purpose input/output and power pins for connecting electronics.'],
 ethernet: ['Gigabit Ethernet', 'The wired network connector supports Gigabit Ethernet. Raspberry Pi 4 also has onboard wireless networking.'],
 usb: ['USB ports', 'This board has two USB 3.0 ports and two USB 2.0 ports for peripherals such as keyboards and storage.'],
 power: ['USB-C power', 'Raspberry Pi recommends a 15 W USB-C power supply for the Raspberry Pi 4. This connector supplies power to the board.']
};
const spots = [...document.querySelectorAll('.spot')];
const title = document.querySelector('#part-title');
const copy = document.querySelector('#part-copy');
const close = document.querySelector('#close');
let selected;
function reset(){ spots.forEach(s => s.setAttribute('aria-expanded','false'));title.textContent='A computer you can look inside.';copy.textContent='Inspect the connectors to see how this small board connects to the physical world.';close.hidden=true; }
spots.forEach(spot => spot.addEventListener('click', () => {
 if(spot.getAttribute('aria-expanded')==='true'){reset();return;}
 selected=spot;spots.forEach(s => s.setAttribute('aria-expanded',String(s===spot)));
 [title.textContent,copy.textContent]=details[spot.dataset.part];close.hidden=false;
}));
close.addEventListener('click',()=>{reset();selected?.focus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!close.hidden){reset();selected?.focus();}});
