// // // console.dir(document)
// // // console.log(document.domain)
// // // console.log(document.URL)
// // // console.log(document.title)
// // // document.title = "Items "
// // // console.log(document.all[10]);
// // // console.log(document.forms)
// // // console.log(document.links)


// // var headerTitle= document.getElementById('header-title')
// // console.log(headerTitle)
// // headerTitle.textContent="Hello"
// // headerTitle.innerText='GoodBye'

// // var headerTitle= document.getElementById('header-title')
// // console.log(headerTitle)
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// // headerTitle.style.borderBottom='solid 3px #000'
// // var addItems = document.getElementsByClassName('title')

// // console.log(addItems[0])
// // addItems[0].style.fontWeight ='bold';
// // addItems[0].style.color='green'

// // var items = document.getElementsByClassName('list-group-item')
// // items[1].style.backgroundColor ='green'
// // console.log(items)

// // for(var i=0;i<items.length; i++){
// //     items[i].style.fontWeight='bold'
// // }



// // var lists = document.getElementsByTagName('li')
// // console.log(lists)
// // console.log(lists[1])
// // lists[2].style.backgroundColor ='green'
// // console.log(items)

// // for(var i=0;i<lists.length; i++){
// //     lists[i].style.fontWeight='bold'
// // }


// var header =document.querySelector('#main-header')
// header.getElementsByClassName.borderBottom= 'solid 4px #ccc'

// // var input = document.querySelector('input')
// // input.value='hello world'

// // var submit = document.querySelector('input[type="submit"]')
// // submit.value= 'send'

// // var items =document.querySelector('.list-group-item')
// // items.style.color='red'

// // var lastItem =document.querySelector('.list-group-item:last-child')
// // lastItem.style.color='blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green'


// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.display='none'

// var items = document.querySelectorAll('.list-group-item')
// items[1].style.color='green'


// var odd = document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green'
// }

// var list =document.querySelector('#items')
// list.parentNode.style.backgroundColor='#f4f4f4'

// list.children[1].style.backgroundColor='yellow'

// list.firstChild.textContent='Hai 1'
// list.firstElementChild.textContent='Hello 1'
// list.lastElementChild.textContent='Hello 4'
// list.lastChild.textContent='Hai 4'

// list.nextElementSibling.textContent='Word'
// list.nextSibling.textContent='welcome'

// list.previousElementSibling.textContent='word'
// list.previousSibling.textContent='welcome'


var newDiv =document.createElement('div')
newDiv.className='hello'
newDiv.id='hello 1'
newDiv.setAttribute('title','Hello Div')

var newDivText =document.createTextNode('Hello World')
newDiv.appendChild(newDivText)

var container =document.querySelector('header .container')
var h1 = document.querySelector('header h1',)
newDiv.style.fontSize='30px'
container.insertBefore(newDiv,h1)

var newDiv2 =document.createElement('div')
newDiv2.className='hello2'
newDiv2.id='hello 2'
newDiv2.setAttribute('title','Hello Div2')

var newDivText2 =document.createTextNode('Hello World')
newDiv2.appendChild(newDivText2)

var title = document.querySelector('div .list-group')
var ul1 =document.querySelector('div li')
title.insertBefore(newDiv2,ul1)
