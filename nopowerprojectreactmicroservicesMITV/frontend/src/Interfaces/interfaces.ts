export interface UserInterface {
  id: string;
  email: String;
  fullname: String;
  password: String;
  phone: String;
  address: {
      street: String;
      number: String;
      zip: Number;
      city: String;
  };
  isAdmin: boolean;
  }