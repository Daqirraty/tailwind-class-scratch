import Card from "../../components/card"
import { cardData } from "../../data/data"



const ProductPage = () => {
  return (
    <div className="w-full p-5">
       {/* <div className=""> */}
           <h1>Product Page</h1>
       <div className="grid grid-cols-4 justify-center items-center gap-5">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
       {/* </div> */}
       </div>
    </div>
  )
}

export default ProductPage