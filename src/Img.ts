class Img extends eui.Image{
	public constructor(src:string) {
		super();
		this.width=425;
		this.height=327;
		this.source=RES.getRes(src);
		
	}
}