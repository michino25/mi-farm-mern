interface Quantity {
  quantity: number;
  setQuantity: (num: number) => void;
  increase: () => void;
  decrease: () => void;
}

export default function Quantity({
  quantity,
  setQuantity,
  increase,
  decrease,
}: Quantity) {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        onClick={decrease}
        type="button"
        className="p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-lime-600 focus:z-10 focus:ring-0 focus:text-lime-600"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="5"
            x2="19"
            y1="12"
            y2="12"
          ></line>
        </svg>
      </button>
      <div className="text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 focus:ring-0">
        <input
          className="remove-arrow w-12 border-0 text-center p-1 focus:ring-0"
          name="quantity"
          min="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
          type="number"
        />
      </div>
      <button
        type="button"
        onClick={increase}
        className="p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-lime-600 focus:z-10 focus:ring-0 focus:text-lime-600"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12"
            x2="12"
            y1="19"
            y2="5"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="5"
            x2="19"
            y1="12"
            y2="12"
          ></line>
        </svg>
      </button>
    </div>
  );
}
