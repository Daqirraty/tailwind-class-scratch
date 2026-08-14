import caveman from "../assets/caveman.gif"
const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[50%] h-[50%] flex justify-center items-center text-3xl font-bold'>
          <img src={caveman} alt="caveman"/>
        </div>
    </div>
  )
}

export default ErrorPage