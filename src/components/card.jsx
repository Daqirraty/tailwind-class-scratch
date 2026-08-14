import Button from "./Button";
// import cadburyAndMore from "../assets/cadburyAndMore.png";
import { Link } from "react-router-dom";
const Card = ({card}) => {
    console.log(card)
  return (
    <div className="w-[20rem] rounded-lg  border-2 shadow-2xl flex flex-col justify-center items-center gap-5">
      <img src={card?.image} className="rounded-lg" alt="" />
      <div className="flex flex-col justify-center items-center p-3 gap-2">
        <p>{card?.title}</p>
        <h3>{card?.description}</h3>
        <Link to={`/product-details/${card?.id}`}>
          <Button
            btnText={"View Details"}
            extraStyling={
              "w-fit rounded-lg px-3 py-3 border-2 border-blue-600"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
