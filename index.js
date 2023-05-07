const contactService = require("./contacts");
require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      break;

    case "add":
      break;

    case "remove":
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "list" });
