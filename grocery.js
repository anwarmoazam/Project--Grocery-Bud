let input = document.querySelector('.grocery');
let list = document.querySelector('.grocery-list');
let clearBtn = document.querySelector(".clear")
let msgBox = document.querySelector('.msg');
let submitBtn = document.querySelector('.submit-btn');

let edit = {element:null,isEditable:false};

submitBtn.addEventListener('click', function (event) {buttonSubmit();});

function showMsg(msg) {
	msgBox.innerText = msg;
	setTimeout(() => {
		msgBox.innerText = ``;
	}, 1000);
}

function buttonSubmit() {
	if (input.value === '') {
		showMsg(`Please Enter Value`);
	} else {
		if (edit.isEditable === true) {
			edit.element.innerText = input.value.toLowerCase();
			edit.isEditable=false;
			edit.element=null;
			submitBtn.innerText = 'Submit';
			showMsg(`Item Edited Successfully`);
		} else if(list.childNodes.length === 0){
			let article = `<article class="grocery-item"><p class="item-container">${input.value.toLowerCase()}</p><div class="btn-container"><button onclick="editBtn(this)" class="edit-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></button><button onclick="deleteBtn(this)" class="delete-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></button></div></article>`;
			list.innerHTML += article;
			let clear = `<button onclick="clearItem(this)" class="clear-btn">Clear Items</button>`
			clearBtn.innerHTML = clear;
			showMsg(`Item Added to the List`);
		} else{
			let article = `<article class="grocery-item"><p class="item-container">${input.value.toLowerCase()}</p><div class="btn-container"><button onclick="editBtn(this)" class="edit-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></button><button onclick="deleteBtn(this)" class="delete-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></button></div></article>`;
			list.innerHTML += article;
			showMsg(`Item Added to the List`);
		}
		input.value = '';
		input.auto
	}
}

function editBtn(e) {
	let listItem = e.parentElement.parentElement;
	edit.isEditable = true;
	edit.element = listItem.querySelector('p');
	input.value = listItem.querySelector('p').innerText;
	submitBtn.innerText = 'Edit';
}

function deleteBtn(e) {
	let listItem = e.parentElement.parentElement;
	showMsg(`${listItem.querySelector('p').innerText} is removed`);
	listItem.remove();
	input.value='';
	submitBtn.innerText='Submit';
	if (list.childNodes.length === 0) {
		showMsg(`Empty List`);
		clearBtn.innerHTML = '';
	}
	return;
}

function clearItem(e) {
	list.innerHTML = "";
	input.value = "";
	submitBtn.innerText = "Submit";
	showMsg(`Empty List`);
	clearBtn.innerHTML = '';
}