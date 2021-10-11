// import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ children }) => {
  return (
    <section>
      <ul>
        {children}
        {/* {filter === ''
          ? contacts.map(({name,number,id}) => (
            <div>
              <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id} />
              {/* <button type='button' onClick={()=>deleteItem(id)}>Delete</button>
            </div>
          )
            )
          : (
            contacts.map(
              contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                  <div>
                    <ContactListItem
                  key={contact.id}
                  name={contact.name}
                  number={ contact.number}
                  deleteItem={deleteItem}
                  id={contact.id}
                  />
                  <button type='button' onClick={()=>deleteItem(contact.id)}>Delete</button>
                </div>
                
                ),
              
            )
            
          )} */}
      </ul>
    </section>
  );
};
