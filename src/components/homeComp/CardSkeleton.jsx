import Skeleton from "react-loading-skeleton";


//should be same structure as what youre trying to acheive 
const CardSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((item, index) => 
      // <div className="card-skeleton" key={index}>
      //      {/* user avatar */}
      //   <div className="left-col">
      //     <Skeleton circle width={40} height={40} />
      //   </div>

      //   <div className="right-col">
      //     <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
      //   </div>
      // </div>




   <div className="card-skeleton" key={index}>
           {/* user avatar */}
        <div className="left-col">
          <Skeleton circle width={40} height={40} />
        </div>

        <div className="right-col">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    );
};



export default CardSkeleton;