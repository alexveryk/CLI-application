const contactService = require("./contacts.js");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const ContactById = await contactService.getContactById(id);
      console.log(ContactById);
      break;

    case "add":
      const addContact = await contactService.addContact(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contactService.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
