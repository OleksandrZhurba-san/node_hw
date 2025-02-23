import { Appliance } from "./Appliance";

export class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator turned ON");
  }
  turnOff(): void {
    console.log("Refrigerator turned OFF");
  }
}
