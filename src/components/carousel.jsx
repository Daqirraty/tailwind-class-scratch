import { useState } from "react"

const images = [
     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  "https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", 
]
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide =() => {
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }
    const prevSlide =() => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1  : prevIndex - 1)
    }
    return(
        <div className="relative h-screen border-2 border-red-600 flex justify-center">
            <img className="w-full object-cover " src={images[currentIndex]}/>
            <button className="absolute border-2 p-5 -translate-y-1/2 rounded-lg left-[2rem] text-white top-[30rem]" onClick={prevSlide}> {'<'} </button>
            <button className="absolute border-2 p-5 -translate-y-1/2 rounded-lg right-[2rem] text-white top-[30rem]" onClick={nextSlide}> {'>'} </button>

            <div className="absolute flex gap-5 -translate-x-1/2 duration-1000 bottom-[10rem]">
                {images.map((_,index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full h-5 w-5 ${
                        currentIndex === index ? "bg-red-600" : "bg-gray-700"
                    }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel