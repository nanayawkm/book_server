const Bookmodel = require ("./model")
//controllers
const listbookController = function (req,res){
    //list all banks
    const books = Bookmodel.all();
    res.json({data:books});

}
const createbookController = function (req,res){
    const {title,author,description} = req.body;

    const book = new Bookmodel({title,author,description});
     
    book.save();

    res.json({message:"create successful",data:book});

}
const updatebookController = function (req,res){
    const {title,author,description} = req.body;

   const updatedBook = Bookmodel.update({title,author,description});
   
   res.json({message:"update successful", data:updatedBook})
}
const deleteBookController = function (req,res){
    const {name} = req.body
    const deletedBook =Bookmodel.delete({name})
    res.json({message:"delete successful", data:deletedBook})
}



module.exports = {
    listbookController,
    updatebookController,
    createbookController,
    deleteBookController
}