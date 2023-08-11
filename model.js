let booksDb = require('./db');

class Bookmodel {
    constructor({title,author,description}){
        this.title = title;
        this.author = author;
        this.description = description;
    }
    save(){
        booksDb.push(this);
        return this;
    }

    static all(){
        return booksDb
        }

    static update(updateInfo ={}){

        booksDb = booksDb.map(bank => {
            if(book.name === updateInfo.name){
                return{...book,...updateInfo}
            }
            return book
        })
    }

    static delete({name}){
        let deletedBook = null
       booksDb = booksDb.filter(book=>{
            if(book.name !== name){
               
                return true;
            }
            deletedBook = book;
            return false;
        })
        return deletedBook;
    }
}

module.exports = Bookmodel