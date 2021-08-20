let input = document.querySelector('.grocery');
let list = document.querySelector('.grocery-list');
let msgBox = document.querySelector('.msg');
let edit = {element:null,isEditable:false};
let submitBtn = document.querySelector('.submit-btn');
let item = document.getElementsByClassName(`.item-container`);
submitBtn.addEventListener('click', function (event) {
	buttonSubmit();
});
document.querySelector('.clear-btn').addEventListener('click', function (event) {
	clearItem();
});
let itemList = [];

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
		} else {
			let article = `<article class="grocery-item"><p class="item-container">${input.value.toLowerCase()}</p><div class="btn-container"><button onclick="editBtn(this)" class="edit-btn">Edit</button><button onclick="deleteBtn(this)" class="delete-btn">Delete</button></div></article>`;
			list.innerHTML += article;
			showMsg(`Item Added to the List`);
		}
		input.value = '';
	}
}

function editBtn(e) {
	let listItem = e.parentElement.parentElement;
	edit.isEditable = true;
	edit.element = listItem.querySelector('p');
	input.value = listItem.querySelector('p').innerText;
	submitBtn.innerText = 'Edit';
	listItem.querySelector('p').innerText = input.value;
}

function deleteBtn(e) {
	let listItem = e.parentElement.parentElement;
	showMsg(`${listItem.querySelector('p').innerText} is removed`);
	listItem.remove();
	if (list.childNodes.length === 0) {
		showMsg(`Empty List`);
	}
	return;
}

function clearItem() {
	list.innerHTML = '';
	showMsg(`Empty List`);
}
