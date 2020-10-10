//Code adapted from udemy course on java essentials
//Source: https://www.udemy.com/course/javascript-essentials/ accessed in October, 2020


let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function set()
{
    
    for( let index = 0; index < elements.length; index++ )
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        
        div.style[ cssProperty ] = cssValue;
        
        //adding event for each select drop down  
        elements[index].addEventListener('click', set);
    }
}

document.getElementById('set').addEventListener('click',set);
