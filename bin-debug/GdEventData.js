var GdEventData = (function () {
    function GdEventData() {
        this._data = null;
    }
    var d = __define,c=GdEventData,p=c.prototype;
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
    return GdEventData;
}());
egret.registerClass(GdEventData,'GdEventData');
//# sourceMappingURL=GdEventData.js.map