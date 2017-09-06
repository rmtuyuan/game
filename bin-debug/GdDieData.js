var GdDieData = (function () {
    function GdDieData() {
        this._data = null;
    }
    var d = __define,c=GdDieData,p=c.prototype;
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
    return GdDieData;
}());
egret.registerClass(GdDieData,'GdDieData');
//# sourceMappingURL=GdDieData.js.map