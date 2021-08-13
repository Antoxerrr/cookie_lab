class Upgrade {

    element = null;

    constructor(name, multiplier, price) {
        this.name = name;
        this.multiplier = multiplier;
        this.price = price;
    }

    setElement(element) {
        this.element = element;
    }

}