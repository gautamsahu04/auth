const mongoose = require('mongoose');

try {
    mongoose.connect(`${process.env.MONGODB_URL}/authTest`)           //(`${process.env.MONGODB_URL}/authDb`)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
} catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
}
