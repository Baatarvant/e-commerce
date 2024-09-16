export const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-[384px]">
      <div className="w-full h-60 skeleton"></div>
      <div className="w-1/2 h-4 skeleton"></div>
      <div className="w-3/4 h-4 skeleton"></div>
    </div>
  );
};
