// Write your code here...

fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(data => {
        data.forEach(menuItem => {
            let span = document.createElement('span');
            span.textContent = menuItem.name;
            let menuItemsDiv = document.getElementById('menu-items');
            menuItemsDiv.appendChild(span);
            // console.log(menuItemsDiv);

            console.log(menuItem);



            
        })

    })
