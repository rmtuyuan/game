var Img = (function (_super) {
    __extends(Img, _super);
    function Img(src) {
        _super.call(this);
        this.width = 425;
        this.height = 327;
        this.source = RES.getRes(src);
    }
    var d = __define,c=Img,p=c.prototype;
    return Img;
}(eui.Image));
egret.registerClass(Img,'Img');
//# sourceMappingURL=Img.js.map