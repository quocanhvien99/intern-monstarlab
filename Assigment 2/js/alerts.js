function closeAlert(event) {
	event.target.parentElement.remove();
	if (document.getElementsByClassName('alert').length === 0) {
		document.getElementsByClassName('alerts')[0].remove();
	}
}
