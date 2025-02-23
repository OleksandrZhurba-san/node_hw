import { Media } from "./Media";

export class Audio extends Media {
  constructor() {
    super();
  }
  play(): void {
    console.log("Playing audio");
  }
}
