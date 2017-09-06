class GdChoiceData {
	private _data:GdChoiceDataInterface = null;
	public constructor() {}
	private _key:string;
	public set key(v:string) {
		this._key = v;
	}
	public get key():string {
		return this._key;
	}
	public set data(v:GdChoiceDataInterface) {
		this._data = v;
	}
	public get data():GdChoiceDataInterface {
		return this._data;
	}
}