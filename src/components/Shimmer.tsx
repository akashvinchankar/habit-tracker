const Shimmer = () => {
  return (
    <div className="min-w-xs max-w-xs w-full rounded-lg overflow-hidden shadow-md bg-white animate-pulse cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="h-40 w-full bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default Shimmer;
