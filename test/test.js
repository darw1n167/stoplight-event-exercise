let parent = document.getElementById('container');

let eventLogger = function () {
	console.log('I am delegated and attached top my parent!')
}

parent.addEventListener('click', eventLogger)