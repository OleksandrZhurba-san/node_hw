import EventEmitter from "events";
type EventEmitterInstance = InstanceType<typeof EventEmitter>;

const eventEmitter = new EventEmitter();

const sendMsg = (name: string, msg: string, emitter: EventEmitterInstance): void => {
  //console.log(`Name: ${name}, Message: ${msg}`);
  emitter.emit("msg", name, msg);
}
eventEmitter.on("msg", (name: string, msg: string) => console.log(`User: ${name}, Message: ${msg}`))

sendMsg("Alice", "Hello there!", eventEmitter);
sendMsg("Bob", "How are you?", eventEmitter);
sendMsg("Charlie", "Good morning!", eventEmitter);
sendMsg("Diana", "Nice to meet you!", eventEmitter);
sendMsg("Eve", "Have a great day!", eventEmitter);
