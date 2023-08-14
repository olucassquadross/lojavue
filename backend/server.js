const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/Order');

const app = express();

// String de conexão do MongoDB Atlas
const connectionString = 'mongodb+srv://olucasquadros:YF4as45GkRKctgwn@cluster0.ur5p8vc.mongodb.net/ecommerce?retryWrites=true&w=majority';

// Conexão com o MongoDB Atlas
mongoose.connect(connectionString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Could not connect to MongoDB Atlas', err));

app.use(cors());
app.use(bodyParser.json());

// Rota para salvar o pedido
app.post('/order', async (req, res) => {
    const order = new Order({
        items: req.body
    });

    try {
        await order.save();
        res.send('Venda concluída!');
    } catch (err) {
        res.status(400).send('Erro ao salvar o pedido.');
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
