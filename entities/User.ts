export class User {
  /*  OPTION 1
  email: string;
  constructor(email: string){
    this.email = email;
  } 
  OPTION 2
  */

  constructor(
    public email: string,
    public password: string,
    displayname?: string,
    photoUrl?: string
  ) {}
}
