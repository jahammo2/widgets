// var textboxHeight = $('.text-test').height();


// console.log(textboxHeight)

// $(function () {
// 	$('.text-test').height();
// 	var textboxHeight = $('.text-test').height();
// 	console.log(textboxHeight);
// })

// $(function() {
// 	var content =null;
// 	var txt = document.querySelector('textarea');


// });

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
	// expandingBox.setAttribute("style","height:500px")
	// expandingBox.style.height = '500px';
};

// function resizeDiv() {
// 	console.log("works");
// }

/////////////// To make svg's editable ////////////////////

$('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');

});








