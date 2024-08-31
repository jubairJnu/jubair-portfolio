"use client";

import CommonHeader from "@/component/utils/CommonHeader";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, useForm } from "react-hook-form";

import React, { useState } from "react";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { imgaeUpload } from "@/action/ImageUpload";

type Inputs = {
  name: string;
  link: string;
  githubclient: string;
  githubserver: string;
  featureItem: string;
  type: string;
  picture: string;
};
const img_hosting_token = "4ef073166c832e63b7b56afea1bd6c55";

const AddProjectPage = () => {
  const [value, setValue] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    const pictureFile = data.picture[0]; // Get the first file from the FileList
    await formData.append("picture", data.picture[0]);

    const img = await imgaeUpload(formData);

    // const {
    //   name,
    //   link,
    //   githubclient,
    //   githubserver,
    //   featureItem,
    //   type,
    //   picture,
    // } = data;
    // const projectData = {
    //   name,
    //   link,
    //   githubclient,
    //   githubserver,
    //   featureItem,
    //   type,
    //   picture,
    //   feature: value,
    //   // photo: imageUrl,
    // };
    // console.log("projectDAta", projectData);
  };

  return (
    <div className="bg-[#090e1a] min-h-screen px-5">
      <CommonHeader
        manage="Add Project"
        list="Project List"
        link="/dashboard/project"
      />

      <div className="mt-5 px-5">
        <form
          className="w-full flex flex-col  justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-3 w-full items-center gap-5">
            <div>
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input {...register("name", { required: true })} type="text" />
            </div>
            <div>
              <Label htmlFor="link" className="text-white">
                Link
              </Label>
              <Input
                {...register("link", { required: true })}
                id="link"
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="type" className="text-white">
                Type of Project
              </Label>
              <Input
                {...register("type", { required: false })}
                id="type"
                type="text"
                placeholder="Demo | Client"
              />
            </div>
            <div>
              <Label htmlFor="githubclient" className="text-white">
                Github Link Client
              </Label>
              <Input
                {...register("githubclient", { required: false })}
                id="githubclient"
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="githubserver" className="text-white">
                Github Link Server
              </Label>
              <Input
                {...register("githubserver", { required: false })}
                id="githubserver"
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="picture" className="text-white">
                Picture
              </Label>
              <Input
                {...register("picture", { required: true })}
                id="picture"
                type="file"
                accept=".jpg , .jpeg, .png"
              />
            </div>
          </div>

          <div className="bg-white mt-10 w-full">
            <Label htmlFor="features" className="text-white ">
              Features
            </Label>

            
          </div>

          <div className="w-full max-w-[350px] mt-10">
            <Button type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectPage;
