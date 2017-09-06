class GdDieData {
	private _data:GdDieDataInterface = null;
	public constructor() {}
	private _key:string;
	public set key(v:string) {
		this._key = v;
	}
	public get key():string {
		return this._key;
	}
	public set data(v:GdDieDataInterface) {
		this._data = v;
	}
	public get data():GdDieDataInterface {
		return this._data;
	}
}