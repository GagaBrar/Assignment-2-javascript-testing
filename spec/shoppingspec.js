
class Cart {
    constructor(products) {
      if(products) {
        this.products = products.slice(0,5)
      } else {
        this.products = []
      }
    }
  
    scan(product) {
      if(this.products.length < 5) {
        this.products.push(product) 
      } else {
        return "nothing  more to buy now!!."
      }
    }
  
    remove(product) {
      if (this.products.length <= 1) {
        return "buy something plz!!!."
      } else {
        this.products.pop()
      }
    }
  
    items() {
      return this.products
    }
  }

