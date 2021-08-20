let txt = document.querySelector(".grocery");
let list = document.querySelector(".grocery-list");
let msgBox = document.querySelector(".msg")
let editTxt = document.querySelector(".btn-container");
let item = document.getElementsByClassName("item-container");
document.querySelector(".submit-btn").addEventListener("click", function (event) {buttonSubmit();})
document.querySelector(".clear-btn").addEventListener("click", function (event) {clearItem();})
let itemList = [];

// function loadPage()
// {
//     let itemList = []; 
//     let item = document.getElementsByClassName("item-container");
//             for(let i=0;i<item.length;i++)
//             {
//                 itemList.push(item[i].innerText);
//             }
// }

        

function buttonSubmit()
{
    if(txt.value === "")
    {
        msgBox.innerText = `Please Enter Value`
        setTimeout(()=> {msgBox.innerText = ``}, 1000);
    } else
    {
        let article = `<article class="grocery-item"><p class="item-container">${txt.value[0].toUpperCase()+txt.value.slice(1).toLowerCase()}</p><div class="btn-container"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></div></article>`
        list.innerHTML += article;
        // let item = document.getElementsByClassName(".grocery-item");
        txt.value = "";
        // itemList.push(item.innerText);
        msgBox.innerText = `Item Added to the List`;
        setTimeout(()=> {msgBox.innerText = ``}, 1000);
        document.querySelector(".grocery-item").addEventListener("click", function (event) {buttonEdit();})
        // console.log(list.innerText); 
    }
        let item = document.getElementsByClassName("item-container");
        let itemListLocal = [];
        for(let i=0;i<item.length;i++)
        {
            itemListLocal.push(item[i].innerText);
        }
        itemList = itemListLocal;
        console.log(itemList);
}

function buttonEdit()
{
    let elements = document.getElementsByClassName("grocery-item");
    // console.log(elements[0].getElementsByClassName("grocery-item"))
    // txt.value = elements.innerText;
    // console.log(elements);
}

function clearItem()
{
    list.innerHTML = "";
    msgBox.innerText = `Empty List`;
    setTimeout(()=> {msgBox.innerText = ``}, 1000);
}