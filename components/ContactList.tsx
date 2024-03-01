import { FunctionComponent } from "preact";
import { Post } from "../types.ts";

const ContactList: FunctionComponent<{ contacts: Post[] }> = (
  { contacts },
) => {

  
  return (
    <div class="contactlist">
      <h1>Post List</h1>
      <ol>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <p class="author">{contact.author}</p>
            <p class="title">{contact.title}</p>
            <p>{contact.content}</p>
            <p>{contact._id}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ContactList;
