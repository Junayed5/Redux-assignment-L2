import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "@/pages/AllBooks";
import BorrowBook from "@/pages/BorrowBook";
import AddBook from "@/pages/AddBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: AllBooks,
      },
      {
        path: "books",
        Component: AllBooks,
      },
      {
        path: "create-book",
        Component: AddBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowBook,
      },
    ],
  },
]);
