interface UserInterface {
  name: string;
  email: string;
  age: number;

  register();
  payInvoice();
}

class User implements UserInterface {
  // Public / Private / Protected work in TS classes both in variables and functions
  name: string;
  email: string;
  age: number;

  constructor (name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User Created: ${this.name}`);
  }

  register () {
    console.log(`${this.name} registered with ${this.email}`);
  }

  payInvoice () {
    console.log(`${this.name} just paid their invoice`);
  }
}

let john = new User('John', 'john@email.com', 34);

class Member extends User {
  id: number;

  constructor (id: number, name: string, email: string, age: number) {
    super(name, email, age);

    this.id = id;
  }

  payInvoice () {
    super.payInvoice();
  }
}

let mike: User = new Member (1, 'Mike', 'mike@email.com', 21);
