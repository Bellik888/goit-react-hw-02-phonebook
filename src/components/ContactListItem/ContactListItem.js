export const ContactListItem = ({ contact }) => {
  return (
    <li>
      <p>
        {contact.name} : {contact.number}
      </p>
    </li>
  );
};
