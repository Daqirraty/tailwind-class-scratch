import { useParams } from "react-router-dom";
// import cadburyAndMore from "../../assets/cadburyAndMore.png";
import { cardData } from "../../data/data";

const ProductDetailsPage = () => {
  const { id} = useParams();

  console.log(typeof(id))

  const allCardData = cardData.find((card) => card.id === parseInt(id));

  console.log(allCardData);
  return (
    <div>
      <div className="border-2 border-red-500 p-5">
        <h1>Product Details Page</h1>
        <div className="flex gap-5 justify-center items-center">
          <div className="w-[50%]">
            <img src={allCardData?.image} alt={allCardData?.title} />
          </div>
          <div className="w-[20%]">
            <h2>{allCardData?.title}</h2>
            <p>{allCardData?.description}</p>
            {/* <p>Price: ${allCardData?.price.toFixed(2)}</p> */}
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage