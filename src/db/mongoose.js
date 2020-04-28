const mongoose = require('mongoose');
mongoose.connect(process.env.ConnectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:true
}
).then(r => { console.log("Connected Sucssesfully") }).catch(m => { console.log("Not Connected") })