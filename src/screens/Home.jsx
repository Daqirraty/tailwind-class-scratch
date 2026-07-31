import Button from "../components/Button"
import Navbar from "../components/Navbar"
import ReversedDivSection from "../components/reversedDivSection"
// import bgWin from "../assets/bigWin.webp"
// import irresistible from "../assets/Irresistible.webp"
import cadburyAndMore from "../assets/cadburyAndMore.png"
import {
  Popover,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Popover, Ripple });

const Home = () => {
  return (
    <div className="relative text-boluColos ">
        <Navbar />
        {/* Hero Section */}
        <div className="flex items-center bg-heroBG bg-cover bg-no-repeat h-[85vh]">
            <div className="w-full flex justify-center mx-5">
                <div className="w-[70%]">
                    <div className="w-[40%] flex flex-col gap-5 ml-[5rem]">
                        <h1 className="bg-clip-text bg-buttonTextBG text-6xl font-black text-transparent">GET COOKING WITH CADBURY</h1>
                        <p className="w-[29rem] text-white font-bold">Fancy baking some delicious Cadbury treats to share with family and friends? Cakes, cookies, brownies and desserts all created by Cadbury and its fans!</p>
                        <Button extraStyling={'bg-buttonTextBG text-purple-700 font-bold border px-3 py-3 rounded-full'} btnText="EXPLORE ALL RECIPES" />
                    </div>
                </div>
            </div>
        </div>
        {/* Hero Section End */}

        {/* Section 2*/}
        <div className="flex justify-center bg-section2BG bg-center bg-cover h-screen">
            <div className="w-[40rem] h-fit flex flex-col justify-center gap-y-5 items-center mt-[6rem] text-center">
                <h1 className="text-5xl font-bold">NEW PRODUCT</h1>
                <p className="w-[38rem]">Try new Cadbury &More Biscoff chocolate bar! It's a layered delight with creamy milk chocolate, crumbled Biscoff biscuits, and a Biscoff spread centre.</p>
                <Button btnText="Discover more" extraStyling={' bg-boluColos text-white text-xl px-2 py-[1rem] rounded-full font-black'}/>
            </div>
        </div>
         {/* Section 2 End*/}
         
         {/* Reversed Div 1 Section*/}
         <ReversedDivSection edition="NEW LIMITED EDITION" 
         title='DAIRY MILK STRAWBERRIES & CREME FRAPPE BAR' 
         details="It's made for sharing, giving you the perfect snack for summer celebrations." 
        //  bgImage={irresistible}
         bgImage='bg-irresistible'
         btnText="Discover more"
         />
         {/* Reversed Div Section End*/}

         {/* Reversed Div 2 Section*/}
         <ReversedDivSection extras="flex-row-reverse" 
         edition="COMPETITION" 
         title='£100K WORTH OF CASH PRIZES' 
         details="What's better than winning a cash prize? When you win and you nominate your local shop to win too. For a chance to win, buy a bar, scan the pack, and enter your details on the link below. And if you win, you both win.."
        //  bgImage={bgWin} ----for using img tag
         bgImage='bg-bigWin'
         btnText="ENTER NOW"
         />
         {/* Reversed Div 2 Section End*/}

         {/* Reversed Div 3 Section*/}
         <ReversedDivSection 
         title='INDULGE IN THE NEW LOOK' 
         details="Cadbury &More Caramel Nut Crunch & Nutty Praline Crisp: now with new packaging! Enjoy the range. Have you tried Cadbury &More Biscoff?"
         bgImage={cadburyAndMore}
         btnText="DISCOVER OUR RANGE PAGE"
         />
         {/* Reversed Div 3 Section End*/}

         {/* testing flowbite */}









         



    </div>
  )
}

export default Home