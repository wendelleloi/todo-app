export interface ITodo {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface IItem {
  id: string;
  action: "update" | "delete";
}
