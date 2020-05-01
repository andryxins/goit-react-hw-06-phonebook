import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import Section from '../components/Section/Section';
import PhoneBookFields from '../components/PhoneBookFields/PhoneBookFields';
import PhoneBookList from '../components/PhoneBookList/PhoneBookList';
import PhoneBookSearchField from '../components/PhoneBookSearchField/PhoneBookSearchField';
import PhoneBookLogo from '../components/PhoneBookLogo/PhoneBookLogo';

const checkContactForUnique = (contactsArr, newContact) =>
  contactsArr.some(
    item => item.name.toLowerCase() === newContact.name.toLowerCase(),
  );

const filterContactList = (contactsArr, query) =>
  contactsArr.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

toast.configure();

export default class App extends Component {
  handleSubmit = obj => {
    const { onAddContact, phoneBookItems } = this.props;

    if (checkContactForUnique(phoneBookItems, obj)) {
      toast.error('This contact is alredy exist', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }

    onAddContact({ ...obj, id: uuidv4() });

    return true;
  };

  handleChange = e => {
    const { value } = e.target;
    this.props.onChangeQuery(value);
  };

  render() {
    const { phoneBookItems, onDeleteContact, filterQuery } = this.props;
    const filteredContacts = filterContactList(phoneBookItems, filterQuery);
    return (
      <main>
        <PhoneBookLogo title="PhoneBook" />
        <Section isActive>
          <PhoneBookFields onSubmit={this.handleSubmit} />
        </Section>

        <Section title={'Contacts'} isActive={phoneBookItems.length > 0}>
          <PhoneBookSearchField
            isActive={phoneBookItems.length > 1}
            value={filterQuery}
            onChange={this.handleChange}
          />

          <PhoneBookList
            onDelete={onDeleteContact}
            contacts={filteredContacts}
          />
        </Section>
      </main>
    );
  }
}
