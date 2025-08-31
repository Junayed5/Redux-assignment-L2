import BookDetails from "@/components/popup/BookDetails";
import PopupModal from "@/components/popup/Popup";
import UpdatePopupModal from "@/components/popup/UpdatePopup";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "@/redux/api/baseApi";
import { useState } from "react";
import toast from "react-hot-toast";

const AllBooks = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isOpenBookDetails, setIsOpenBookDetails] = useState<any>(false);
  const [borrowId, setBorrowId] = useState<string | null>(null);
  const [updateBook, setBook] = useState<any>(null);
  const [detailBook, setDetailBook] = useState<any>(null);

  const openModal = (id: string) => {
    setBorrowId(id);
    setIsModalOpen(true);
  };
  const openUpdateModal = (book: any) => {
    setBook(book);
    setIsUpdateModalOpen(true);
  };
  const openBookDetailsModal = (book: any) => {
    setDetailBook(book);
    setIsOpenBookDetails(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);
  const closeBookDetailsModal = () => setIsOpenBookDetails(false);
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);
  const [deleteBook, {data: deleteData, isLoading: isDeleting}] = useDeleteBookMutation();
  const books = data?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading books</div>;
  }

  if (deleteData?.success) {
    toast.success(deleteData?.message);
  }
  const handleDelete = async (id: string) => {
    setDeleteOpen(true);
    setDeleteId(id);
  };
  type DeleteConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    itemName?: string; // optional (like "book" or "user")
  };

  // const handleBorrow = async (id: string) => {
  //   console.log(id);
  // };

  const DeleteConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    itemName = "item",
  }: DeleteConfirmationModalProps) => {
    if (!isOpen) return null;

    return (
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative m-4 w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Delete {itemName}?
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Are you sure you want to delete this {itemName}? This action cannot
            be undone.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-3">
            <Button
              onClick={onClose}
              className="rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
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
              <TableCell>
                {book.available === true ? "Available" : "Unavailable"}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  className="bg-yellow-500 mx-2"
                  onClick={() => openModal(book._id)}
                >
                  Borrow
                </Button>

                <Button
                  className="bg-blue-500 mx-2"
                  onClick={() => openUpdateModal(book)}
                >
                  Edit
                </Button>
                <Button
                  className="bg-red-500 mx-2"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </Button>
                <Button
                  className="bg-green-500"
                  onClick={() => openBookDetailsModal(book)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PopupModal
        isOpen={isModalOpen}
        onClose={closeModal}
        borrowId={borrowId}
      />
      <BookDetails
        isOpen={isOpenBookDetails}
        onClose={closeBookDetailsModal}
        book={detailBook}
      />
      <UpdatePopupModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        book={updateBook}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          deleteBook(deleteId); // call your RTK mutation here
          setDeleteOpen(false);
        }}
        itemName="book"
      />
    </div>
  );
};

export default AllBooks;
