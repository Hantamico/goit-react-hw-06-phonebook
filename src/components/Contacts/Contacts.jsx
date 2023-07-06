import css from './contacts.module.css'
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Contacts() {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.contacts);

    const filter = useSelector(state => state.contacts.filter);
    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
        <ul>
          {filteredContacts.map((contact, id) => 
              <li className={css.contacts__item} key={id}>
                   {contact.name}: {contact.number}
                  <button className={css.delete__btn} onClick={() => dispatch(deleteContact(contact))}>Delete</button>
              </li>
          )}
        </ul>
    )
        
}

