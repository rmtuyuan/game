class StartUI extends eui.Component{
   private playGame:eui.Group;
   private static _instance:StartUI=null;
   public static getInstance(){
       if(StartUI._instance==null){
           StartUI._instance=new StartUI();
       }
       return StartUI._instance;
   }
	public constructor() {
		super();
		this.skinName="resource/skins/startUISkin.exml";
		this.playGame.touchEnabled=true;
		this.playGame.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_play,this,true);
	}
	
	public onclick_play(){
		this.parent.addChild(Game.getInstance());
		this.parent.removeChild(this);
	
	}
}