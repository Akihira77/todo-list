const Card = ({ children }) => {
  return <div className="shadow rounded-lg overflow-hidden bg-white">{children}</div>;
};

const Title = ({ children }) => {
  return (
    <div className="p-4 border-b text-center">
      <h1 className="text-2xl font-bold">{children}</h1>
    </div>
  );
};
const Body = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
const Footer = ({ children }) => {
  return <div className="bg-slate-50 p-4 flex justify-end gap-x-2">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
