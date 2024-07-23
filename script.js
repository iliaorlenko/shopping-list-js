// VARIABLES
const itemForm = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const filter = document.querySelector('.filter');
const noItemsLabel = document.querySelector('.no-items');
const itemList = document.querySelector('ul');
const clearBtn = document.querySelector('#clear');
const listItems = document.querySelectorAll('li');

// FUNCTIONS
function createItem(itemText) {
	const newItem = document.createElement('li');
	const itemButton = document.createElement('button');
	const itemIcon = document.createElement('i');

	itemIcon.className = 'fa-solid fa-xmark';
	itemButton.className = 'remove-item btn-link text-red';
	newItem.textContent = itemText;

	itemButton.appendChild(itemIcon);
	newItem.appendChild(itemButton);
	itemList.append(newItem);

	noItemsLabel.hidden = true;
}

function onSubmit(e) {
	e.preventDefault();

	if (!input.value.trim()) {
		input.focus();
		input.classList.add('validation');
		return;
	}

	createItem(input.value.trim());
	input.classList.remove('validation');
	input.value = '';
	clearBtn.disabled = false;
}

function onTextInput(e) {
	input.classList.remove('validation');
}

function onClearClick() {
	const answer = confirm('Are you sure you want to clear the list?');

	if (answer) {
		while (itemList.firstChild) {
			itemList.removeChild(itemList.firstChild);
		}
		clearBtn.disabled = true;
		noItemsLabel.hidden = false;
	}
}

// EVENT LISTENERS
input.addEventListener('input', onTextInput);

itemForm.addEventListener('submit', onSubmit);

clearBtn.addEventListener('click', onClearClick);
