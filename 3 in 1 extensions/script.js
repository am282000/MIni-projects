// replaceText(document.body)
    
//     function replaceText(element){
//         if(element.hasChildNodes()){
//             element.childNodes.forEach(replaceText)
//         }elseif(element.nodeType === Text.TEXT_NODE){
//             if(element.textContent.match(/coronavirus/gi)){
//                 // element.parentElement.style.color ='black'
//                 // element.parentElement.style.backgroundColor = 'black' ''
//                 const newElement = document.createElement('span')
//                 newElement.innerHTML = element.textContent.replace(/coronavirus/gi,
//                 '<span style="background-color:black;color:black;>$1</span>')
                
//                 element.replaceWith(newElement)
//             }
//             // element.textContent = element.textContent.replace(/coronavirus/gi,'❤️')
//         }
//     }
    
    //Remove
    replaceText(document.body)
    
    function replaceText(element){
        if(element.hasChildNodes()){
            element.childNodes.forEach(replaceText)
        }elseif(element.nodeType === Text.TEXT_NODE){
            if(element.textContent.match(/coronavirus/gi)){
                element.parentElement.remove()
            }
        }
    }
    
    //highlight
    {/* <script src=".js" type="text/javascript" charset="utf-8">
    replaceText(document.body)
    
    function replaceText(element){
        if(element.hasChildNodes()){
            element.childNodes.forEach(replaceText)
        }elseif(element.nodeType === Text.TEXT_NODE){
            if(element.textContent.match(/coronavirus/gi)){
                const newElement = document.createElement('span')
                newElement.innerHTML = element.textContent.replace(/coronavirus/gi,
                '<span class="rainbow">$1</span>')
                
                element.replaceWith(newElement)
            }
        }
    } */}
