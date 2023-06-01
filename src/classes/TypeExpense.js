
export class TypeExpense {
    

    /** @type {String} */
    type
    
    /** @type {number} */
    totalAmount

    /** @type {Array} */
    expensesArray

 


    constructor(type){
        this.type = type
        this.expensesArray = []
    }

    addExpense(expense) {
      
        this.expensesArray.push(expense)
       
    }

    getTypeTotal(type){
        let x = 0
        this.expensesArray.forEach(e => x += e.amount)
        return x
    }

    getTypes(){
        let x = this.expensesArray
        x = new Set(this.expensesArray.map(e => e.type))
        return x
    }

}

