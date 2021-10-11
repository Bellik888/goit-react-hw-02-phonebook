export const ContactListItem = ({ filter, contacts, deleteItem }) => {
  return (
    <li>
      {filter === ''
        ? contacts.map(({ name, number, id }) => (
            <li>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={() => deleteItem(id)}>
                Delete
              </button>
            </li>
          ))
        : contacts.map(
            ({ name, number, id }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li>
                  <p>
                    {name} : {number}
                  </p>
                  <button type="button" onClick={() => deleteItem(id)}>
                    Delete
                  </button>
                </li>
              ),
          )}
    </li>
  );
};
