// TypeScript file

/**
 * DataManager
 */
interface RawData {
    gd_event:any,
    gd_choice:any;
    gd_condition:any;
    gd_plot:any;
    gd_die:any;
    gd_diecondition:any;
};

class DataManager {
    private _dataGdevent:{[name:number]:GdEventData} ={};

    public static _ins:DataManager = null;
    
    public static getInstance():DataManager {
        if (DataManager._ins == null) {
            DataManager._ins = new DataManager();
        }
        return DataManager._ins;
    }

    constructor() {
        this.init_event();
        this.init_choice();
        this.init_condition();
        this.init_plot();
        this.init_die();
        this.init_diecondition();
    }
//event
    public getGdEventData():{[name:number]:GdEventData} {
        return this._dataGdevent;
    }


    private init_event():void
    {
        let rawData:RawData = RES.getRes("data_json");
        this.loadGdEvent(rawData.gd_event);
        rawData = null;
    }

    private loadGdEvent(gd_event:any) {
        let dict:{[name:number]:GdEventData} = {};
        for (let key in gd_event)
        {
            let ruleObj:GdEventData = new GdEventData();
            ruleObj.key = gd_event[key].sid;
            ruleObj.data = gd_event[key];
            dict[ruleObj.key] = ruleObj;
        }
        this._dataGdevent = dict;
    }

    //choice
    private _dataGdchoice:{[name:number]:GdChoiceData}={};
    private init_choice():void{
        let rawData_choice:RawData = RES.getRes("data_json");
        this.loadGdChoice(rawData_choice.gd_choice);
        rawData_choice = null;

    }
    private loadGdChoice(gd_choice:any) {
        let dict2:{[name:number]:GdChoiceData} = {};
        for (let key in gd_choice)
        {
            let ruleObj2:GdChoiceData = new GdChoiceData();
            ruleObj2.key = gd_choice[key].choiceID;
            ruleObj2.data = gd_choice[key];
            dict2[ruleObj2.key] = ruleObj2;
        }
        this._dataGdchoice = dict2;
    }
      public getGdChoiceData():{[name:number]:GdChoiceData} {
        return this._dataGdchoice;
    }
    //condition
    private _dataGdCondition:{[name:number]:GdConditionData}={};
    private init_condition():void{
        let rawData_condition:RawData = RES.getRes("data_json");
        this.loadGdCondition(rawData_condition.gd_condition);
        rawData_condition = null;

    }
    private loadGdCondition(gd_condition:any) {
        let dict3:{[name:number]:GdConditionData} = {};
        for (let key in gd_condition)
        {
            let ruleObj3:GdConditionData = new GdConditionData();
            ruleObj3.key = gd_condition[key].conditionId;
            ruleObj3.data = gd_condition[key];
            dict3[ruleObj3.key] = ruleObj3;
        }
        this._dataGdCondition = dict3;
    }
      public getGdConditionData():{[name:number]:GdConditionData} {
        return this._dataGdCondition;
    }
    //plot
    private _dataGdPlot:{[name:number]:GdPlotData} ={};
    private init_plot():void{
        let rawData_plot:RawData=RES.getRes("data_json");
        this.loatGdPlotData(rawData_plot.gd_plot);
        rawData_plot=null;
        

    }
    private loatGdPlotData(gd_plot:any){
        let dict4:{[name:number]:GdPlotData} ={};
          for (let key in gd_plot)
        {
            let ruleObj4:GdPlotData = new GdPlotData();
            ruleObj4.key = gd_plot[key].plot_id;
            ruleObj4.data = gd_plot[key];
            dict4[ruleObj4.key] = ruleObj4;
        }
        this._dataGdPlot = dict4;

    }
      public getGdPlotData():{[name:number]:GdPlotData} {
        return this._dataGdPlot;
    }
    //die
    private _dataGdDie:{[name:number]:GdDieData} ={};
    private init_die():void{
        let rawData_die:RawData=RES.getRes("data_json");
        this.loatGdDieData(rawData_die.gd_die);
        rawData_die=null;
        

    }
    private loatGdDieData(gd_die:any){
        let dict5:{[name:number]:GdDieData} ={};
          for (let key in gd_die)
        {
            let ruleObj4:GdDieData = new GdDieData();
            ruleObj4.key = gd_die[key].die_id;
            ruleObj4.data = gd_die[key];
            dict5[ruleObj4.key] = ruleObj4;
        }
        this._dataGdDie = dict5;

    }
      public getGdDieData():{[name:number]:GdDieData} {
        return this._dataGdDie;
    }
    //diecondition
      private _dataGdDiecondition:{[name:number]:GdDieconditionData} ={};
    private init_diecondition():void{
        let rawData_diecondition:RawData=RES.getRes("data_json");
        this.loatGdDieconditionData(rawData_diecondition.gd_diecondition);
        rawData_diecondition=null;
        

    }
    private loatGdDieconditionData(gd_die:any){
        let dict5:{[name:number]:GdDieconditionData} ={};
          for (let key in gd_die)
        {
            let ruleObj4:GdDieconditionData = new GdDieconditionData();
            ruleObj4.key = gd_die[key].conditionId;
            ruleObj4.data = gd_die[key];
            dict5[ruleObj4.key] = ruleObj4;
        }
        this._dataGdDiecondition = dict5;

    }
      public getGdDieconditionData():{[name:number]:GdDieconditionData} {
        return this._dataGdDiecondition;
    }
}