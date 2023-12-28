import React from 'react';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <FormAddContact />
      <Filter />
      <ContactsList />
    </>
  );
};
