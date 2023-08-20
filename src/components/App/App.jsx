import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Container, Heder } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitForm = data => {
    const newContact = { ...data, id: nanoid() };
    const { contacts } = this.state;
    if (this.isContactNew(contacts, newContact)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [...contacts, newContact] });
  };

  isContactNew = (contacts, newContact) => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const optimiseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(optimiseFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const contactsList = this.filterByName();

    return (
      <Container>
        <Heder>Phonebook</Heder>
        <ContactForm onSubmit={this.submitForm} />

        <Contacts contacts={contactsList} deleteContact={this.deleteContact}>
          <Filter filter={filter} changeFilter={this.changeFilter} />
        </Contacts>
      </Container>
    );
  }
}
