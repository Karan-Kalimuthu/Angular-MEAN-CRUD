const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Karan:apple@cluster0.gjgop.mongodb.net/CrudDB', (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded!..');
    } else {
        console.log('Error in DB Connection :' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;