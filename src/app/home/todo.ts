import { Subscription } from "rxjs";

export default interface todo{
    id : number
    task : string,
    isOver: boolean,
    time: string,
    timerSubscription?: Subscription;
    deadline:string
  }