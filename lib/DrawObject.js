function DrawObject(document, positionX, positionY, color, opacity) {
    opacity = opacity || 1;
    this.document = document;
    this.positionX = positionX;
    this.positionY = positionY;
    this.opacity = opacity;
    this.color = color;
}

DrawObject.prototype.draw = function() {
    console.log("Empty draw");
};

function Rectangle(document, width, height, positionX, positionY, color, opacity) {
    DrawObject.call(this, document, positionX, positionY, color, opacity);
    this.width = width;
    this.height = height;
    this.fabricRect = new fabric.Rect();
    this.fabricRect.set({ width: this.width, height: this.height, fill: color, opacity: opacity});
}

// Circle derives from Shape
Rectangle.prototype = Object.create(DrawObject.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.draw = function() {
    console.log("here");
    this.document.add(this.fabricRect);
};

function Circle(document, radius, positionX, positionY, color, opacity) {
    DrawObject.call(this, document, positionX, positionY, color, opacity);
    this.radius = radius;
    this.fabricCircle = new fabric.Circle({ radius: radius, fill: '#f55', top: positionY, left: positionX })
}

// Circle derives from Shape
Circle.prototype = Object.create(DrawObject.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("here");
    this.document.add(this.fabricCircle);
};