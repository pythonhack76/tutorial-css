class Pizza {

    constructor(pizzaSize) {
       // this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
       // this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust; 
    }

    // getToppings() {
    //     return this.toppings;
    // }

    // setToppings(topping){
    //     this.toppings.push(topping);
    // }
    // bake() {
    //     console.log(`Cottura a ${this.size}  ${this.type} ${this.crust} crust pizza`);
    // }
}

// const myPizza = new Pizza("mozzarella", "small");
// myPizza.setCrust("thin"); 
// myPizza.type = "supreme";
// myPizza.bake(); 
// myPizza.setToppings("sausage");
// myPizza.setToppings("capperi");
// console.log(myPizza.getToppings());

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices. `);
    }
}
const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();