import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { usePostBookMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddBook = () => {
  const form = useForm();
  const [postBook] = usePostBookMutation();

  const onSubmit = async (data: any) => {
    const bookData = {
      title: data.title,
      author: data.author,
      genre: data.genre.toUpperCase(),
      isbn: parseInt(data.isbn),
      copies: data.copies,
    };
    const result = await postBook(bookData);
    if (result?.data?.success === true) {
      toast.success(result.data.message);
    } else if (result?.error) {
      toast.error(result?.error?.data?.message);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5 underline text-gray-700">
        Add A New Book
      </h1>

      <div className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-1/5 border rounded-md p-4 mx-auto"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      required
                      className="border rounded-md h-10 p-2"
                      placeholder="title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      required
                      className="border rounded-md h-10 p-2"
                      placeholder="author"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      required
                      className="border rounded-md h-10 p-2"
                      placeholder="genre"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <input
                      type="number"
                      required
                      className="border rounded-md h-10 p-2"
                      placeholder="isbn"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <input
                      type="number"
                      required
                      className="border rounded-md h-10 p-2"
                      placeholder="copies"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <FormControl>
                    <select {...field} className="border rounded-md h-10 p-2">
                      <option value="true">Available</option>
                      <option value="false">Unavailable</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      className="border rounded-md h-20 p-2"
                      placeholder="description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full mx-auto" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBook;
