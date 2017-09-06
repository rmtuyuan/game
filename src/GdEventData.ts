class GdEventData {
	private _data:GdEventDataInterface = null;
	public constructor() {}
	private _key:string;
	public set key(v:string) {
		this._key = v;
	}
	public get key():string {
		return this._key;
	}
	public set data(v:GdEventDataInterface) {
		this._data = v;
	}
	public get data():GdEventDataInterface {
		return this._data;
	}
}