const Button = ({ btnText, extraStyling }) => {
  return <button className={`w-[25rem] text-boluColos ${extraStyling}`}>{btnText}</button>;
};

export default Button;
