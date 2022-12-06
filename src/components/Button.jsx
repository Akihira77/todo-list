const Button = ({ bgColor = "bg-black", text, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${bgColor} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center whitespace-nowrap items-center gap-x-2  text-white px-4 h-10 py-2 rounded`}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
