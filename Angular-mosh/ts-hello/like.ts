class Like {
    constructor(private _count: number = 0) {}

    get count() {
        return this._count;
    }
    like() {
        this._count++;
    }
}

let like = new Like(5);
like.like();
like.like();
console.log(like.count);