const Button = ({ btnText, extraStyling }) => {
  return <button className={`min-w-[25rem] px-5 py-5 text-boluColos ${extraStyling}`}>{btnText}</button>;
};

export default Button;
