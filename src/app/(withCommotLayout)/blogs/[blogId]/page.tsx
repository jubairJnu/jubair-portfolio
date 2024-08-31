import { getSingleBlog } from "@/action/Addblogs";
import parse from "html-react-parser";

type TBlogParams = {
  params: { blogId: string };
};

const SingleBlogPage = async ({ params }: TBlogParams) => {
  const { blogId } = params;

  const blog = await getSingleBlog(blogId);

  return (
    <div className="w-full px-5 bg-[#0c1b3b] min-h-screen pt-10  ">
      <h1 className="text-slate-200 text-2xl text-center font-bold">
    
        {blog?.data?.title}{" "}
      </h1>

      <p className=" text-white mt-10">{parse(blog?.data?.content)}</p>
    </div>
  );
};

export default SingleBlogPage;
