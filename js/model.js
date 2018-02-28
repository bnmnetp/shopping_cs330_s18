'use strict';
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

class Subject {
 
    constructor() {
        this.handlers = []
    }

    subscribe(fn, selfobj) {
            this.handlers.push({fn: fn, selfobj:selfobj});
        }
     
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
     
    publish(msg, someobj) {
        var scope = someobj || window;
        for (let obj of this.handlers) {
            obj.fn(scope, msg, obj.selfobj)
        }
    }
}


class ShoppingList extends Subject {
    constructor() {
        super()
        this.newItems = []
        this.oldItems = [];
    }

    addItem(it) {
        this.newItems.push(it)
        this.publish('newitem', this)
    }
}

