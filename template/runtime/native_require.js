
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/Btn_lf.js",
	"bin-debug/Btn_rt.js",
	"bin-debug/DataInterface/GdChoiceDataInterface.js",
	"bin-debug/DataInterface/GdConditionDataInterface.js",
	"bin-debug/DataInterface/GdDieDataInterface.js",
	"bin-debug/DataInterface/GdDieconditionDataInterface.js",
	"bin-debug/DataInterface/GdEventDataInterface.js",
	"bin-debug/DataInterface/GdPlotDataInterface.js",
	"bin-debug/DataInterface/GdTextDataInterface.js",
	"bin-debug/Die_img.js",
	"bin-debug/Game.js",
	"bin-debug/GdChoiceData.js",
	"bin-debug/GdConditionData.js",
	"bin-debug/GdDieData.js",
	"bin-debug/GdDieconditionData.js",
	"bin-debug/GdEventData.js",
	"bin-debug/GdPlotData.js",
	"bin-debug/Img.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/StartUI.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/manager/DataManager.js",
	"bin-debug/text.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 650,
		contentHeight: 950,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};