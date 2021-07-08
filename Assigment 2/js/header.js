function cartWidgetActive(event) {
	let widget = event.target.parentElement.children[2];
	widget.classList.toggle('active');
}
