import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../../components/AddForm.tsx";
import ContactModel from "../../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        title: form.get("title"),
        author: form.get("author"),
        content: form.get("content")
      };

 
      const id = await ContactModel.create(data);
      console.log(id);
      
      return new Response("", {
        status: 303,
        headers: {
          "Location": `/post/${id._id}`,
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;
