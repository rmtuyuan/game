// TypeScript file
;
var DataManager = (function () {
    function DataManager() {
        this._dataGdevent = {};
        //choice
        this._dataGdchoice = {};
        //condition
        this._dataGdCondition = {};
        //plot
        this._dataGdPlot = {};
        //die
        this._dataGdDie = {};
        //diecondition
        this._dataGdDiecondition = {};
        this.init_event();
        this.init_choice();
        this.init_condition();
        this.init_plot();
        this.init_die();
        this.init_diecondition();
    }
    var d = __define,c=DataManager,p=c.prototype;
    DataManager.getInstance = function () {
        if (DataManager._ins == null) {
            DataManager._ins = new DataManager();
        }
        return DataManager._ins;
    };
    //event
    p.getGdEventData = function () {
        return this._dataGdevent;
    };
    p.init_event = function () {
        var rawData = RES.getRes("data_json");
        this.loadGdEvent(rawData.gd_event);
        rawData = null;
    };
    p.loadGdEvent = function (gd_event) {
        var dict = {};
        for (var key in gd_event) {
            var ruleObj = new GdEventData();
            ruleObj.key = gd_event[key].sid;
            ruleObj.data = gd_event[key];
            dict[ruleObj.key] = ruleObj;
        }
        this._dataGdevent = dict;
    };
    p.init_choice = function () {
        var rawData_choice = RES.getRes("data_json");
        this.loadGdChoice(rawData_choice.gd_choice);
        rawData_choice = null;
    };
    p.loadGdChoice = function (gd_choice) {
        var dict2 = {};
        for (var key in gd_choice) {
            var ruleObj2 = new GdChoiceData();
            ruleObj2.key = gd_choice[key].choiceID;
            ruleObj2.data = gd_choice[key];
            dict2[ruleObj2.key] = ruleObj2;
        }
        this._dataGdchoice = dict2;
    };
    p.getGdChoiceData = function () {
        return this._dataGdchoice;
    };
    p.init_condition = function () {
        var rawData_condition = RES.getRes("data_json");
        this.loadGdCondition(rawData_condition.gd_condition);
        rawData_condition = null;
    };
    p.loadGdCondition = function (gd_condition) {
        var dict3 = {};
        for (var key in gd_condition) {
            var ruleObj3 = new GdConditionData();
            ruleObj3.key = gd_condition[key].conditionId;
            ruleObj3.data = gd_condition[key];
            dict3[ruleObj3.key] = ruleObj3;
        }
        this._dataGdCondition = dict3;
    };
    p.getGdConditionData = function () {
        return this._dataGdCondition;
    };
    p.init_plot = function () {
        var rawData_plot = RES.getRes("data_json");
        this.loatGdPlotData(rawData_plot.gd_plot);
        rawData_plot = null;
    };
    p.loatGdPlotData = function (gd_plot) {
        var dict4 = {};
        for (var key in gd_plot) {
            var ruleObj4 = new GdPlotData();
            ruleObj4.key = gd_plot[key].plot_id;
            ruleObj4.data = gd_plot[key];
            dict4[ruleObj4.key] = ruleObj4;
        }
        this._dataGdPlot = dict4;
    };
    p.getGdPlotData = function () {
        return this._dataGdPlot;
    };
    p.init_die = function () {
        var rawData_die = RES.getRes("data_json");
        this.loatGdDieData(rawData_die.gd_die);
        rawData_die = null;
    };
    p.loatGdDieData = function (gd_die) {
        var dict5 = {};
        for (var key in gd_die) {
            var ruleObj4 = new GdDieData();
            ruleObj4.key = gd_die[key].die_id;
            ruleObj4.data = gd_die[key];
            dict5[ruleObj4.key] = ruleObj4;
        }
        this._dataGdDie = dict5;
    };
    p.getGdDieData = function () {
        return this._dataGdDie;
    };
    p.init_diecondition = function () {
        var rawData_diecondition = RES.getRes("data_json");
        this.loatGdDieconditionData(rawData_diecondition.gd_diecondition);
        rawData_diecondition = null;
    };
    p.loatGdDieconditionData = function (gd_die) {
        var dict5 = {};
        for (var key in gd_die) {
            var ruleObj4 = new GdDieconditionData();
            ruleObj4.key = gd_die[key].conditionId;
            ruleObj4.data = gd_die[key];
            dict5[ruleObj4.key] = ruleObj4;
        }
        this._dataGdDiecondition = dict5;
    };
    p.getGdDieconditionData = function () {
        return this._dataGdDiecondition;
    };
    DataManager._ins = null;
    return DataManager;
}());
egret.registerClass(DataManager,'DataManager');
//# sourceMappingURL=DataManager.js.map