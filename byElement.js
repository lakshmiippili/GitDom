var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem)
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItem)


function filterItem(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        var itemName2 = item.childNodes[2].textContent
        console.log(itemName2)
        if(itemName.toLowerCase().indexOf(text)!= -1 || itemName2.toLowerCase().indexOf(text)!= -1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Do you want to delete this item')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }



}

function addItem(e){
    e.preventDefault();

    var newItem =document.getElementById('item').value
    var newDesc= document.getElementById('description').value
    var br =document.createElement('br')

    var li =document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))
    
    li.appendChild(br)
    li.appendChild(document.createTextNode(newDesc))

    var editBtn=document.createElement('button')
    editBtn.className='btn-sm float-right edit'
    editBtn.appendChild(document.createTextNode('Edit'))

    var deleteBtn =document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    
    li.appendChild(editBtn)
    
    itemList.appendChild(li)

}


