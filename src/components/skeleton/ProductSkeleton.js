export const ProductSkeleton = () => {
  return (
    <div className="container min-h-screen gap-4 mx-auto mt-20">
      <div className="flex h-[550px] gap-4">
        <div className="flex-1 skeleton"></div>
        <div className="flex-1">
          <div className="h-20 skeleton"></div>
          <div className="w-4/5 h-5 mt-2 skeleton"></div>
          <div className="w-full h-5 mt-2 skeleton"></div>
          <div className="w-full h-5 mt-2 skeleton"></div>
        </div>
      </div>
    </div>
  );
};
