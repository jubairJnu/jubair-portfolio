"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateOrderMutation } from "@/redux/features/order.api";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [AddOrder, { isLoading }] = useCreateOrderMutation();

  const onSubmit = async (data: FieldValues) => {
    const { name, phone, email, details } = data;

    const orderInfo = { name, phone, email, details };

    const res = await AddOrder(orderInfo).unwrap();

    console.log(res);

    if (res.success) {
      toast.success("Order Created Successfully");
    }

    reset();
  };

  return (
    <div className="w-full px-5 bg-[#0c1b3b] min-h-screen pt-10">
      <h1 className="text-2xl text-center font-bold text-slate-200">
        {" "}
        To order fill the form{" "}
      </h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center  align-middle">
            <div className="w-full grid items-center gap-4">
              <Label className="text-white font-semibold ">Name</Label>

              <Input
                className="w-full  "
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            {/* 2 */}
            <div className="w-full grid items-center gap-4">
              <Label className="text-white font-semibold ">Phone</Label>

              <Input
                className="w-full  "
                placeholder="phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-600">Phone is required</span>
              )}
            </div>
            {/* 3 */}
            <div className="w-full grid items-center gap-4">
              <Label className="text-white font-semibold ">Email</Label>

              <Input
                className="w-full  "
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            {/* 4 */}
            <div className="w-full grid lg:col-span-3 items-center gap-4">
              <Label className="text-white font-semibold ">Details</Label>

              <Textarea
                className="w-full  "
                placeholder="Details"
                {...register("details", { required: true })}
              />
              {errors.details && (
                <span className="text-red-600">Details is required</span>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="mt-8 bg-[#000000] text-white w-full "
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
