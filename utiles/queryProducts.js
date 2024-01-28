class queryProducts {
    products = []
    query = {}
    constructor(products,query){
        this.products = products
        this.query = query
    }

    categoryQuery = () => {
        this.products = this.query.category ? this.products.filter(c => c.category === this.query.category) : this.products
        return this
    }

    ratingQuery = () => {
        this.products = this.query.rating ? this.products.filter(c => parseInt(this.query.rating) <= c.rating && c.rating < parseInt(this.query.rating) + 1) : this.products
        return this
    }






}

module.exports = queryProducts