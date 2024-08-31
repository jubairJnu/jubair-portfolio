"use server";

export const getSingleBlog = async (id: string) => {
  const response = await fetch(`https://portfolio-backend-xi-one.vercel.app/api/v1/blogs/${id}`, {
    cache: "no-store",
  });
  const responseData = await response.json();
  

  return responseData;
};
