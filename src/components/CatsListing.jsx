import { CatInfoCard, Logo } from "./";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Loader2 } from "lucide-react";

function CatsListing() {
  const fetchCatsData = async ({ pageParam }) => {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/cats?page=${pageParam}`
    );
    const data = response.data.data.data;
    return data;
  };

  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["catsData"],
    queryFn: fetchCatsData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    console.log(inView);
    console.log(hasNextPage);
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
        <div className="relative w-auto my-8 overflow-x-scroll flex flex-row justify-center items-start gap-4">
          {status === "pending" ? (
            <div className="relative w-full flex flex-row gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="w-full">
                  <div className="relative flex flex-col w-72 sm:w-96 h-full rounded-[18px] bg-[#FFFFFF] shadow-2xl pb-4">
                    <div className="w-full p-0 m-0 mt-0">
                      <Skeleton
                        borderRadius={10}
                        className="rounded-tl-[18px]  w-full h-[325px] rounded-tr-[18px]"
                      />
                    </div>

                    <div className="relative w-full flex flex-col gap-3 p-2">
                      <div>
                        <p className="text-[#000000] text-[28px] font-[500] font-sans">
                          <Skeleton width={200} />
                        </p>
                      </div>
                      <div>
                        <p className="text-[#000000] text-[14px] font-[400] font-sans">
                          <Skeleton count={4} />
                        </p>
                      </div>
                      <div>
                        <span className="text-[#000000] italic text-[14px] font-[500]">
                          Origin
                        </span>{" "}
                        <span className="text-[#000000] text-[14px] font-[400]">
                          <Skeleton width={200} />
                        </span>
                      </div>
                      <div>
                        <span className="text-[#000000] italic text-[14px] font-[500]">
                          Temperament
                        </span>{" "}
                        <div className="flex flex-row flex-wrap gap-2">
                          {[1, 2, 3, 4].map((temp, index) => (
                            <div
                              key={`${temp}-${index}`}
                              className="bg-[#EFEFEF] rounded-[22px] w-fit px-2"
                            >
                              <span className="text-[#353535] text-[12px] font-[400] font-sans">
                                <Skeleton width={50} />
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
                          <Skeleton width={200} />
                        </span>
                      </div>
                      <div>
                        <Skeleton width={100} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative w-full flex flex-row gap-4 p-2 sm:p-4">
              {data.pages.map((page) => (
                <>
                  {page.map((data) => {
                    return (
                      <div key={data.id} className="w-full">
                        <CatInfoCard
                          image={data.image}
                          name={data.name}
                          description={data.description}
                          origin={data.origin}
                          temperament={data.temperament}
                          lifeSpan={data.life_span}
                          wikipediaUrl={data.wikipedia_url}
                        />
                      </div>
                    );
                  })}
                </>
              ))}
              <div
                className="text-white flex flex-row justify-center items-center"
                ref={ref}
              >
                {hasNextPage ? <Loader2 className="animate-spin" /> : <></>}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-2/12 h-2/12 sm:w-auto sm:h-auto absolute top-4 right-4">
        <Logo />
      </div>
    </div>
  );
}

export default CatsListing;
