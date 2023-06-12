export class todo {
  id: number;
  titel: string;
  status: string;
  dueDate: number;
  prio:number;
  description:string;

  constructor(id: number, titel: string, status: string) {
    this.id = id;
    this.titel = titel;
    this.status = status;
    this.prio = 1;
    this.dueDate = Date.now();
    this.description="Ich komme vom Frontend"
  }
}
