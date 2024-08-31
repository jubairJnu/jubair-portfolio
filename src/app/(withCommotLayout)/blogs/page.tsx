"use client";

import { BlogTable } from "@/component/BlogTable";
import CommonHeader from "@/component/utils/CommonHeader";
import { useGetPublishBlogsQuery } from "@/redux/features/blog.api";
import { toast } from "sonner";

const Blogpage = () => {
  const { data: blogs, isLoading } = useGetPublishBlogsQuery({});



  return (
    <div className="bg-[#090e1a] min-h-screen">
      <CommonHeader manage="Blog" link="/add-blogs" add="Add Blog" />
      <div>
        <BlogTable blogData={blogs?.data} />
      </div>
    </div>
  );
};

export default Blogpage;
