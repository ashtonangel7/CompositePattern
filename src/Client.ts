import TreeEntity = require("./TreeEntity");

class Client implements TreeEntity {
    private readonly _brokerage: number;

    constructor(brokerage:number) {
        this._brokerage = brokerage;
    }
    CalculateBrokerage(): number {
        return this._brokerage;
    }
}

export =  Client;