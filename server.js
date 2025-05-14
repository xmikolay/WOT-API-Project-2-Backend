const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const favoritesRoutes = require('./routes/favorites');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/favorites', favoritesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));