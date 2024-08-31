"use server";

const img_hosting_token = "4ef073166c832e63b7b56afea1bd6c55";
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

export const imgaeUpload = async (formData: FormData) => {
  const response = await fetch(img_hosting_url, {
    method: "POST",
    body: formData,
  });
  const responseData = await response.json();
  console.log(responseData, "res");

  const imageUrl = responseData?.data?.display_url;
  return imageUrl;
};
