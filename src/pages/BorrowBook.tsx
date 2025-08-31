import {
    Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowsQuery } from "@/redux/api/baseApi";

const BorrowBook = () => {

  const { data: borrows , isLoading , error } = useGetBorrowsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching borrows</div>;
  }

  console.log(borrows);

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center my-5 underline">Borrow Book</h1>

      <Table className="w-3/5 mx-auto my-20">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrows?.data?.map((borrow: any) => (
            <TableRow key={borrow.id}>
              <TableCell>{borrow.book.title}</TableCell>
              <TableCell>{borrow.book.isbn}</TableCell>
              <TableCell>{borrow.totalQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowBook;
