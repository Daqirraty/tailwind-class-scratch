import Button from "../components/Button";
import Navbar from "../components/Navbar";
import ReversedDivSection from "../components/reversedDivSection";
// import bgWin from "../assets/bigWin.webp"
// import irresistible from "../assets/Irresistible.webp"
// import cadburyAndMore from "../assets/cadburyAndMore.png"
import wiggleVideo from "../assets/wiggle.mp4"; // adjust the path
import databundle from "../assets/databundle.png"; // adjust the path

// import { Carousel, Popover, Ripple, initTWE } from "tw-elements";

import vid from "../assets/vid.mp4"; // adjust the path
// import Navbar2 from "../components/Navbar2";
// import NavbarwithMapping from "../components/NavbarwithMapping";
import NavbarWithNavlink from "../components/NavbarWithNavlink";
import Carousel from "../components/carousel"
const Home = () => {
  
  
  // useEffect(() => {
  //   initTWE({
  //     Carousel,
  //     Popover,
  //     Ripple,
  //   });
  // }, []);
  // initTWE({ Carousel });

  return (
    <div className="relative text-boluColos ">
      {/* <Navbar2/> */}
      {/* <NavbarwithMapping/> */}
      <NavbarWithNavlink/>
      {/* Hero Section */}
      <div className="flex items-center bg-heroBG bg-cover bg-no-repeat h-[90vh]">
        <div className="w-full flex justify-center mx-5">
          <div className="w-[70%]">
            <div className="w-[43%] flex flex-col gap-5 ml-[6rem]">
              <h1 className="bg-clip-text bg-buttonTextBG text-6xl font-black text-transparent tracking-widest">
                GET COOKING WITH CADBURY
              </h1>
              <p className="w-[29rem] text-white font-bold">
                Fancy baking some delicious Cadbury treats to share with family
                and friends? Cakes, cookies, brownies and desserts all created
                by Cadbury and its fans!
              </p>
              <Button
                extraStyling={
                  "bg-buttonTextBG text-purple-700 font-bold border px-3 py-3 rounded-full"
                }
                btnText="EXPLORE ALL RECIPES"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section 2*/}
      <div className="flex justify-center bg-section2BG bg-center bg-cover h-screen">
        <div className="w-[40rem] h-fit flex flex-col justify-center gap-y-5 items-center mt-[6rem] text-center">
          <h1 className="text-5xl font-bold">NEW PRODUCT</h1>
          <p className="w-[38rem]">
            Try new Cadbury &More Biscoff chocolate bar! It's a layered delight
            with creamy milk chocolate, crumbled Biscoff biscuits, and a Biscoff
            spread centre.
          </p>
          <Button
            btnText="Discover more"
            extraStyling={
              " bg-boluColos text-white text-xl px-2 py-[1rem] rounded-full font-black"
            }
          />
        </div>
      </div>

      {/* Reversed Div 1 Section*/}
      <ReversedDivSection
        edition="NEW LIMITED EDITION"
        title="DAIRY MILK STRAWBERRIES & CREME FRAPPE BAR"
        details="It's made for sharing, giving you the perfect snack for summer celebrations."
        //  bgImage={irresistible}
        bgImage="bg-irresistible"
        btnText="Discover more"
      />

      {/* Reversed Div 2 Section*/}
      <ReversedDivSection
        extras="flex-row-reverse"
        edition="COMPETITION"
        title="£100K WORTH OF CASH PRIZES"
        details="What's better than winning a cash prize? When you win and you nominate your local shop to win too. For a chance to win, buy a bar, scan the pack, and enter your details on the link below. And if you win, you both win.."
        //  bgImage={bgWin} ----for using img tag
        bgImage="bg-bigWin"
        btnText="ENTER NOW"
      />

      {/* Reversed Div 3 Section*/}
      <ReversedDivSection
        extraStyling="bg-cadburyPatternBg"
        title="INDULGE IN THE NEW LOOK"
        details="Cadbury &More Caramel Nut Crunch & Nutty Praline Crisp: now with new packaging! Enjoy the range. Have you tried Cadbury &More Biscoff?"
        bgImage="bg-cadburyAndMore"
        btnText="DISCOVER OUR RANGE PAGE"
      />

      {/* Reversed Div 3 Section End*/}
      <video
        className="videoWrapper w-full h-[15rem] object-cover"
        loop
        playsInline
        preload="auto"
        autoPlay
        muted
      >
        <source src={wiggleVideo} type="video/mp4" />
      </video>

      {/* OUR SERVICES ON AITEL PAGE */}
      <div className="flex justify-center items-center ">
        <div className=" w-[75%] space-y-[5rem] my-[5rem] ">
          {/* div A */}
          <div className="">
            <div className="flex justify-center items-center gap-2 ">
              <span>|</span>
              <p>Our Services</p>
            </div>
            <p className="text-center text-4xl ">
              Quickly access our range of <b>products and services</b>
            </p>
          </div>

          {/* div B */}
          <div className=" flex items-center shadow-2xl p-5 rounded-sm justify-around ">
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
          </div>
        </div>
      </div>


      {/* with grid */}
      <div className="flex justify-center items-center ">
        <div className=" w-[75%] space-y-[5rem] my-[5rem] ">
          {/* div A */}
          <div className="">
            <div className="flex justify-center items-center gap-2 ">
              <span>|</span>
              <p>Our Services</p>
            </div>
            <p className="text-center text-4xl ">
              Quickly access our range of <b>products and services</b>
            </p>
          </div>

          {/* div B */}
          <div className=" grid grid-cols-12 items-center shadow-2xl p-5 rounded-sm justify-around ">
            <div className="min-w-[10rem] flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
            <span>|</span>
            <div className="flex flex-col items-center justify-center">
              <img src={databundle} width={60} alt="" />
              <p className="text-lg">DATA BUNDLES</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="inline-block rounded bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-toggle="popover"
        data-twe-title="Popover title"
        data-twe-content="And here's some amazing content. It's very engaging. Right?"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        Click to toggle popover
      </button>

      {/* testing Tailwind Element */}
      <div
        id="carouselExampleSlidesOnly"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        {/* <!--Carousel items--> */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            data-twe-carousel-active
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="Camera"
            />
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center border-2 h-[70vh]">
        <div className="flex justify-center items-center border-2 border-red-500 rounded-tl w-[75%] gap-5">
          <div className="shadow-7xl">
            {/* <video className="videoWrapper w-[30rem] h-[30rem] object-cover" loop playsInline preload="auto" autoPlay muted>
              <source src=""/>
            </video> */}

            <video className=" w-full h-[25rem] object-cover"
            loop
            autoPlay
            preload="auto" 
            muted
            playsinline
            style={{cursor:"auto", width:"100%",height:"fit", bordeRadius:"0px",display:"block",objectFit:"fill", 
            backgroundColor:"rgba(0, 0, 0, 0)", objectPosition:"50% 50%"}}
            >
            <source src={vid} />
            </video>
            <div>
              <p>hello</p>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>

      <Carousel/>


    </div>
  );
};

export default Home;
