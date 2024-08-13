import { Logo } from "./";

function CatsListing() {
  return (
    <div
      style={{ backgroundImage: `url("/assets/bg3.png")` }}
      className={`relative min-w-screen min-h-screen bg-[#a1a1a1] bg-cover md:bg-contain flex flex-wrap justify-center items-start p-2`}
    >
      <div className="w-full h-full">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="p-4 w-full text-3xl sm:text-5xl text-[#FFFFFF] font-bold">
            Cats around us
          </h1>
        </div>
        <div className="border my-8">
          
        </div>
      </div>
      <div className="w-2/12 h-2/12 sm:w-auto sm:h-auto absolute top-4 right-4">
        <Logo />
      </div>
    </div>
  );
}

export default CatsListing;
