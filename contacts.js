const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.js");
console.log(contactsPath);

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = (contactId) => {
  //  код
};

const removeContact = (contactId) => {
  // код
};

const addContact = (name, email, phone) => {
  //  код
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
