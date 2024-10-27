import "./styles.css";

const Button = ({
  children,
  secondaryColor = false,
  blueColor = false,
  greenColor = false,
  onClick,
}) => {
  return (
    <button
      className={
        secondaryColor
          ? "button__grey"
          : blueColor
          ? "button__blue"
          : greenColor
          ? "button__green"
          : "button__orange"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
