const express = require('express');

const app = express()
const cors = require('cors');

app.use(cors());

const countries = [
    {
        name: 'Brazil',
        flag: 'brazil.svg',
        gdp: '$43,500.90',
    },
    {
        name: 'Egypt',
        flag: 'egypt.svg',
        gdp: '$80,300.75',
    },
    {
        name: 'Canada',
        flag: 'canada.svg',
        gdp: '$60,000',
    },
    {
        name: 'United Kingdom',
        flag: 'united_kingdom.svg',
        gdp: '$90,000.45',
    },
]

//middleware
app.use("/images/flags", express.static('images/flags'))

app.get('/', (req, res)=>{
    res.send('running successfully!')
})

// get all countries
app.get('/api/get-countries', (req, res)=>{
    res.json(countries)
})
// PORT
const port = process.env.PORT || 8000
app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`);
});