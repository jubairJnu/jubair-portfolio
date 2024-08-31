"use client";

import Link from "next/link";
import { FaRegRectangleList, FaRegSquarePlus } from "react-icons/fa6";

type Tcommonhead = {
  link: string;
  manage: string;
  add?: string;
  list?: string;
};

const CommonHeader = ({ link, manage, add, list }: Tcommonhead) => {
  return (
    <div className="flex justify-between items-center bg-indigo-600 p-2  text-white">
      <h1 className="text-[18px]">{manage}</h1>
      <Link href={link}>
        <div className="flex items-center gap-2 bg-indigo-700 p-3 rounded-xl">
          {add && (
            <>
              <FaRegSquarePlus />
              <button>{add}</button>
            </>
          )}
          {list && (
            <>
              <FaRegRectangleList />
              <button>{list}</button>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CommonHeader;
