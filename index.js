const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
const dishesRoutes = require('./routers/dishesRoutes');
const cartRoutes = require('./routers/cartRoutes');
const authRoutes = require('./routers/authRoutes');




app.use('/api/restaurants', require('./routers/restaurantRoutes'));
app.use('/api/restaurants', dishesRoutes);
app.use('/api', cartRoutes);
app.use('/api/auth', authRoutes);



const PORT = 8081;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



// server
// ├── config
// │   └── db.js
// ├── controllers
// │   └── restaurantController.js
// ├── models
// │   └── restaurantModel.js
// ├── routers
// │   └── restaurantRoutes.js
// ├── app.js
// └── package.json
