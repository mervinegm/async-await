import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  async load() {
    const promesa = await jsonfile.readFile(__dirname + "/contacts.json");
    //console.log(promesa);
    this.data = promesa;
    return promesa;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  async save() {
    const promesa = await jsonfile.writeFile(
      __dirname + "/contacts.json",
      this.data
    );
    console.log(promesa);
    return promesa;
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };

/* const mock = new ContactsCollection();
mock.load().then(() => {
  console.log(mock.data);
});

async function loadDataa() {
  await mock.load();
  console.log(mock.data);
}

loadDataa(); */
