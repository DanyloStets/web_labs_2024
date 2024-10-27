const searchButton = document.getElementById("searchButton");
const findButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const itemCard = document.getElementById("dataDisplay");
const clearButton = document.getElementById("clearButton");
const sortDropdown = document.getElementById("sortDropdown");

let airplanes = [
    {
        countOfPassanger: 20,
        model: "Boieng 720",
        price: 12000000,
        id:1
    },
    {
        countOfPassanger: 12,
        model: "Boieng 560",
        price: 80000,
        id:2
    },
    {
        countOfPassanger: 120,
        model: "Boieng 737",
        price: 35000000,
        id:3
    },
    {
        countOfPassanger: 160,
        model: "Boieng 777",
        price: 50000000,
        id:4
    },
    {
        countOfPassanger: 90,
        model: "Boieng 767",
        price: 26000000,
        id:5
    },
    {
        countOfPassanger: 6,
        model: "AmericanAirBus 566",
        price: 6000000,
        id:6
    },
];

function priceOfPlanes(data){
    const priceDiv = document.getElementById("count-block");
    priceDiv.innerHTML = '';
    let price = 0;
    for(let i = 0; i<data.length; i++){
        price += data[i].price;
    }
    const totalPrice = `
    <p class='card-total'>Total airplanes price: ${price}</p> 
  `
    priceDiv.insertAdjacentHTML("beforeend", totalPrice);
}

function placeCard(data){
    const card_body = document.getElementById("dataDisplay");
    card_body.innerHTML = '';
    data.forEach(item => {
        const row = `
    <li class="item_card">
        <img src="img/boeing737.jpeg" alt="card-img">
        <div class="card-content">
            <h3>${item.model}</h3>
            <p class="pages">Count of passanger: <strong> ${item.countOfPassanger} </strong> </p>
            <p class="price">Price: <strong> ${item.price} dollars</strong> </p>
            <button>Edit element</button>
        </div>
    </li>
`;
    card_body.insertAdjacentHTML('beforeend', row);
    });
}

placeCard(airplanes);
priceOfPlanes(airplanes);
sortAirplanes(airplanes);

function renderCards(items){
    itemCard.innerHTML = '';
    placeCard(items);
};

findButton.addEventListener("click", ()=> {
    const searchValue = searchInput.value.toLowerCase().trim();  
    const findAirplanes = airplanes.filter(plane => plane.model.toLowerCase().includes(searchValue));  
    renderCards(findAirplanes);
    priceOfPlanes(findAirplanes);
    sortAirplanes(findAirplanes);
});


clearButton.addEventListener("click", ()=>{
    renderCards(airplanes);
    priceOfPlanes(airplanes);
    sortAirplanes(airplanes);
    searchInput.value = "";
})

function sortAirplanes(data) {
    placeCard(data);
    sortDropdown.addEventListener('change', (event) => {
        const sortby = event.target.value;
        let sortedPlanes;

        if (sortby === 'name') {
            sortedPlanes = [...data].sort((a, b) => a.model.localeCompare(b.model));
        } else if (sortby === 'price') {
            sortedPlanes = [...data].sort((a, b) => a.price - b.price);
        }
        placeCard(sortedPlanes);
    });
}
