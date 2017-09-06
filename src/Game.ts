// TypeScript file
/**
 *  Game ext
 */
class Game extends eui.Component {
    //play game
   private static _instance:Game=null;//游戏开始页面
   public static getInstance(){
       if(Game._instance==null){
           Game._instance=new Game();
       }
       return Game._instance;
   }
    //playagain
   public startEvent:number[];
   public key_level:string="最高级数";//本地储存的key
   public val_level:number=1;
   public key_title:string="最高称号";
   public val_title:string="小太监";


   public btn_left:eui.Group;//左按钮容器
   public btn_lf:Btn_left;
   public myTitle:eui.Label;//称号元素
   public myLevel:eui.Label;//级数元素
   public containerImg:eui.Group;//图片容器
   public contImg:Img;//事件图片
   public btn_right:eui.Group;//右按钮容器
   public btn_rt:Btn_right;
   public containerTxt:eui.Label;//事件描述
   public richs:eui.Label;
   public fans:eui.Label;
   public bood:eui.Label;
   public mei:eui.Label;
   public sid:number;//事件id
   public btn_lf_txt:string;
   public btn_rt_txt:string;
   public pre:number=0;//经验／级数
   public level:number=1;//级数
   //public sourcearr:any[]=RES.getRes('resource_json');


   public sourcearr:any;//储存事件
   public choices:any;//加载选择--
   public condition:any;//加载条件
   public plot:any;//加载剧情类型
   public dieArr:any;//加载死亡事件 
   public dieconditionArr:any;//加载死亡条件

   public gameTime:eui.Label;//游戏时间
   public gameYear:number;//年
   public gameMonth:number;//月
   public monthCount:number;//月计数
   public randSid:number;//事件ID 随机数
   public myAge:eui.Label;//年龄元素
   private agecount:number;//年龄数字
   //public timer:egret.Timer;//定时器
//游戏结束页面

  public gp_over:eui.Group; 
  public onclick_replay:eui.Group;//按钮容器
  //遮幕   
  public richs_mask:eui.Rect;
  public fans_mask:eui.Rect;
  public bood_mask:eui.Rect;
  public mei_mask:eui.Rect;
 //存活时间 
  public now_liveTime:eui.Label;
  public top_liveTime:eui.Label;
  public liveTime_year:number=0;
  public event_name:eui.Label;//显示事件名称 
  public event_name_text:string;
  public key_liveTime_year:string="年";
  public val_liveTime_year:number=0;
  public key_liveTime_month:string="月";
  public val_liveTime_month:number=0;


  public now_id;//保存当前ID
   public constructor() {
        super();
        this.skinName="resource/skins/StartSkin.exml";
        
        //console.log(this.sourcearr);
       // this.sourcearr=RES.getRes('resource_json');       
        this.init();
         //判断本地是否有数据   
        //调取本地数据
        if(egret.localStorage.getItem(this.key_level)&&egret.localStorage.getItem(this.key_title)){
            this.val_level=parseFloat(egret.localStorage.getItem(this.key_level));
            this.val_title=egret.localStorage.getItem(this.key_title);

        }else{
            egret.localStorage.setItem(this.key_level,this.val_level.toString());
            egret.localStorage.setItem(this.key_title,this.val_title);
        }

         if(egret.localStorage.getItem(this.key_liveTime_year)&&egret.localStorage.getItem(this.key_liveTime_month)){
            this.val_liveTime_year=parseFloat(egret.localStorage.getItem(this.key_liveTime_year));
            this.val_liveTime_month=parseFloat(egret.localStorage.getItem(this.key_liveTime_month));

        }else{
           
            egret.localStorage.setItem(this.key_liveTime_month,this.val_liveTime_month.toString());
            egret.localStorage.setItem(this.key_liveTime_year,this.val_liveTime_year.toString());
        }
    
    }
    //设置属性数组
    //private getSourceArr:any=['','January_json','February_json','March_json','April_json','May_json','June_json','July_json','August_json','September_json','October_json','November_json','December_json'];
   //已做过事件id
    private doneID:any={}; //做过事件id
    private btn_ID:any={};//做过决策id
    private e_plot:any={};//事件对应的剧情类型和类型表示 

