import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useCreateBorrowMutation } from "@/redux/api/baseApi";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const PopupModal = ({
  isOpen,
  onClose,
  borrowId: book,
}: {
  isOpen: boolean;
  onClose: () => void;
  borrowId: string | null;
}) => {
  const form = useForm();
  const navigate = useNavigate();
  const [createBorrow] = useCreateBorrowMutation();
  const onSubmit = async (data: any) => {
    const borrowBook = {
      book,
      ...data,
    };
    const res = await createBorrow(borrowBook);
    console.log(res);
    if (res?.data?.success === true) {
      toast.success(res.data.message);
    } else if (res?.error) {
      toast.error("Something went wrong");
    }
    onClose();
    form.reset();
    navigate("/borrow-summary");
  };

  if (!isOpen) {
    return null;
  }

  return (
    // Main modal overlay - THIS IS THE UPDATED LINE
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300"
    >
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative m-4 w-full max-w-lg transform rounded-2xl bg-white p-8 text-left shadow-xl transition-all duration-300 ease-in-out"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Borrow a Book</h3>
          <p className="mt-2 text-sm text-gray-500">
            Please enter the borrowing details .
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-5">
              {/* Number of Copies Input */}
              <div>
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Quantity"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Date Field Input */}
              <div>
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <input
                          type="date"
                          className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Due Date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="inline-flex w-full justify-center rounded-lg border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PopupModal;
