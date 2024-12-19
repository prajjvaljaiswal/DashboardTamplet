import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Link from "next/link";
import { Post } from '@/types/post'
import posts from '@/data/posts'
import { Button } from "./ui/button";

interface PostTableProps {
  limit?: number;
  title?: String;
}
// sort date

// const sortedPosts: Post[] = [...posts].sort(
//   (a, b) => {
//     return new Date(b.date).getTime() - new Date(a.date).getTime();
//   }  
// );
// filter posts



const PostTable = ({ limit, title }: PostTableProps) => {

  const filterPost = limit ? posts.slice(0,limit) : posts 
  return (
    <div className="mt-10">
      <h1 className="text-2xl mb-4 font-semibold">{title ? title : "Post"}</h1>
      <Table>
        <TableCaption>A List of recent posts</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                <TableHead className="hidden md:table-cell">View</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {filterPost.map((post) => (
                <TableRow key={post.id}>
                    <TableCell>{post.title}</TableCell>
                    <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                    <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                    <TableCell className="hidden md:table-cell">
                        <Link href={`/posts/edit/${post.id}`}>
                            <Button className="bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 text-white">Edit</Button>
                        </Link>
                    </TableCell>
                </TableRow>
            ) )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
