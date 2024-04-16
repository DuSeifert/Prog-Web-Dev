var r = document.querySelector(':root');

function some(){
    r.style.setProperty('--x', '0');
    r.style.setProperty('--y', '1');
}

function volta(){
    r.style.setProperty('--x', '1');
    r.style.setProperty('--y', '0');
}