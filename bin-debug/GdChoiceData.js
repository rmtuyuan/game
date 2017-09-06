var GdChoiceData = (function () {
    function GdChoiceData() {
        this._data = null;
    }
    var d = __define,c=GdChoiceData,p=c.prototype;
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
    return GdChoiceData;
}());
egret.registerClass(GdChoiceData,'GdChoiceData');
//# sourceMappingURL=GdChoiceData.js.map