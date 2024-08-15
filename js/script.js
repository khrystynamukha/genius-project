class CircleBox {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide () {
        this.$el.style.display = "none";
    }

    show () {
        this.$el.style.display = "block";
    }
}

class CircleItem extends CircleBox {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = options.size + "px";
        this.$el.style.height = options.size + "px";
        this.$el.style.borderRadius = "50%";
        this.$el.style.backgroundColor = options.color;
    }
}

const circleRed = new CircleItem({
    selector: "#circleRed", 
    color: "red",
    size: 50,
})

const circlePink = new CircleItem({
    selector: "#circlePink", 
    color: "pink",
    size: 80,
})

const circleOrange = new CircleItem({
    selector: "#circleOrange", 
    color: "orange",
    size: 30,
})