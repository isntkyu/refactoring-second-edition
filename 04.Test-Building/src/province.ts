import { Producer } from "./Producer";

export type Doc = {
  name: string;
  demand: number;
  price: number;
  producers: Producer[];
};

export class Province {
  private _name: string;
  private _producers: Producer[];

  constructor(doc: Doc) {
    this._name = doc.name;
    this._producers = [];
    this.totalProduction = 0;
    this.demand = doc.demand;
    this.price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg: Producer) {
    this.producers.push(arg);
    this.totalProduction += arg.production;
  }

  get name(): string {
    return this._name;
  }
  get producers(): Producer[] {
    return this._producers.slice();
  }
  get totalProduction(): number {
    return this.totalProduction;
  }
  set totalProduction(arg: number) {
    this.totalProduction = arg;
  }
  get demand(): number {
    return this.demand;
  }
  set demand(arg: number) {
    this.demand = arg;
  }
  get price(): number {
    return this.price;
  }
  set price(arg: number) {
    this.price = arg;
  }

  get shortfall(): number {
    return this.demand - this.totalProduction;
  }

  get profit(): number {
    return this.demandValue - this.demandCost;
  }

  get demandValue(): number {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand(): number {
    return Math.min(this.demand, this.totalProduction);
  }

  get demandCost(): number {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}
