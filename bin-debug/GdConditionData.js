var GdConditionData = (function () {
    function GdConditionData() {
        this._data = null;
    }
    var d = __define,c=GdConditionData,p=c.prototype;
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
    return GdConditionData;
}());
egret.registerClass(GdConditionData,'GdConditionData');
//# sourceMappingURL=GdConditionData.js.map