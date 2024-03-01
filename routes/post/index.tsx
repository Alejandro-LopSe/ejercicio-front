import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ContactList from "../../components/ContactList.tsx";
import { Post } from "../../types.ts";
import PostModel from "../../db/Contact.ts";

type Data = {
  posts: Array<Post>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const posts = await PostModel.find();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <ContactList contacts={props.data.posts}/>
  );
}
