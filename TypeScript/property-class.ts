// class Contact {
//   protected prenom: string;
//   constructor(prenom: string) {
//     this.prenom = prenom;
//   }
// }

class Contact {
  constructor(protected prenom: string) {}
}

const romain = new Contact('Romain');