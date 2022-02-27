import { Model } from "./model";

export class Service {
  attach(...models: [typeof Model]) {
    for (const m of models) {
      m.service = this;
    }
  }
}
