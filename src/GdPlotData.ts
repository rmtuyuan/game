class GdPlotData {
	private _data:GdPlotDataInterface = null;
	public constructor() {}
	private _key:string;
	public set key(v:string) {
		this._key = v;
	}
	public get key():string {
		return this._key;
	}
	public set data(v:GdPlotDataInterface) {
		this._data = v;
	}
	public get data():GdPlotDataInterface {
		return this._data;
	}
}