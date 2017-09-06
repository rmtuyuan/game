var GdDieconditionData = (function () {
    function GdDieconditionData() {
        this._data = null;
    }
    var d = __define,c=GdDieconditionData,p=c.prototype;
    d(p, "key"
        ,function () {
            return this._key;
        }
        ,function (v) {
            this._key = v;
        }
    );
    d(p, "data"
        ,function () {
            return this._data;
        }
        ,function (v) {
            this._data = v;
        }
    );
    return GdDieconditionData;
}());
egret.registerClass(GdDieconditionData,'GdDieconditionData');
//# sourceMappingURL=GdDieconditionData.js.map