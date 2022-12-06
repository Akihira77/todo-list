const PlaceContentCenter = ({ children }) => {
  return (
    <div className="bg-slate-100">
      <div className="min-h-screen flex items-center justify-center antialiased tracking-tight">
        <div className="max-w-md w-full">{children}</div>
      </div>
    </div>
  );
};

export default PlaceContentCenter;
