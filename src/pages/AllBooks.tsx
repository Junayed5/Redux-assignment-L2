import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeleteBookMutation, useGetAllBooksQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading books</div>;
  };

  const handleDelete = async (id: string) => {
    const result = await deleteBook(id);
    console.log('inside delete', result);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5 underline text-gray-700">
        All Books
      </h1>

      <Table className="w-4/5 mx-auto my-20">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book: any) => (
            <TableRow key={book._id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>{book.available === true ? "Available" : "Not Available"}</TableCell>
              <TableCell className="text-right">
                <Button className="bg-yellow-500 mx-2">Borrow</Button>
                <Button className="bg-blue-500 mx-2">Edit</Button>
                <Button className="bg-red-500" onClick={() => handleDelete(book._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBooks;
