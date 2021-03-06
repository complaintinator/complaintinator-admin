function Loader() {
  return (
    <div className="p-5 w-full md:w-1/2 block bg-gray-700 mb-5">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-500 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-500 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-500 rounded"></div>
            <div className="h-4 bg-gray-500 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
