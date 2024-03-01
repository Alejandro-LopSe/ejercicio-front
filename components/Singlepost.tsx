// deno-lint-ignore-file no-debugger
import { FunctionComponent } from "preact";
import { Post } from "../types.ts";

const ContactList: FunctionComponent<{ contacts: Post }> = (
  { contacts },
) => {
  debugger
  return (
    <div class="contactlist">
      <h1>Post </h1>
      <ol>
          <li key={contacts._id}>
            <p class="author">{contacts.author}</p>
            <p class="title">{contacts.title}</p>
            <p>{contacts.content}</p>
            <p>{contacts._id}</p>
          </li>
      </ol>
    </div>
  );
};

export default ContactList;
