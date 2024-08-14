import { Link } from "react-router-dom";

function CatInfoCard({
  image,
  name,
  description,
  origin,
  temperament,
  lifeSpan,
  wikipediaUrl,
}) {
  return (
    <div className="relative flex flex-col w-72 sm:w-96 h-full rounded-[18px] bg-[#FFFFFF] shadow-2xl ">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="rounded-tl-[18px]  w-full h-[325px] rounded-tr-[18px] object-cover"
        />
      </div>
      <div className="relative w-full flex flex-col gap-3 p-2">
        <div>
          <p className="text-[#000000] text-[28px] font-[500] font-sans">
            {name}
          </p>
        </div>
        <div>
          <p className="text-[#000000] text-[14px] font-[400] font-sans">
            {description}
          </p>
        </div>
        <div>
          <span className="text-[#000000] italic text-[14px] font-[500]">
            Origin
          </span>{" "}
          <span className="text-[#000000] text-[14px] font-[400]">
            {origin}
          </span>
        </div>
        <div>
          <span className="text-[#000000] italic text-[14px] font-[500]">
            Temperament
          </span>{" "}
          <div className="flex flex-row flex-wrap gap-2">
            {temperament.split(",").map((temp, index) => (
              <div
                key={`${temp}-${index}`}
                className="flex flex-row justify-center items-center text-[#353535] hover:text-white bg-[#EFEFEF] hover:bg-[#D482DB]  hover:cursor-pointer rounded-[22px] w-fit px-2"
              >
                <span className="text-[#353535] hover:text-white text-[12px] font-[400] font-sans text-center">
                  {temp.trim()}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-[#000000] italic text-[14px] font-[500]">
            Life Span
          </span>{" "}
          <span className="text-[#000000] text-[14px] font-sans font-[400]">
            {lifeSpan}
          </span>
        </div>
        <div className="py-4">
          <Link
            to={wikipediaUrl}
            target="_blank"
            className="text-[#7D99E2] text-[14px] font-[400] font-sans"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CatInfoCard;
