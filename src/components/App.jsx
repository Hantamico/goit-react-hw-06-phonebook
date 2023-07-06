import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";


export default function App() {
  
  return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts/>
      </div>
      
    );
};