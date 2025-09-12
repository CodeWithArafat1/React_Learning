const Todo = ({ item, onDelete }) => {
  if (!item) return null;
  return (
    <div key={item.id} className="max-w-md mx-auto">
      <p className="w-full my-5 items-center border px-4 flex justify-between p-2 border-orange-600 rounded">
        {item.name || "hello"}
        <button
          onClick={() => {
            onDelete(item.id);
          }}
          className="bg-red-600 cursor-pointer text-white px-5 py-1 rounded-lg"
        >
          delete
        </button>
      </p>
    </div>
  );
};

export default Todo;
