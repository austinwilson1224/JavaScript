class Point {
    constructor(private _x: number, private _y: number) {}

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value: number) {
        if (value < 0) throw new Error("value must be greater than 0");

        this._x = value;
    }
    set y(value: number) {
        if (value < 0) throw new Error("value must be greater than 0");

        this._y = value;

    }
}

let point = new Point(1,2);
console.log(point.x);
point.y;