import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  debugger
  return (
    <form class="AddForm" action="/post/add" method="post">
      <h1>Add new post</h1>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="content" placeholder="content" />
      <input type="text" name="author" placeholder="author" />
      <button type="submit">Publish</button>
    </form>
    
  );
  
};

export default AddForm;
