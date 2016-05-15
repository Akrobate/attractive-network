export class Link {
  constructor(
        public id: number, 
        public from_user_id: number,
        public to_user_id: number,
        public value: string,
        public created: Date,
        public viewed: Date,
        public archived: Date
  ) { }
}