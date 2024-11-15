const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let airplanes = [
    { id: 1, countOfPassanger: 20, model: "Boieng 720", price: 12000000 },
    { id: 2, countOfPassanger: 12, model: "Boieng 560", price: 80000 },
    { id: 3, countOfPassanger: 120, model: "Boieng 737", price: 35000000 },
    { id: 4, countOfPassanger: 160, model: "Boieng 777", price: 50000000 },
    { id: 5, countOfPassanger: 90, model: "Boieng 767", price: 26000000 },
    { id: 6, countOfPassanger: 6, model: "AmericanAirBus 566", price: 6000000 },
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/airplanes/search', (req, res) => {
    const { search } = req.query;
    let filteredPlanes = [...airplanes];

    if (search) {
        const searchLower = search.toLowerCase();
        filteredPlanes = filteredPlanes.filter(plane =>
            plane.model.toLowerCase().includes(searchLower)
        );
    }

    console.log('Filtered planes by search:', filteredPlanes);  // Лог результату пошуку

    res.set('Cache-Control', 'no-store');
    res.json(filteredPlanes);
});

// Отримати всі літаки з можливістю сортування
app.get('/api/airplanes', (req, res) => {
    const { sortby } = req.query;
    let sortedPlanes = [...airplanes];

    if (sortby === 'name') {
        sortedPlanes.sort((a, b) => a.model.localeCompare(b.model));
    } else if (sortby === 'price') {
        sortedPlanes.sort((a, b) => a.price - b.price);
    }

    res.set('Cache-Control', 'no-store');
    res.json(sortedPlanes);
});


app.get('/api/airplanes/:id', (req, res) => {
    const airplane = airplanes.find(a => a.id === parseInt(req.params.id));
    airplane ? res.json(airplane) : res.status(404).send('Airplane not found');
});

// Створити новий літак
app.post('/api/airplanes', (req, res) => {
    const newAirplane = { ...req.body, id: airplanes.length + 1 };
    airplanes.push(newAirplane);
    res.status(201).json(newAirplane);
});


app.put('/api/airplanes/:id', (req, res) => {
    const airplane = airplanes.find(a => a.id === parseInt(req.params.id));
    if (airplane) {
        airplane.model = req.body.model;
        airplane.countOfPassanger = req.body.countOfPassanger;
        airplane.price = req.body.price;
        res.json(airplane);
    } else {
        res.status(404).send('Airplane not found');
    }
});

// Видалити літак
app.delete('/api/airplanes/:id', (req, res) => {
    const index = airplanes.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        const deletedAirplane = airplanes.splice(index, 1);
        res.json(deletedAirplane);
    } else {
        res.status(404).send('Airplane not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
