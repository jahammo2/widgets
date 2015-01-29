function resizeDiv () {
	var hiddenDiv = document.querySelector('.hidden-textbox')
	var content =null;
	var txt = document.querySelector('textarea');
	content = txt.value;
	content = content.replace(/\n/g, "<br>");
	hiddenDiv.innerHTML = content;
	var newHeight = hiddenDiv.clientHeight;
	console.log(newHeight);
	var expandingBox = document.querySelector('.expanding-textbox');
	var secondTriangle = document.querySelector('.second-triangle');
	var svgImg = document.querySelector('svg');
	secondTriangle.style.top = ((newHeight - 110) + 280) + "px";
	expandingBox.style.height = newHeight + "px";
	svgImg.style.top = ((newHeight - 110) + 300) + "px";
};








