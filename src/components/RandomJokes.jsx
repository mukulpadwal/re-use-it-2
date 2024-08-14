import axios from "axios";
import {
  ArrowLeft,
  BadgeCheck,
  Bookmark,
  Dot,
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import getRandomDate from "../utils/getRandomDate";
import getRandomAnalytics from "../utils/getRandomAnalytics";
import { Logo, Navbar } from "./";

function RandomJokes() {
  const [loading, setLoading] = useState(false);
  const [jokeData, setJokeData] = useState({});
  const { parsedDate, parsedTime } = getRandomDate();
  const { views, comments, retweets, likes, bookmarks } = getRandomAnalytics();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
      .then((response) => {
        if (response.data.success) {
          return response.data.data;
        }
      })
      .then((data) => setJokeData(data))
      .catch((error) => console.error(error.message))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url("/assets/bg2.png")` }}
      className={`relative min-w-screen min-h-screen text-white bg-cover flex flex-wrap justify-center items-center`}
    >
      <Navbar className="absolute top-0 bottom-0 left-0 right-0" />
      <div className="w-full flex flex-row justify-center items-center">
        <div className="bg-[#000000] rounded-xl p-3 w-11/12 sm:w-6/12 lg:w-4/12">
          {loading ? (
            <div className="w-full flex flex-col gap-6 p-4">
              <div className="flex flex-row justify-start items-start gap-4">
                <ArrowLeft className="h-5 w-5" />{" "}
                <span className="text-base font-bold">Post</span>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2">
                <div className="w-full flex flex-row items-start justify-between">
                  <div className="flex flex-row justify-center items-start gap-1">
                    <img
                      src="/assets/elon.png"
                      alt="Elon Musk"
                      height={50}
                      width={50}
                    />
                    <div className="w-full flex flex-col justify-center items-start">
                      <p className="w-full text-[14px] font-bold flex flex-row justify-center items-center gap-1">
                        Elon Musk{" "}
                        <BadgeCheck
                          className="text-black h-5 w-5"
                          fill="#1C9BEF"
                        />
                      </p>
                      <p className="font-[400] text-[12px] text-[#A0A0A0]">
                        @elonmusk
                      </p>
                    </div>
                  </div>
                  <Ellipsis className="h-4 w-4" />
                </div>
                <div className="w-full">
                  <Skeleton count={3} />
                </div>
                <div className="w-full flex flex-row justify-start items-center">
                  <p className="text-[#71767B] text-[10px] font-[600]">
                    <Skeleton width={50} />
                  </p>
                  <Dot className="h-3 w-3" />
                  <p className="text-[#71767B] text-[10px] font-[600]">
                    <Skeleton width={75} />
                  </p>
                  <Dot className="h-3 w-3" />
                  <p className="flex flex-row justify-center items-center gap-1 text-[#71767B] text-[10px] font-[600]">
                    <Skeleton width={25} />
                    Views
                  </p>
                </div>
                <hr className="border-[#71767B] w-full" />
                <div className="w-full flex flex-row justify-between items-center my-2">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <MessageCircle className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      <Skeleton width={20} />
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Repeat2 className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      <Skeleton width={20} />
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Heart className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      <Skeleton width={20} />
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Bookmark className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      <Skeleton width={20} />
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Share className="text-[#71767B] h-5 w-5" />
                  </div>
                </div>
                <hr className="border-[#71767B] w-full" />
              </div>
              <div className="flex flex-row justify-center items-center">
                <span className=" text-[#FFFFFF66] text-xs font-[600] text-center">
                  &copy; chai aur code
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-6 p-4">
              <div className="flex flex-row justify-start items-start gap-4">
                <ArrowLeft className="h-5 w-5" />{" "}
                <span className="text-base font-bold">Post</span>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2">
                <div className="w-full flex flex-row items-start justify-between">
                  <div className="flex flex-row justify-center items-start gap-1">
                    <img
                      src="/assets/elon.png"
                      alt="Elon Musk"
                      height={50}
                      width={50}
                    />
                    <div className="w-full flex flex-col justify-center items-start">
                      <p className="w-full text-[14px] font-bold flex flex-row justify-center items-center gap-1">
                        Elon Musk{" "}
                        <BadgeCheck
                          className="text-black h-5 w-5"
                          fill="#1C9BEF"
                        />
                      </p>
                      <p className="font-[400] text-[12px] text-[#A0A0A0]">
                        @elonmusk
                      </p>
                    </div>
                  </div>
                  <Ellipsis className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[#FFFFFF] font-[400] text-[14px]">
                    {jokeData?.content}
                  </p>
                </div>
                <div className="w-full flex flex-row justify-start items-center">
                  <p className="text-[#71767B] text-[10px] font-[600]">
                    {parsedTime}
                  </p>
                  <Dot className="h-3 w-3" />
                  <p className="text-[#71767B] text-[10px] font-[600]">
                    {parsedDate}
                  </p>
                  <Dot className="h-3 w-3" />
                  <p className="text-[#71767B] text-[10px] font-[600]">
                    <span className="text-white">{views}M</span> Views
                  </p>
                </div>
                <hr className="border-[#71767B] w-full" />
                <div className="w-full flex flex-row justify-between items-center my-2">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <MessageCircle className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      {comments}k
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Repeat2 className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      {retweets}k
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Heart className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      {likes}k
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Bookmark className="text-[#71767B] h-5 w-5" />{" "}
                    <span className="text-[#71767B] text-[8px] font-p400]">
                      {bookmarks}k
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Share className="text-[#71767B] h-5 w-5" />
                  </div>
                </div>
                <hr className="border-[#71767B] w-full" />
              </div>
              <div className="flex flex-row justify-center items-center">
                <span className=" text-[#FFFFFF66] text-xs font-[600] text-center">
                  &copy; chai aur code
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Logo />
      </div>
    </div>
  );
}

export default RandomJokes;
