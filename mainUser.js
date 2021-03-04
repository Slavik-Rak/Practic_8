

let h = document.querySelector('h1');


let divWrap = document.createElement('div');
divWrap.classList.add('divWrap');


let url = new URL(location.href);

let i = url.searchParams.get('id');
let id = JSON.parse(i);
console.log(id)

let n = url.searchParams.get('nameW');
let nameW = JSON.parse(n);
console.log(nameW)

let l = url.searchParams.get('location');
let locationW = JSON.parse(l);
console.log(locationW)

let p = url.searchParams.get('pictures');
let pictures = JSON.parse(p);
console.log(pictures);

let par = document.createElement('p');

par.innerHTML = `id: <b> ${id}</b> <br> name: <b> ${nameW}</b><br> location: <b> ${locationW}</b>`;
let imgW = document.createElement('img');
imgW.src = pictures;


divWrap.appendChild(par);
divWrap.appendChild(imgW);

document.body.appendChild(divWrap)



// let nameU = url.searchParams.get('name');
// let userName = JSON.parse(nameU)
// console.log(userName);





















































// let url = new URL(location.href);


// let nameU = url.searchParams.get('name');
// let userName = JSON.parse(nameU)
// console.log(userName);
// let lastU = url.searchParams.get('last');
// console.log(lastU);
// let middleU = url.searchParams.get('middle');
// console.log(middleU);
// let imagesUs = url.searchParams.get('imagesUs');
// console.log(imagesUs);

// let wrap = document.createElement('div');
// wrap.classList.add('divWrap');

// let imgUs = document.createElement('img');
// imgUs.src = JSON.parse(imagesUs);

// wrap.innerHTML = JSON.parse(imagesUs);

// wrap.appendChild(imgUs);

// document.body.appendChild(wrap);

// elemUsArr.name.first}last=${elemUsArr.name.last}middle=${elemUsArr.name.middle}imagesUs=${elemUsArr.images.main