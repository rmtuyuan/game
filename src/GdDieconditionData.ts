class GdDieconditionData {
	private _data:GdDieconditionDataInterface = null;
	public constructor() {}
	private _key:string;
	public set key(v:string) {
		this._key = v;
	}
	public get key():string {
		return this._key;
	}
	public set data(v:GdDieconditionDataInterface) {
		this._data = v;
	}
	public get data():GdDieconditionDataInterface {
		return this._data;
	}
}