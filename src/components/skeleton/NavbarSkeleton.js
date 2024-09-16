export const NavbarSkeleton = () => {
  return (
    <div className="container py-4 mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="h-6 w-28 skeleton"></div>
          <div className="w-20 h-6 skeleton"></div>
          <div className="w-20 h-6 skeleton"></div>
        </div>
        <div className="flex gap-4">
          <div className="h-6 w-28 skeleton"></div>
          <div className="w-5 h-6 skeleton"></div>
        </div>
      </div>
    </div>
  );
};
