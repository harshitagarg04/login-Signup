const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignup")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })



const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const collection = new mongoose.model("LogInCollection", LogInSchema)

module.exports = collection






// Another way to connect mongoDB
// let DbConnect = async () => {
//     try {
//         let conn = await mongoose.connect('mongodb://127.0.0.1:27017/LoginSignup');
//         console.log("Connected")
//     } catch {
//         console.log("not connect")
//     }
// }
// module.exports = DbConnect