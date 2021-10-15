class circle{
    constructor(radius){
        this.radius=radius;
    }

    getArea(){
        return 3.14 * this.radius * this.radius;
    }

    getDiameter(){
        return 2 * this.radius;
    }

    getCircumference(){
        return 2 * 3.14 * this.radius;
    }
}


const circle1= new circle(6);
console.log(circle1.getArea());
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());