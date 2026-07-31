import Button from "./Button"

const ReversedDivSection = ({extras,edition,title,details,bgImage,btnText}) => {
  return (
    <div className={`flex justify-center ${extras} text-white bg-center bg-cover h-[87vh]`}>
        <div className="w-[50%] flex justify-center items-center bg-boluColos">
            <div className="w-[60%] space-y-5">
                <p className="w-fit text-2xl font-extrabold bg-clip-text bg-buttonTextBG text-transparent border-b-2 border-t-2 border-transparent border-red-600">{edition}</p>
                <h3 className="w-[34rem] text-6xl font-bold">{title}</h3>
                <p className="w-[33rem] font-semibold">{details}</p>
                <Button btnText={btnText} extraStyling={'w-[20rem] bg-buttonTextBG font-black border px-[2rem] py-[1rem] text-xl rounded-full '}/>
            </div>
        </div>
        <div className={`w-[50%] ${bgImage} bg-cover bg-no-repeat h-screen`}></div>
    </div>
  )
}

export default ReversedDivSection