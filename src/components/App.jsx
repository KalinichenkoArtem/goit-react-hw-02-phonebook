import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactFrom from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
          contact.number === number
      )
    ) {
      return alert(`${name} или ${number} есть в телефонной книге`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibileContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactFrom onSubmit={this.addContact} />

          <h2>Contacts</h2>
          {contacts.length > 0 ? (
            <>
              <Filter value={filter} changeFilter={this.changeFilter} />
              <ContactList
                contactsList={this.getVisibileContacts()}
                deleteContact={this.deleteContact}
              />
            </>
          ) : (
            <p>No contacts</p>
          )}
        </div>
      </>
    );
  }
}

export default App;
