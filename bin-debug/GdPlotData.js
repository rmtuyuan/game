var GdPlotData = (function () {
    function GdPlotData() {
        this._data = null;
    }
    var d = __define,c=GdPlotData,p=c.prototype;
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
    return GdPlotData;
}());
egret.registerClass(GdPlotData,'GdPlotData');
//# sourceMappingURL=GdPlotData.js.map