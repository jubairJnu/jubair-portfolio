"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateContactMutation } from "@/redux/features/order.api";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactModal = () => {
  const [addContact, { isLoading }] = useCreateContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const { name, phone, email, message } = data;

    const contactInfo = { name, phone, email, message };

    const res = await addContact(contactInfo).unwrap();

    console.log(res);

    if (res.success) {
      toast.success("Send Successfully");
    } else {
      toast.error("Something went Wrong");
    }

    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-800">Contact</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Please Fill the form!</DialogTitle>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 justify-items-center  align-middle">
              <div className="w-full grid items-center gap-4">
                <Label className="font-semibold ">Name</Label>

                <Input
                  className="w-full bg-white text-black border  "
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* 2 */}
              <div className="w-full grid items-center gap-4">
                <Label className="font-semibold ">Phone</Label>

                <Input
                  className="w-full bg-white text-black border "
                  placeholder="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-red-600">Phone is required</span>
                )}
              </div>
              {/* 3 */}
              <div className="w-full grid items-center gap-4">
                <Label className="font-semibold ">Email</Label>

                <Input
                  className="w-full  bg-white text-black border"
                  placeholder="Email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              {/* 4 */}
              <div className="w-full grid items-center gap-4">
                <Label className="font-semibold ">Details</Label>

                <Textarea
                  className="w-full  bg-white text-black border"
                  placeholder="Details"
                  {...register("message", { required: true })}
                />
                {errors.details && (
                  <span className="text-red-600">Details is required</span>
                )}
              </div>
            </div>

            <DialogClose asChild>
              <Button
                type="submit"
                className="mt-8 bg-[#000000] w-full "
                disabled={isLoading}
              >
                {isLoading ? "Please wait..." : "Submit"}
              </Button>
            </DialogClose>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
