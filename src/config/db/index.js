const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/error_education_dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
        );
        console.log('Connect successfully');
    } catch (error) {
        console.log('Failed');
    }
}

module.exports = { connect };
