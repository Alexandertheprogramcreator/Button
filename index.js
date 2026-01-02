document.addEventListener('DOMContentLoaded', () => {
	const myButton = document.querySelector('.pressable-button');
	if (!myButton) {
		console.warn('No element with class "pressable-button" found.');
		return;
	}

	myButton.addEventListener('click', () => {
		myButton.textContent = 'Button Was Clicked!';
	});
});
