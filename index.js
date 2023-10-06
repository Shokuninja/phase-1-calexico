// Write your code here...

fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(data => {
        data.forEach(menuItem => {
            let span = document.createElement('span');
            span.textContent = menuItem.name;
            let menuItemsDiv = document.getElementById('menu-items');
            menuItemsDiv.appendChild(span);
        })
        // Challenge #2
        console.log(data[0]);
        let menuItemImage = data[0].image;
        let menuItemName = data[0].name;
        let menuItemDescription = data[0].description;
        let menuItemPrice = data[0].price;

            // Display Image
        let imageElementDiv = document.getElementById('dish-image');
        imageElementDiv.src = menuItemImage;

            // Display Name
        let nameElementDiv = document.getElementById('dish-name');
        nameElementDiv.innerText = menuItemName;

            // Display Description
        let descriptionElementDiv = document.getElementById('dish-description');
        descriptionElementDiv.innerText = menuItemDescription;

            // Display Price
        let priceElementDiv = document.getElementById('dish-price');
        priceElementDiv.innerText = `$${menuItemPrice}`;
    })
