export interface UserInterface {
  name: string;
lastname: string;
    username: string;
    isAdmin: boolean;
    id: string;
  }
  
  export interface DatabaseUserInterface {
    name: string;
    lastname: string;
    username: string;
    password: string;
    isAdmin: boolean;
    googleId?: string;
    twitterId?: string;
    githubId?: string;
    __v: number;
    _id: string; 
  }

//   export interface IMongoDBUser {
//     googleId?: string;
//     twitterId?: string;
//     githubId?: string;
//     username: string;
//     __v: number;
//     _id: string;
// }