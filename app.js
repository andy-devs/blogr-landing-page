const dropBtn = document.body.querySelectorAll('.dropdown');
const dropContent = document.body.querySelectorAll('.dropdown-content');

for (let i = 0; i < dropBtn.length; i++) {
	btn[i].addEventListener('hover', () => {
		dropContent[i].classList.add('active');
	});
}