    private init():void{
        this.startEvent=[1];//起始事件ID 
        this.richs=new eui.Label();
         this.fans=new eui.Label();
          this.bood=new eui.Label();
           this.mei=new eui.Label();
       //获取当前的 数据
        //this.sourcearr=RES.getRes('v5_event_json');//更新数据库
        this.sourcearr=DataManager.getInstance().getGdEventData();
        //console.log(this.sourcearr);
        //this.choices=RES.getRes('v5_choice_json');
        this.choices=DataManager.getInstance().getGdChoiceData();
        //console.log(this.choices)
        //this.condition=RES.getRes('v5_condition_json');
         this.condition=DataManager.getInstance().getGdConditionData();
        //this.plot=RES.getRes("v5_plot_json");
         this.plot=DataManager.getInstance().getGdPlotData();
        //this.dieArr=RES.getRes("v5_die_json");//加载死亡事件表
        this.dieArr=DataManager.getInstance().getGdDieData();
        //console.log(this.dieArr);
        this.dieconditionArr=DataManager.getInstance().getGdDieconditionData();
        //console.log(this.dieconditionArr);
        this.randSid=Math.floor(Math.random()*this.startEvent.length);
       
        this.sid=this.startEvent[this.randSid];//初始事件id随机
        this.now_id=this.sid;
        this.doneID[this.sid]=true;//做过事件ID
        this.event_plot();//把事件对应的剧情 和类型保存在 e_plot对象内
       
        this.level=1;//等级
        this.pre=0;//经验值

        this.gameYear=1;
        this.gameMonth=1;//618年1月
        this.agecount=14;//初始化年龄数字
        this.printTime();//绘制页面时间
        this.monthCount=0;//月数计数
        this.btn_lf=new Btn_left();
        this.btn_rt=new Btn_right();
        //初始化属性 称号值
        this.myLevel.text=this.level+"级";
        this.myTitle.text='小太监';
        this.richs.text='50';
        this.fans.text="50";
        this.bood.text="50";
        this.mei.text='50';
        //游戏结束页面隐藏
        this.gp_over.visible=false;
        //加载事件资源
      
        //绘制页面
        this.print();
        //为左右按钮添加touch事件
        this.btn_left.touchEnabled=true;
        this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leftTouch,this,true);
        this.btn_right.touchEnabled=true;
        this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rightTouch,this,true);
        this.btn_left.addChild(this.btn_lf);
        this.btn_right.addChild(this.btn_rt);
        this.onclick_replay.touchEnabled=true;
        this.onclick_replay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playagain,this,true);//再玩一次按钮
         //时间 年龄
        //this.timer=new egret.Timer(1000,0);
        //this.timer.addEventListener(egret.TimerEvent.TIMER,this.updateTime,this);//注册时间
        //this.timer.start();
         this.shuxingArr=[this.richs_mask,this.fans_mask, this.bood_mask,this.mei_mask];
      //判断 属性数值的大小 改变遮幕的颜色
      for(var i=0;i<this.shuxingArr.length;i++){
         if(this.shuxingArr[i].height>60){
            this.shuxingArr[i].fillColor=0x33E728;
         }else if(this.shuxingArr[i].height<=30){
             this.shuxingArr[i].fillColor=0xFB0000;
        }else{
            this.shuxingArr[i].fillColor=0xF7E60B;
        }

      }
        
    }
  private event_plot(){//把事件－－－剧情和类型
      
      for(var key in this.plot){
          var plot_eventArr=this.plot[key]._data.event_arr;
          for(var j=0;j<plot_eventArr.length;j++){
              this.e_plot[plot_eventArr[j]]=[key,this.plot[key]._data.plot_mark];
          }

      }

      return this.e_plot;

   }
    public conID;//条件满足的条件ID
    public plot_con=[];//条件ID对应事件剧情的对象
    private iscondition(conIDarr){
        var condition_ID=conIDarr;//数组
        var condition_cont;
        var condition_id;
        if(condition_ID.length>0&&condition_ID[0]>0){
             for(var i=0;i<condition_ID.length;i++){
                  condition_id=condition_ID[i];
                  condition_cont=this.condition[condition_id]._data;//条件对象
            if(this.isdonesid(condition_cont)&&this.isdonechoice(condition_cont)&&this.isgameTime(condition_cont)&&this.isage(condition_cont)&&this.islevel(condition_cont)&&this.isrichs(condition_cont)&&this.isfans(condition_cont)&&this.isbood(condition_cont)&&this.ismei(condition_cont)){
              
               return  this.conID=true;
            }
         }
            return this.conID=false;
        }else{

             return this.conID=true;
        }
       
       
    }
    private isdonesid(condition_cont):boolean{  

        if(condition_cont.donesid.length>0&&condition_cont.donesid[0]>0){
            var leng=condition_cont.donesid.length;
                for(var j=0;j<leng;j++){
                    if(!this.doneID[condition_cont.donesid[j]]){
                            return false
                    }
                }
                return true;
        }else{
            return true;
        }

    }
    private isdonechoice(condition_cont):boolean{  
        if(condition_cont.donechoice.length>0&&condition_cont.donechoice[0]>0){
            var choiceleng=condition_cont.donechoice.length;
                for(var j=0;j<choiceleng;j++){
                    if(!this.btn_ID[condition_cont.donechoice[j]]){
                            return false;
                    }
                }
                return true;
        }else{
            return true;
        }

    }
     private isgameTime(condition_cont):boolean{  
        if(condition_cont.gameTime.length>1){
            var timeleng=condition_cont.gameTime;
            if(this.liveTime_year>=timeleng[0]&&this.liveTime_year<=timeleng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
    private isage(condition_cont):boolean{  
        if(condition_cont.age.length>1){
            var ageleng=condition_cont.age;
            if(this.agecount>=ageleng[0]&&this.agecount<=ageleng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
    private islevel(condition_cont):boolean{  
        if(condition_cont.level.length>1){
            var levelleng=condition_cont.level;
            if(this.level>=levelleng[0]&&this.level<=levelleng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
     private isrichs(condition_cont):boolean{  
        if(condition_cont.richs.length>1){
            var richsleng=condition_cont.richs;
            if(parseInt(this.richs.text)>=richsleng[0]&&parseInt(this.richs.text)<=richsleng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
     private isfans(condition_cont):boolean{  
        if(condition_cont.fans.length>1){
            var fansleng=condition_cont.fans;
            if(parseInt(this.fans.text)>=fansleng[0]&&parseInt(this.fans.text)<=fansleng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
     private isbood(condition_cont):boolean{  
        if(condition_cont.bood.length>1){
            var boodleng=condition_cont.bood;
            if(parseInt(this.bood.text)>=boodleng[0]&&parseInt(this.bood.text)<=boodleng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
     private ismei(condition_cont):boolean{  
        if(condition_cont.mei.length>1){
            var meileng=condition_cont.mei;
            if(parseInt(this.mei.text)>=meileng[0]&&parseInt(this.mei.text)<=meileng[1]){
                return true;
            }else{
                return false;
            }
               
        }else{
            return true;
        }

    }
    private print_btn(btn){

        this.btn_ID[btn.choiceID]=true;
        this.richs.text=parseInt(this.richs.text)+btn.richs;
        this.fans.text=parseInt(this.fans.text)+btn.fans;
        this.bood.text=parseInt(this.bood.text)+btn.bood;
        this.mei.text=parseInt(this.mei.text)+btn.mei ;
        if(parseInt(this.richs.text)<=0){
            this.richs.text="0";
        }else if(parseInt(this.richs.text)>=100){
            this.richs.text="100";
        }
        if(parseInt(this.bood.text)<=0){
            this.bood.text="0";
        }else if(parseInt(this.bood.text)>=100){
            this.bood.text="100";
        }
        if(parseInt(this.fans.text)<=0){
            this.fans.text="0";
        }else if(parseInt(this.fans.text)>=100){
            this.fans.text="100";
        }
        if(parseInt(this.mei.text)<=0){
            this.mei.text="0";
        }else if(parseInt(this.mei.text)>=100){
            this.mei.text="100";
        }
        
        this.pre+=btn.pre;//经验值＋
        this.myAge.text=parseInt(this.myAge.text)+btn.age_pre;
        if(this.pre>=1){
            this.level+=Math.floor(this.pre);//经验值>1等级＋1
            this.myLevel.text=this.level+"级";   
            this.pre=0;
        }

    }
    
    private isPlot0(){

        if(this.e_plot[this.sid][1]==0){
            return true;
        }else{
            return false;
        }
    }
 

    private getSID(n:number){
       
        var next_id=this.sourcearr[this.sid]._data.next_event[n];//获得下一事件ID判断是否为－1，0，
        if(next_id>0){
            this.sid=next_id;
        }else if(next_id<0){
             var next_plot=this.plot[this.e_plot[this.sid][0]]._data.next_plot//下一个剧情数组
             if(next_plot.length>0&&next_plot[0]>0){
                  var conIDarr;
                 for(var i=0;i<next_plot.length;i++){
                     conIDarr=this.plot[next_plot[i]]._data.condition_arr;//条件数组
                     this.iscondition(conIDarr);
                 }
                 if(this.conID){//满足条件时
                    this.sid=this.plot[next_plot[Math.floor(Math.random()*next_plot.length)]]._data.event_arr[0];

                 }else{
                        //不满足条件时
                     for(var key in this.plot){

                         if(this.plot[key]._data.condition_arr.length==1&&this.plot[key]._data.condition_arr[0]<0){
                             return this.sid=this.plot[key]._data.event_arr[0]
                         }
                     }
                       
                 }

             }else{

                 //如果没有指向剧情类型时
                  for(var key in this.plot){

                         if(this.plot[key]._data.condition_arr.length==1&&this.plot[key]._data.condition_arr[0]<0){
                             return this.sid=this.plot[key]._data.event_arr[0]
                         }
                     }
             }

        }

    }
   //保存当前ID
    private iscaidan(){//彩蛋事件出现
        var probability=this.sourcearr[this.sid]._data.probability;//数字
        var ran=Math.random()*100;
        if(ran<probability){
            return true;
        }else{
            return false;
        }


    }
    private getCaidan(){
        //绘制彩蛋事件
        for(var key in this.plot){
            if(this.plot[key]._data.plot_mark==0){
               
                this.sid=this.plot[key]._data.event_arr[Math.floor(Math.random()*this.plot[key]._data.event_arr.length)];
                 return this.sid;
            }
        }


    }
    private leftTouch():void{//点击左边按钮执行事件
        
        this.print_btn(this.choices[this.sourcearr[this.sid]._data.choiceID[0]]._data);
         if(this.isGameOver()){//判断游戏是否结束
            this.btn_left.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.leftTouch,this,true);
            this.btn_right.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.rightTouch,this,true);
            this.die_condition();
            this.gamestop();
        }
        this.updateSty(this.choices[this.sourcearr[this.sid]._data.choiceID[0]]._data);
        this.updateShuxing();//调用 更新属性方法

        //更新数据id ＊＊＊＊＊＊＊
      
        //this.iscondition()判当前是不是彩蛋剧情
         if(this.isPlot0()){
             if(this.sourcearr[this.sid]._data.next_event[0]>0){//判断彩蛋剧情的指向ID是否为－2
                 this.sid=this.sourcearr[this.sid]._data.next_event[0];
             }else{
                  this.sid=this.now_id;
                 this.getSID(0);//更新ID

             }
           
        }else if(this.iscaidan()){
            this.now_id=this.sid;
            this.getCaidan();
        }else{
            this.getSID(0);
        }
       
       
       
        this.print();//绘制页面

        //把ID填到对象this.doneID中去
        this.doneID[this.sid]=true;
       


    }

    private updateSty(btn){
       
        this.monthCount+=btn.month;
        this.agecount+=btn.age_pre;
        if(Math.floor(this.monthCount)>=1){
            this.gameMonth+=Math.floor(this.monthCount);
            this.monthCount=0;
            if(this.gameMonth>=12){
                this.gameYear++;
                this.liveTime_year=this.gameYear-618;
                this.gameMonth=1;
            }
           
            this.printTime();
        }

        
    }
    private isdie_condition(condition_cont){ 
        //判断是否满足死亡条件 

       //条件对象
            if(this.isdonesid(condition_cont)&&this.isdonechoice(condition_cont)&&this.isgameTime(condition_cont)&&this.isage(condition_cont)&&this.islevel(condition_cont)&&this.isrichs(condition_cont)&&this.isfans(condition_cont)&&this.isbood(condition_cont)&&this.ismei(condition_cont)){
              
               return true;
            }else{

                 return false;
            }
        }


    
    //判断死亡条件是否满足
    private die_condition(){
         //var die_id_new=[];//根据优先级保存新数组
         var die_priorityarr=[];//保存优先级的
        for(var key in  this.dieconditionArr){
            if(this.isdie_condition(this.dieconditionArr[key]._data)&&this.dieconditionArr[key]._data.die_id_arr[0]>=0){
                 var die_id_arr=this.dieconditionArr[key]._data.die_id_arr;//死亡ID数组
                 //die_id_new.concat(die_id_arr);
                  for(var i=0;i<die_id_arr.length;i++){
                     //for(var j=0;j<this.dieArr[die_id_arr[i]]._data.die_priority;j++){
                         if(!die_priorityarr[this.dieArr[die_id_arr[i]]._data.die_priority]){
                              die_priorityarr[this.dieArr[die_id_arr[i]]._data.die_priority]=[];
                              die_priorityarr[this.dieArr[die_id_arr[i]]._data.die_priority].push(die_id_arr[i]);

                         }else{
                              die_priorityarr[this.dieArr[die_id_arr[i]]._data.die_priority].push(die_id_arr[i]);
                         }
                        
                         //die_id_new[die_id_arr[i]]=this.dieArr[die_id_arr[i]]._data.die_priority;
                     //}

                 }
            }
              
        }
        die_priorityarr.sort((a,b)=>b-a);
        var die_ranid=die_priorityarr[0][Math.floor(Math.random()*die_priorityarr[0].length)];
        this.die_text=this.dieArr[die_ranid]._data.die_text;
        this.die_img_src=this.dieArr[die_ranid]._data.die_img;
       

    }
    public print():void{
        //事件 内容更新
        //this.getSource();//加载事件资源
        
        
        this.containerTxt.text=this.sourcearr[this.sid]._data.sty;//故事内容
        this.event_name_text=this.sourcearr[this.sid]._data.event_name;
        this.event_name.text=this.event_name_text;//事件名名称
        //*****多个决策或者一个决策---可以修改
        
        this.btn_lf_txt=this.choices[this.sourcearr[this.sid]._data.choiceID[0]]._data.text;//
        this.btn_rt_txt=this.choices[this.sourcearr[this.sid]._data.choiceID[1]]._data.text;//左右按钮内容
        this.btn_lf.label=this.btn_lf_txt;
        this.btn_rt.label=this.btn_rt_txt;
    
        this.titleFun();//称号更新
        this.contImg=new Img(this.sourcearr[this.sid]._data.src);//图片更新
        this.containerImg.addChild(this.contImg);
        
       


    }

    private rightTouch():void{//点击右边按钮执行事件
         //把决策id填到对象this.btn_ID中去
        // this.iscondition();//判断条件  得到条件id
        this.print_btn(this.choices[this.sourcearr[this.sid]._data.choiceID[1]]._data);
         if(this.isGameOver()){//判断游戏是否结束
            this.btn_left.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.leftTouch,this,true);
            this.btn_right.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.rightTouch,this,true);
            this.die_condition();
            this.gamestop();
        }
        this.updateSty(this.choices[this.sourcearr[this.sid]._data.choiceID[1]]._data);
        this.updateShuxing();
          if(this.isPlot0()){
               if(this.sourcearr[this.sid]._data.next_event[1]>0){//判断彩蛋剧情的指向ID是否为－2
                 this.sid=this.sourcearr[this.sid]._data.next_event[1];
             }else{
                  this.sid=this.now_id;
                  this.getSID(1);//更新ID

             }
        }else  if(this.iscaidan()){
            this.now_id=this.sid;
            this.getCaidan();
        }else{
            this.getSID(1);
        }
        //this.getSid(this.condition[`condition_b${this.sid}`]);
        this.doneID[this.sid]=true;///把ID填到对象this.doneID中去
        this.print();//绘制页面
       
    }
    private shuxingArr:any[];//=[this.richs_mask,this.fans_mask, this.bood_mask,this.mei_mask];//属性名字
    private updateShuxing():void{//更新属性
    
        this.richs_mask.height=parseFloat(this.richs.text);
        this.richs_mask.y=100-this.richs_mask.height;
        this.fans_mask.height=parseFloat(this.fans.text);
        this.fans_mask.y=100-this.fans_mask.height;
        this.bood_mask.height=parseFloat(this.bood.text);
        this.bood_mask.y=100-this.bood_mask.height;
        this.mei_mask.height=parseFloat(this.mei.text);
        this.mei_mask.y=100-this.mei_mask.height;
        // if(this.richs_mask.height>50){
        //     this.richs_mask.fillColor=0x00ff00;
        // }
     this.shuxingArr=[this.richs_mask,this.fans_mask, this.bood_mask,this.mei_mask];
    //判断 属性数值的大小 改变遮幕的颜色
      for(var i=0;i<this.shuxingArr.length;i++){
         if(this.shuxingArr[i].height>60){
            this.shuxingArr[i].fillColor=0x33E728;
         }else if(this.shuxingArr[i].height<=30){
             this.shuxingArr[i].fillColor=0xFB0000;
        }else{
            this.shuxingArr[i].fillColor=0xF7E60B;
        }

     }
    }
    public die_label:eui.Label;//失望时的文字\
    public die_text:string;
    public die_img:Die_img;
    public die_img_src:string;
    public die_img_container:eui.Group;

    private isGameOver():boolean{//判游戏是否结束
        if(parseInt(this.richs.text)<=0){
            this.die_text="穷死的";
            this.die_img_src="1_png";
              return true;
        }
        if(parseInt(this.richs.text)>=100){
              this.die_text="富死了";
              this.die_img_src="2_png";
              return true;
        }
        if(parseInt(this.fans.text)<=0){
              this.die_text="没人缘";
              this.die_img_src="3_png";
              return true;
        }
        if(parseInt(this.fans.text)>=100){
              this.die_text="人缘太好";
              this.die_img_src="4_png";
              return true;
        }
        if(parseInt(this.bood.text)<=0){
              this.die_text="没血了";
              this.die_img_src="5_png";
              return true;
        }
        if(parseInt(this.bood.text)>=100){
              this.die_text="血太多";
              this.die_img_src="1_png";
              return true;
        }
        if(parseInt(this.mei.text)<=0){
              this.die_text="没有魅力";
              this.die_img_src="2_png";
              return true;
        }
        if(parseInt(this.mei.text)>=100){
              this.die_text="魅力太大";
            this.die_img_src="1_png";
              return true;
        }
            return false;
        
     }

    public now_level:eui.Label;//结束后显示分数
    public now_title:eui.Label;
    public top_level:eui.Label;
    public top_title:eui.Label;

     private gamestop():void{//游戏结束时 结束页面显示 定时器停止
         
         //比较最高分
         if(this.level>this.val_level){
             this.val_level=this.level;
             this.val_title=this.myTitle.text;
            egret.localStorage.setItem(this.key_level,this.val_level.toString());
            egret.localStorage.setItem(this.key_title,this.val_title);
         }
         if((this.liveTime_year*12+this.gameMonth)>(this.val_liveTime_year*12+this.val_liveTime_month)){
             this.val_liveTime_month=this.gameMonth;
             this.val_liveTime_year=this.liveTime_year;
             egret.localStorage.setItem(this.key_liveTime_year,this.val_liveTime_year.toString());
             egret.localStorage.setItem(this.key_liveTime_month,this.val_liveTime_month.toString());
         }
        
         this.now_level.text=`${this.level}级`;
         this.now_title.text=`${this.myTitle.text}`;
         this.top_level.text=`${this.val_level}级`;
         this.top_title.text=`${this.val_title}`;
         
         if(this.liveTime_year>0){
            this.now_liveTime.text=`${this.liveTime_year}年 ${this.gameMonth}月`;
         }else{
             this.now_liveTime.text=`${this.gameMonth}月`;
         }
          if(this.val_liveTime_year>0){
             this.top_liveTime.text=`${this.val_liveTime_year}年 ${this.val_liveTime_month}月`;
         }else{
             this.top_liveTime.text=`${this.val_liveTime_month}月`;
         }
         
        this.doneID={};
        this.btn_ID={};
        this.die_img=new Die_img(this.die_img_src);
        this.die_label.text=this.die_text;

       this.die_img_container.addChild(this.die_img);
         this.gp_over.visible=true;
    

     }
     public playagain(){//点击 再玩一次按钮执行的事件 
        this.gp_over.visible=false;
        this.init();
        this.updateShuxing();
         
     }
     private printTime(){//更新页面时间
         //绘制时间 年龄
        this.gameTime.text=`${this.gameYear}年${this.gameMonth}月`;
        this.myAge.text=`${this.agecount}`;

     }

     
     private titleFun():void{
         //称号
         if(this.level>=6&&this.level<=10){
             this.myTitle.text="大太监";
         }else if(this.level>=11&&this.level<=15){
             this.myTitle.text="御前太监";
         }else if(this.level>=16&&this.level<=20){
             this.myTitle.text="带班首领";
         }else if(this.level>=21&&this.level<=25){
             this.myTitle.text="副总管";
         }else if(this.level>=16&&this.level<=20){
             this.myTitle.text="总管";
         }
        
     }
     
}
