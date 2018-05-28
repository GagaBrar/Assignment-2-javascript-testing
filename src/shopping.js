describe("Cart", () => {

    it("Should buy me new itme", () => {
        const cart = new Cart();

        cart.scan(4)
        expect(cart.items()).toEqual([4])
    
        cart.scan(5)
        expect(cart.items()).toEqual([4, 5])
      })

      it("Should allow me to buy 5 only", () => {
        const cart = new Cart([1,2,3,4]);
    
        expect(cart.items()).toEqual([1,2,3,4])
      })

      it("no more things buddy!!", () => {
        const cart = new Cart();
        cart.scan(1)
        cart.scan(2)
        cart.scan(3)
        cart.scan(4)
        cart.scan(5)
   
    
        expect(cart.scan(6)).toBe("oops!!!!! error.")
      })

      it("Should not allow more to buy", () => {
        const cart = new Cart();
        cart.scan(1)
        cart.scan(2)
        cart.scan(3)
       
        expect(cart.items()).toEqual([1,2])
    
      })

      it("Should tell that tehre is nothing in the cart", () => {
        const cart = new Cart();
        
        expect(cart.remove()).toBe("buy something buddy!!.")
      })
})
