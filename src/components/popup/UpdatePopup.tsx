import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";// adjust import path

type UpdatePopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  book: any; // replace with your Book type if you have one
};

const UpdatePopupModal = ({ isOpen, onClose, book }: UpdatePopupModalProps) => {
  // 1. RTK Query mutation

  // 2. React Hook Form setup with defaultValues
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      copies: "",
    },
  });

  const { reset } = form;

  // 3. Reset form with book values whenever "book" changes
  useEffect(() => {
    if (book) {
      reset({
        title: book.title || "",
        author: book.author || "",
        genre: book.genre || "",
        isbn: book.isbn || "",
        copies: book.copies?.toString() || "",
      });
    }
  }, [book, reset]);

  // 4. Submit handler
  const onSubmit = async (data: any) => {
    // try {
    //   await updateBookMutation({
    //     id: book._id, // your book id
    //     book: data,
    //   }).unwrap();

    //   console.log("Book updated:", data);
    //   onClose();
    //   form.reset(); // clear form after update
    // } catch (err) {
    //   console.error("Update failed:", err);
    // }
    console.log(data);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative m-4 w-full max-w-lg rounded-2xl bg-white p-8 text-left shadow-xl transition-all"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Update Book</h3>
          <p className="mt-2 text-sm text-gray-500">
            Please enter the details for your book.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-5">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Title"
                        className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Author */}
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Author"
                        className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Genre */}
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Genre"
                        className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ISBN */}
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="ISBN"
                        className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Copies */}
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <input
                        type="number"
                        placeholder="Copies"
                        className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                // disabled={isLoading}
                className="inline-flex w-full justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-transform hover:scale-105"
              >
                {/* {isLoading ? "Updating..." : "Update Book"} */}Update Book
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePopupModal;
