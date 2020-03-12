class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Je m'appelle ${this.name}`)
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Je m'appelle ${this.name}`)
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();
romain.helloAsync();