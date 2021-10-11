import { Component } from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { ContactListItem } from './components/ContactListItem/ContactListItem';

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

  addNewContact = obj => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  searchDuplicate = value => {
    this.state.contacts.map(
      contact =>
        value === contact.name && alert(`${value} is already in contacts!!!`),
    );
    return true;
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={this.addNewContact}
          searchDuplicate={this.searchDuplicate}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList>
          <ContactListItem
            contacts={this.state.contacts}
            filter={this.state.filter}
            deleteItem={this.deleteItem}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
