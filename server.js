const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;
const MONGODB_URI = 'mongodb://127.0.0.1/ecommerce';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Routes
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
