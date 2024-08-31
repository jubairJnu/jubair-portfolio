import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type TBlog = {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
};


export const BlogTable = ({ blogData }: { blogData: TBlog[] }) => {
  return (
    <Table className="text-white">
      <TableHeader>
        <TableRow>
          <TableHead className="text-slate-200">Title</TableHead>
          <TableHead className="text-slate-200">Author</TableHead>
          <TableHead className="text-slate-200">Date</TableHead>
          <TableHead className="text-right text-slate-200">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogData?.map((blog: TBlog) => (
          <TableRow key={blog._id}>
            <TableCell className="font-medium">{blog?.title}</TableCell>
            <TableCell>{blog?.author}</TableCell>
            <TableCell>{blog.createdAt.substring(0, 10)}</TableCell>
            <TableCell className="text-right">
              <Button>
                <Link href={`/blogs/${blog._id}`}>Details</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
