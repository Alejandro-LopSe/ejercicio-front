import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Add";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/post" class={selected === "List" ? "selected" : ""}>
        Posts
      </a>
      <a href="/post/add" class={selected === "Add" ? "selected" : ""}>
        Add new Post
      </a>
    </div>
  );
};

export default Menu;
