import {
    Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BorrowBook = () => {
  return (
    <div>
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
          <TableRow>
            <TableCell>The Great Gatsby</TableCell>
            <TableCell>9780743273565</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowBook;
