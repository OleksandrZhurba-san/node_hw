import { Appliance } from "./Appliance";

export class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("WashingMachine turned ON");
  }
  turnOff(): void {
    console.log("WashingMachine turned OFF");
  }
}
