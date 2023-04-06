const ExpenseModel = require('../models/Expense_model');



exports.expenseAdd = async(req,resp)=>{

      try {

        const {id,title,price,date} = req.body

        userexpnsadd = await ExpenseModel.create(
        {   id,
            title,
            price,
            date
        }
        )
        resp.status(201).json({status:true, message:"Expens Add Successfully",UserExpns:userexpnsadd})
        
      } catch (error) {

            resp.status(500).json({ status:false, message:`Server Error ${error.message}`});

      }


}







exports.getExpnse = async(req,resp)=>{

    try {

        GetAllExpnse = await ExpenseModel.find();

        resp.status(200).json(GetAllExpnse)
        
        
    } catch (error) {

         resp.status(500).json({ status:false, message:`Server Error ${error.message}`});

    }
    
}






exports.expnseDelete = async(req,resp)=>{

    try {


        Expnsefind = await ExpenseModel.findOne(req.params);


        if(!Expnsefind){
            return resp.status(404).json({ status:false, message: "Expnse not found "})
        }


         ExpnseDelete = await ExpenseModel.deleteOne(req.params);


        resp.status(200).json({status:true, message:"Expens delete Successfully",ExpnseDelete})  
        
        
    } catch (error) {

         resp.status(500).json({ status:false, message:`Server Error ${error.message}`});

    }
    
}

