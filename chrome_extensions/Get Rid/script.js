//Play with me # Replacer

replaceText(document.body);

function replaceText(element) {
	if (element.hasChildNodes()) {
		element.childNodes.forEach(replaceText);
	} else if (element.nodeType === Text.TEXT_NODE) {
		element.textContent = element.textContent.replace(/html/gi, '🥈 ');
	}
}

// Colouriser
/*

replaceText(document.body);

function replaceText(element) {
	if (element.hasChildNodes()) {
		element.childNodes.forEach(replaceText);
	} else if (element.nodeType === Text.TEXT_NODE) {
		if (element.textContent.match(/ashish/gi)) {
			// element.parentElement.style.color ='black'
			// element.parentElement.style.backgroundColor = 'black' ''
			const newElement = document.createElement('span');
			newElement.innerHTML = element.textContent.replace(
				/(ashish)/gi,
				'<span style="background-color:black; color:black;">$1</span>'
			)

			element.replaceWith(newElement);
		}
		// element.textContent = element.textContent.replace(/display/gi,'🥈')
	}
}
*/
//Remove me forever
/*
    replaceText(document.body)
    
    function replaceText(element){
        if(element.hasChildNodes()){
            element.childNodes.forEach(replaceText)
        }else if(element.nodeType === Text.TEXT_NODE){
            if(element.textContent.match(/(java)/gi)){
                element.parentElement.remove()
            }
        }
    }
*/

//RAinbow highlighter
/*
replaceText(document.body);

function replaceText(element) {
	if (element.hasChildNodes()) {
		element.childNodes.forEach(replaceText);
	} else if (element.nodeType === Text.TEXT_NODE) {
		if (element.textContent.match(/hello/gi)) {
			const newElement = document.createElement('span');
			newElement.innerHTML = element.textContent.replace(
				/(hello)/gi,
				'<span class="rainbow">$1</span>'
			);

			element.replaceWith(newElement);
		}
	}
}
*/
