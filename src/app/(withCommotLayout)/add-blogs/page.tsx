"use client";

import CommonHeader from "@/component/utils/CommonHeader";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCreateBlogMutation } from "@/redux/features/blog.api";
import { toast } from "sonner";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddBlogPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [postBlog, { isLoading }] = useCreateBlogMutation();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  // const
  const handleAdd = async (data: FieldValues) => {
    const { title } = data;

    const blogData = {
      title,
      content,
    };

    const res = await postBlog(blogData).unwrap();
    if (res.success) {
      toast.success("Blog Posted Successfully", {
        duration: 1000,
        position: "top-right",
      });

      reset();
    }
  };

  return (
    <div className="min-h-screen">
      <CommonHeader manage="Blog" link="/blogs" list="Blog List" />
      <div className="bg-white p-5 ">
        <form onSubmit={handleSubmit(handleAdd)}>
          <div className="grid w-full  items-center gap-1.5 my-5">
            <Label htmlFor="Title">Title</Label>
            <Input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <Label className="mb-5">Details</Label>
          <JoditEditor
            ref={editor}
            value={content}
            // tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
          <Button size="lg" type="submit">
            {isLoading ? "Loading..." : "Post Blog"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
