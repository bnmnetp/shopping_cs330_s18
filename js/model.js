class Item {
    constructor(name, quantity, priority, store, section, price) {
        this.name = name;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;

        this.purchased = false;

    }
}


class ShoppingList{
    constructor() {
        this.newItems = []
        this.oldItems = [];
    }

    addItem(it) {
        this.newItems.push(it)
    }
}

