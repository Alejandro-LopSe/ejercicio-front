// deno-lint-ignore-file no-debugger
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../../types.ts";
import PostModel from "../../db/Contact.ts";
import Singlepost from "../../components/Singlepost.tsx";

type Data = {
  posts: Post
};

export const handler: Handlers<Data> = {
    
    
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
        const ID = ctx.params.id
        const url = new URL(_req.url)
        const id = url.searchParams.get("id") || undefined
        const posts  = await PostModel.findById(ID)
        debugger
        if(!posts ){
            throw new Error;
        }
        return ctx.render({posts});
    }catch (error) {
        return ctx.render(error)
    }
  },
    
};

export default function Home(props: PageProps<Data>) {
    debugger
  return (
    <Singlepost contacts={props.data.posts}/>
  );
}
