import { Service } from "./service";

export class Model {
  static service: Service;

  static all() {
    console.log(this.service);
  }

  static select<T extends typeof Model>(
    this: T,
    fn: (index: InstanceType<T>) => void
  ): Generator<InstanceType<T>> {
    const self = this;
    function* selectGenerator() {
      yield self.create();
    }
    return selectGenerator();
  }

  static create<T extends typeof Model>(this: T): InstanceType<T> {
    // This should work via the javascript but seems TS infers too narrow a type
    return new this() as InstanceType<T>;
  }

  save() {
    console.log("save");
  }
}
