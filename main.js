



fetch('https://api.sampleapis.com/wines/reds')
    .then(value => value.json())
    .then(wineryS => {
        console.log(wineryS);
        for (let win of wineryS) {

            let divWrap = document.createElement('div');
            divWrap.classList.add('divWrap');

            let wrapWiner = document.createElement('div');
            wrapWiner.classList.add('userWrap');

            let imgesW = document.createElement('img');

            let p = document.createElement('p');

            let a = document.createElement('a');
            a.innerHTML = win.winery + ' - info';
            a.href = `userInfo.html?id=${JSON.stringify(win.id)}&nameW=${JSON.stringify(win.winery)}&location=${JSON.stringify(win.location)}&pictures=${JSON.stringify(win.image)}`;

            p.innerHTML = `id: <b>${win.id}</b> <br> name: <b>${win.winery}</b> <br> location: <b>${win.location}</b>`;
            imgesW.src = win.image;




            divWrap.appendChild(a);
            divWrap.appendChild(p);
            divWrap.appendChild(imgesW);
            document.body.appendChild(divWrap);
        }




    })


































































// fetch('https://api.sampleapis.com/futurama/characters')
//     .then(value => value.json())
//     .then(users => {

//         console.log(users);
//         for (let elemUsArr of users) {


//             if (elemUsArr.name.first != '') {
//                 let userWrap = document.createElement('div');
//                 userWrap.classList.add('userWrap');

//                 let linck = document.createElement('a');
//                 linck.classList.add('linck')


//                 linck.innerHTML += 'name: ' + elemUsArr.name.first + '<br>';
//                 linck.innerHTML += 'last: ' + elemUsArr.name.last + '<br>';
//                 linck.innerHTML += 'middle: ' + elemUsArr.name.middle + '<br>';

//                 userWrap.appendChild(linck);

//                 let imgUs = document.createElement('img');
//                 imgUs.src = elemUsArr.images.main;

//                 linck.href = `userInfo.html?name=${JSON.stringify(elemUsArr.name.first)}&last=${JSON.stringify(elemUsArr.name.last)}&middle=${JSON.stringify(elemUsArr.name.middle)}&imagesUs=${JSON.stringify(elemUsArr.images.main)}`;
//                 // 

//                 divWrap.appendChild(userWrap);
//                 divWrap.appendChild(imgUs);


//                 document.body.appendChild(divWrap);
//             }
//         }
//     })