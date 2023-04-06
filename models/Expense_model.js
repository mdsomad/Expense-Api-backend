const mongoose = require('mongoose');



const ExpenseSchma =  new mongoose.Schema({

    id:{
        type:Number, 
        required:[true,"Please enter a id"],
    },

    title:{
        type:String, 
        required:[true,"Please enter a title"],
    },


    price:{
        type:Number, 
        required:[true,"Please enter a price"],
    },

    date:{
        type: Date, 
        default:Date.now
    },
    
    
})





//*collection name User
const ExpenseModel = mongoose.model("UserExpense",ExpenseSchma);



module.exports = ExpenseModel;