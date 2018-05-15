import TreeEntity = require("./TreeEntity");

class Broker implements TreeEntity {

    private readonly _brokerage: number;
    private _children: Array<TreeEntity>;

    constructor(brokerage:number) {
        this._children = [];
        this._brokerage = brokerage;
    }

    CalculateBrokerage(): number {
        let total = 0;

        this._children.map((entity) => {
            total += entity.CalculateBrokerage();
        });

        return total + this._brokerage;
    }
    Add(child: TreeEntity): void {
        this._children.push(child);
    }
    Remove(child: TreeEntity): void {
        //TODO
    }
    GetChildren(): Array<TreeEntity> {
        return this._children;
    }
}

export = Broker;