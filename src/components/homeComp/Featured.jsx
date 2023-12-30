// import { chatGPTImg, evolutionImg, arrowCircleRight } from "../../assets";
import { chatGPTImg, arrowCircleRight } from "../../assets";
import { useEffect } from "react";
import AOS from "aos";
import FeaturedSkeleton from "../skeletons/FeaturedSkeleton";
import { useFeaturedArticles } from "../../hooks/useAxios";

const Featured = () => {
  const { isLoading, featuredItems } = useFeaturedArticles();

  useEffect(() => {
    // Refresh AOS whenever your component mounts/updates
    AOS.init();
  }, []);

  return (
    <section className="featured-wrapper flex flex-col gap-4 w-full h-auto md:w-1/3 md:ml-10 md:mr-4">
      <div>
        <p className="text-gray-400 text-lg sm:text-xl"> Featured Articles</p>
      </div>

      {isLoading ? (
        <FeaturedSkeleton />
      ) : (
        <div className="featured w-full flex flex-col justify-center items-center gap-8 md:h-[400px]">
          {featuredItems.map((article, index) => {
            const imagePlaceholder = article.urlToImage || chatGPTImg;

            // Formatting the publishedAt date
            const formattedDate = new Date(
              article.publishedAt
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });

            return (
              <div
                key={index}
                className="featured-child1 relative w-full flex justify-center items-center overflow-hidden rounded-xl "
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  // src={article.urlToImage}
                  src={imagePlaceholder}
                  className="w-full object-cover "
                />

                <div className="text-content absolute w-full p-4 bottom-0 bg-midGray rounded-b-xl">
                  <p className="text-secondary">{formattedDate}</p>
                  <h2 className="text-white">{article.title}</h2>

                  <div className="sm:flex font-redHatDisplay text-sm md:text-base font-bold float-right">
                    <a
                      href="#"
                      className="flex rounded-lg text-gray-400 text-sm items-center"
                      style={{ gap: "4px" }}
                    >
                      <p style={{ marginRight: "0px" }}> Read more </p>
                      <img
                        src={arrowCircleRight}
                        className="w-5 h-5"
                        alt="grid discover"
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Featured;
