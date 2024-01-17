// A declaration
class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    const { name, job } = this;
    console.log(`${name},${job}`);
  }
}

const thePerson = new Person(" Mr.X ", " Student ");
thePerson.print();
