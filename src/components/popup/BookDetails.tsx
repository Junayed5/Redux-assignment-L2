const BookDetails = ({
  isOpen,
  onClose,
  book,
}: {
  isOpen: boolean;
  onClose: () => void;
  book: any;
}) => {
  if (!isOpen) {
    return null;
  }
console.log(book)
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
          <h3 className="text-2xl font-bold text-gray-800">Book Details</h3>
          <p className="mt-2 text-sm text-gray-500">
            Here are the details for the selected book.
          </p>
        </div>

        <div className="flex gap-8">
            <img className="size-40" src="https://png.pngtree.com/template/20250203/ourmid/pngtree-book-cover-mockup-image_2039221.jpg" alt="book" />

            <div>
                <h4 className="text-lg font-semibold text-gray-800">Title:</h4>
                <p className="text-gray-600">{book.title}</p>
                <h4 className="text-lg font-semibold text-gray-800">Author:</h4>
                <p className="text-gray-600">{book.author}</p>
                <h4 className="text-lg font-semibold text-gray-800">Genre:</h4>
                <p className="text-gray-600">{book.genre}</p>
                <h4 className="text-lg font-semibold text-gray-800">ISBN:</h4>
                <p className="text-gray-600">{book.isbn}</p>
                <h4 className="text-lg font-semibold text-gray-800">Copies:</h4>
                <p className="text-gray-600">{book.copies}</p>
                <h4 className="text-lg font-semibold text-gray-800">Availability:</h4>
                <p className="text-gray-600">{book.available ? "Available" : "Unavailable"}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
