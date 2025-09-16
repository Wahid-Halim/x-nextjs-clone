const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} bg-cyan-500 text-white font-bold py-1 px-16 rounded-full hover:bg-cyan-600 transition-all `}
    >
      {children}
    </button>
  );
};

export default Button;
