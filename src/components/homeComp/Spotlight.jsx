import { elevenLabImg, slantArrow } from "../../assets";

const Spotlight = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${elevenLabImg})`,
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="flex flex-col gap-4  w-full md:w-[30rem] h-screen md:h-full p-4 border-mid2Gray border rounded-2xl ">
      <div
        className="child-1 w-full md:h-full border rounded-2xl relative"
        style={backgroundImageStyle}
      >
        {/* Background overlay for shadow effect */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

        {/* Content */}
        <div className="flex items-center justify-center text-white font-bold w-full h-full">
          <h1 className="sp-text text-lg">ElevenLabs</h1>
        </div>
      </div>










      {/* _______________________________ SPOTLIGHT SECTION ___________________________ */}
      <div className="child-2 w-full h-full md:h-full rounded-2xl">
        <h4 className="text-gray-400">This Week Spotlight</h4>
        <div>
          {/* todo->>>__________________  CHANGE THE LIST TO MAP INSTEAD OF REPEATING CODE _________________ */}
          <ul className="my-4 space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base bg-midGray"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 ">
                    <span className="spotlight-text ms-2 text-white font-normal">
                      ChatGPT
                    </span>

                    <span className="spotlight-tag inline-flex font-redHatDisplay text-gray-400 items-center justify-center px-2 py-0.5 text-xs font-thin rounded bg-midGray shadow-2xl ring-1 ring-mid2Gray">
                      Search Engine
                    </span>
                  </div>

                  <span className="inline-flex items-center justify-center px-2 py-0.5">
                    <img src={slantArrow} />
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base bg-midGray"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 ">
                    <span className="spotlight-text ms-2 text-white font-normal">
                      {" "}
                      Synthesis{" "}
                    </span>

                    <span className="spotlight-tag inline-flex font-redHatDisplay  text-gray-400 items-center justify-center px-2 py-0.5 text-xs font-thin rounded bg-midGray shadow-2xl ring-1 ring-mid2Gray ">
                      Video
                    </span>
                  </div>

                  <span className="inline-flex items-center justify-center px-2 py-0.5 ">
                    <img src={slantArrow} />
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base bg-midGray"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 ">
                    <span className="spotlight-text ms-2 text-white font-normal">
                      {" "}
                      LetsAsk{" "}
                    </span>

                    <span className="spotlight-tag inline-flex font-redHatDisplay  text-gray-400 items-center justify-center px-2 py-0.5 text-xs font-thin bg-midGray shadow-2xl ring-1 rounded ring-mid2Gray ">
                      Customer Support
                    </span>
                  </div>

                  <span className="inline-flex items-center justify-center px-2 py-0.5">
                    <img src={slantArrow} />
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
