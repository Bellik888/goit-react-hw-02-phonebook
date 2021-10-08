import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filter }) => {
  return (
    <section>
      <ul>
        {filter === ''
          ? contacts.map(contact => (
              <ContactListItem key={contact.id} contact={contact} />
            ))
          : contacts.map(
              contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                  <ContactListItem key={contact.id} contact={contact} />
                ),
            )}
      </ul>
    </section>
  );
};
