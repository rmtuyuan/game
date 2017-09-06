class GdConditionData {
	private _data:GdConditionDataInterface = null;
	public constructor() {}
	private _key:string;
	public set key(v:string) {
		this._key = v;
	}
	public get key():string {
		return this._key;
	}
	public set data(v:GdConditionDataInterface) {
		this._data = v;
	}
	public get data():GdConditionDataInterface {
		return this._data;
	}
}