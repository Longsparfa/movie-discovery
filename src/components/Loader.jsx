import ReactDOM from "react-dom"

 const Processing = () => {
  return (
    <div className='fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] z-[9] '>
    <button type='button' className='bg-rose-400 fixed left-[50%] top-[50%] -translate-y-50% -translate-x-50% '>
        <svg className='animate-spin h-5 w-10 text-white z-[999] ' viewBox='0 0 24 24'></svg> 
        loading...
    </button>
    </div>
  )
}

const portalElement = document.getElementById("loader");


const Loader = () => {
  return ReactDOM.createPortal(
    <>
    <Processing />
    </>, portalElement
  );
};

export default Loader;