const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const itemCard = document.getElementById("dataDisplay");
const clearButton = document.getElementById("clearButton");
const sortDropdown = document.getElementById("sortDropdown");

let airplanes = [];

// Fetch the airplane data from the server
function fetchAirplanes() {
    fetch('http://localhost:3000/api/airplanes')
        .then(response => response.json())
        .then(data => {
            airplanes = data;
            renderCards(airplanes);
            priceOfPlanes(airplanes);
        })
        .catch(error => console.error('Error fetching airplanes:', error));
}

function priceOfPlanes(data) {
    const priceDiv = document.getElementById("count-block");
    priceDiv.innerHTML = '';
    let price = data.reduce((acc, plane) => acc + parseFloat(plane.price), 0);
    const totalPrice = `<p class='card-total'>Total airplanes price: ${price}</p>`;
    priceDiv.insertAdjacentHTML("beforeend", totalPrice);
}

function placeCard(data) {
    const card_body = document.getElementById("dataDisplay");
    card_body.innerHTML = '';
    
    data.forEach((item, index) => {
        const row = `
        <li class="item_card">
            <img src="img/boeing737.jpeg" alt="card-img">
            <div class="card-content">
                <h3>${item.model}</h3>
                <p class="pages">Count of passengers: <strong>${item.countOfPassanger}</strong></p>
                <p class="price">Price: <strong>${item.price} dollars</strong></p>
                <button class="button_edit" data-id="${item.id}">Edit</button>
                <button class="button_delete" data-id="${item.id}">Delete</button>
            </div>
        </li>
        `;
        card_body.insertAdjacentHTML('beforeend', row);
    });

    // Add event listeners for Edit and Delete buttons
    document.querySelectorAll('.button_edit').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const airplane = airplanes.find(plane => plane.id == id);
            openModal(airplane);
        });
    });

    document.querySelectorAll('.button_delete').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            deleteAirplane(id);
        });
    });
}

function renderCards(items) {
    placeCard(items);
}

/*searchButton.addEventListener("click", () => {
    const searchValue = searchInput.value.trim();
    const queryParams = searchValue ? `?search=${encodeURIComponent(searchValue)}` : '';
    fetchAirplanes(queryParams);
});*/

searchButton.addEventListener("click", () => {
    const searchValue = searchInput.value.trim();
    console.log('Search value on client:', searchValue); // Лог для перевірки на клієнті
    fetch(`http://localhost:3000/api/airplanes/search?search=${searchValue}`, { cache: 'no-store' })
        .then(response => response.json())
        .then(filteredPlanes => {
            renderCards(filteredPlanes);
            priceOfPlanes(filteredPlanes);
        })
        .catch(error => console.error('Error fetching searched airplanes:', error));
});


clearButton.addEventListener("click", () => {
    searchInput.value = "";  // Очищуємо поле пошуку
    fetchAirplanes();  // Викликаємо без параметрів, щоб отримати всі літаки
});

sortDropdown.addEventListener('change', async (event) => {
    const sortby = event.target.value;
    
    try {
        const response = await fetch(`http://localhost:3000/api/airplanes?sortby=${sortby}`, { cache: 'no-store' });
        const sortedPlanes = await response.json();
        renderCards(sortedPlanes);
    } catch (error) {
        console.error('Error fetching sorted airplanes:', error);
    }
});




function openModal(item) {
    const modal = document.getElementById("editModal");
    modal.style.display = "block";
    document.getElementById("model").value = item.model;
    document.getElementById("countOfPassanger").value = item.countOfPassanger;
    document.getElementById("price").value = item.price;

    document.getElementById("saveChanges").onclick = function () {
        if (document.getElementById("countOfPassanger").value < 0 || document.getElementById("price").value < 0) {
            alert("Enter positive values");
            return;
        }
        updateAirplane(item.id);
        modal.style.display = "none";
    };

    document.querySelector('.close').onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
function updateAirplane(id) {
    const updatedModel = document.getElementById("model").value;
    const updatedCount = parseInt(document.getElementById("countOfPassanger").value);
    const updatedPrice = parseFloat(document.getElementById("price").value);

    fetch(`http://localhost:3000/api/airplanes/${id}`, {  // Додано /api перед airplanes
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: updatedModel, countOfPassanger: updatedCount, price: updatedPrice })
    })
        .then(response => response.json())
        .then(() => fetchAirplanes())
        .catch(error => console.error('Error updating airplane:', error));
}


function deleteAirplane(id) {
    fetch(`http://localhost:3000/api/airplanes/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => fetchAirplanes())
        .catch(error => console.error('Error deleting airplane:', error));
}

document.getElementById("submitButton").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const price = parseFloat(document.getElementById("priceInput").value.trim());
    const countOfPassanger = parseInt(document.getElementById("pasInput").value.trim());

    if (!name || isNaN(price) || price <= 0 || isNaN(countOfPassanger) || countOfPassanger <= 0) {
        alert("Please enter valid details");
        return;
    }

    fetch('http://localhost:3000/api/airplanes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: name, countOfPassanger, price })
    })
        .then(response => response.json())
        .then(() => {
            document.getElementById("nameInput").value = "";
            document.getElementById("priceInput").value = "";
            document.getElementById("pasInput").value = "";
            fetchAirplanes();
        })
        .catch(error => console.error('Error adding airplane:', error));
});

// Initial fetch to populate the list
fetchAirplanes();
