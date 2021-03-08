var Like = /** @class */ (function () {
    function Like(_count) {
        if (_count === void 0) { _count = 0; }
        this._count = _count;
    }
    Object.defineProperty(Like.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    Like.prototype.like = function () {
        this._count++;
    };
    return Like;
}());
var like = new Like(5);
like.like();
like.like();
console.log(like.count);
