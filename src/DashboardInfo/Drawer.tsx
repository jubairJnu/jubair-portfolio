// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Drawer } from "vaul";
import { MdOutlineMenuOpen } from "react-icons/md";

const DashboardDrawer = () => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button size="lg" variant="ghost" className="text-white text-2xl">
          <MdOutlineMenuOpen />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-[#090e1a] flex flex-col rounded-t-[10px] h-full w-[200px] mt-24 fixed bottom-0 right-0">
          {/* <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div> */}
          <div className="flex flex-col gap-4 w-full  shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  pe-8 pt-2 min-h-screen ">
            <Link
              href="/"
              className="p-2 bg-[#06256b] px-4 font-bold text-white rounded-md"
            >
              Home
            </Link>
            <Link
              href="/dashboard/project"
              className="p-2 bg-[#06256b] px-4 font-bold text-white rounded-md"
            >
              Projects
            </Link>
            <Link
              href="/dashboard/project"
              className="p-2 bg-[#06256b] px-4 font-bold text-white rounded-md"
            >
              Blogs
            </Link>
            <Link
              href="/dashboard/project"
              className="p-2 bg-[#06256b] px-4 font-bold text-white rounded-md"
            >
              Skills
            </Link>
            <Link
              href="/dashboard/project"
              className="p-2 bg-[#06256b] px-4 font-bold text-white rounded-md"
            >
              Experience
            </Link>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DashboardDrawer;
