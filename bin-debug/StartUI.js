var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        _super.call(this);
        this.skinName = "resource/skins/startUISkin.exml";
        this.playGame.touchEnabled = true;
        this.playGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_play, this, true);
    }
    var d = __define,c=StartUI,p=c.prototype;
    StartUI.getInstance = function () {
        if (StartUI._instance == null) {
            StartUI._instance = new StartUI();
        }
        return StartUI._instance;
    };
    p.onclick_play = function () {
        this.parent.addChild(Game.getInstance());
        this.parent.removeChild(this);
    };
    StartUI._instance = null;
    return StartUI;
}(eui.Component));
egret.registerClass(StartUI,'StartUI');
//# sourceMappingURL=StartUI.js.map