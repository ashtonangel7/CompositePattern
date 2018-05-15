import Broker = require("./Broker");
import Client = require("./Client");

let rootBroker = new Broker(10);
let subBroker1 = new Broker(20);

let client1 = new Client(5);
let client2 = new Client(6);

rootBroker.Add(subBroker1);
subBroker1.Add(client1);
subBroker1.Add(client2);

let result = rootBroker.CalculateBrokerage();
console.log(result);

