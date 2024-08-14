import { ArrowLeft, MapPin, Phone, RotateCw } from "lucide-react";
import { Logo, Navbar } from "./";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";
import getParsedMonth from "../utils/getParsedMonth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RandomUser() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
      .then((response) => {
        if (response.statusText === "OK") {
          return response.data.data;
        }
      })
      .then((data) => setUserData(data))
      .catch((error) => console.error(error.message))
      .finally(() => {
        setLoading(false);
        setRefresh(false);
      });
  }, [refresh]);

  const parseDate = (date) => {
    const parsedDate = new Date(date).getDate();
    let parsedMonth = getParsedMonth(new Date(date).getMonth());
    const parsedYear = new Date(date).getFullYear();

    return `${parsedDate} ${parsedMonth}, ${parsedYear}`;
  };

  return (
    <div
      style={{ backgroundImage: `url("/assets/bg1.png")` }}
      className={`relative min-w-screen min-h-screen bg-black bg-cover md:bg-contain flex flex-wrap justify-center items-center`}
    >
      <Navbar className="absolute top-0 bottom-0 left-0 right-0" />
      {loading ? (
        <div className="relative border-8 border-white rounded-xl bg-[#B6B3F3] w-3/4 sm:w-2/4 md:w-2/4 lg:w-2/6 flex flex-col justify-center items-center gap-6 p-2">
          <div className="w-full flex flex-row justify-around items-center mt-2">
            <ArrowLeft className="h-5 w-5" />
            <p className="text-[#000000B2] font-serif text-base font-normal">
              Profile Overview
            </p>
            <RotateCw
              onClick={() => setRefresh(true)}
              className="h-5 w-5 cursor-pointer"
            />
          </div>
          <div className="relative w-full flex flex-col justify-center items-center gap-6">
            <div className="relative py-4 w-full flex flex-col justify-center items-center">
              <div className="relative p-3">
                <span className="absolute text-xs text-white rounded-xl px-1 right-0 top-0">
                  <Skeleton width={25} />
                </span>
                <div className="w-full rounded-full">
                  <Skeleton height={100} width={100} circle />
                </div>
              </div>
              <p className="flex flex-row justify-center items-center gap-2 text-xl sm:text-2xl font-mono text-center">
                <Skeleton width={100} />
                <Skeleton width={100} />
              </p>
              <p className="text-xs font-sans">
                <Skeleton width={100} />
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <hr className="w-11/12 border-[#00000014]" />
              <div className="flex flex-wrap flex-row justify-center items-center gap-8">
                <Link className="pointer-events-none cursor-auto flex flex-row justify-center items-center gap-2">
                  <MapPin className="h-5 w-5" />{" "}
                  <span className="text-xs font-sans">Location</span>
                </Link>
                <Link className="pointer-events-none cursor-auto flex flex-row justify-center items-center gap-2">
                  <Phone className="h-5 w-5" />{" "}
                  <span className="text-xs font-sans">Call me</span>
                </Link>
              </div>

              <hr className="w-11/12 border-[#00000014]" />
            </div>
            <div className="w-full flex flex-row items-center justify-around">
              <div className="flex flex-col w-1/2">
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    City
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    <Skeleton width={100} />
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Date of birth
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    <Skeleton width={100} />
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Time Zone
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    <Skeleton width={100} />
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-1/">
                <div className="w-full">
                  <span className="text-xs text-[#000000B2] font-serif">
                    Nationality
                  </span>
                  <div className="flex flex-row justify-start items-start gap-1">
                    <Skeleton width={25} />
                    <p className="text-[#000000B2] sm:text-lg font-serif">
                      <Skeleton width={75} />
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Phone No.
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    <Skeleton width={100} />
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Registered since
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    <Skeleton width={100} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-row justify-between items-end mb-2">
            <span className="text-white bottom-0 left-0 right-0 text-center absolute">
              &copy; chai aur code
            </span>
            <Logo />
          </div>
        </div>
      ) : (
        <div className="relative border-8 border-white rounded-xl bg-[#B6B3F3] w-3/4 sm:w-2/4 md:w-2/4 lg:w-2/6 flex flex-col justify-center items-center gap-6 p-2">
          <div className="w-full flex flex-row justify-around items-center mt-2">
            <ArrowLeft className="h-5 w-5" />
            <p className="text-[#000000B2] font-serif text-base font-normal">
              Profile Overview
            </p>
            <RotateCw
              onClick={() => setRefresh(true)}
              className="h-5 w-5 cursor-pointer"
            />
          </div>
          <div className="relative w-full flex flex-col justify-center items-center gap-6">
            <div className="relative py-4 w-full flex flex-col justify-center items-center">
              <div className="relative p-3">
                <span className="absolute bg-black text-xs text-white rounded-xl px-1 right-0 top-0">
                  {userData?.name?.title || <Skeleton />}
                </span>
                <img
                  src={userData?.picture?.large || ""}
                  alt="profile image"
                  height={100}
                  width={100}
                  className="rounded-full shadow-2xl"
                />
              </div>
              <p className="text-xl sm:text-2xl font-mono text-center">{`${
                userData?.name?.first || "Mukul"
              } ${userData.name?.last || "Padwal"}`}</p>
              <p className="text-xs font-sans">
                {userData?.login?.username || <Skeleton />}
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <hr className="w-11/12 border-[#00000014]" />
              <div className="flex flex-wrap flex-row justify-center items-center gap-8">
                <Link
                  target="_blank"
                  to={`https://maps.google.com/?q=${userData?.location?.coordinates?.latitude},${userData?.location?.coordinates?.longitude}`}
                  className="flex flex-row justify-center items-center gap-2"
                >
                  <MapPin className="h-5 w-5" />{" "}
                  <span className="text-xs font-sans">Location</span>
                </Link>
                <Link
                  target="_blank"
                  to={`tel:${userData?.cell}`}
                  className="flex flex-row justify-center items-center gap-2"
                >
                  <Phone className="h-5 w-5" />{" "}
                  <span className="text-xs font-sans">Call me</span>
                </Link>
              </div>

              <hr className="w-11/12 border-[#00000014]" />
            </div>
            <div className="w-full flex flex-row items-center justify-around">
              <div className="flex flex-col w-1/2">
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    City
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    {userData?.location?.city || "Dalhousie"}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Date of birth
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    {parseDate(userData?.dob?.date)}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Time Zone
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">{`${userData?.location?.timezone?.offset} (${userData?.location?.timezone?.description})`}</p>
                </div>
              </div>
              <div className="flex flex-col w-1/">
                <div className="w-full">
                  <span className="text-xs text-[#000000B2] font-serif">
                    Nationality
                  </span>
                  <div className="flex flex-row justify-start items-start gap-1">
                    <ReactCountryFlag
                      countryCode={userData.nat}
                      style={{ fontSize: "1em" }}
                      svg
                    />
                    <p className="text-[#000000B2] sm:text-lg font-serif">
                      {userData.nat}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Phone No.
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    {userData.phone}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#000000B2] font-serif">
                    Registered since
                  </span>
                  <p className="text-[#000000B2] sm:text-lg font-serif">
                    {parseDate(userData?.registered?.date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-row justify-between items-end mb-2">
            <span className="text-white bottom-0 left-0 right-0 text-center absolute">
              &copy; chai aur code
            </span>
            <Logo />
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomUser;
