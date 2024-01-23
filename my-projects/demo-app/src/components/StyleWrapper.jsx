const StyleWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 ">
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
};

export default StyleWrapper;
