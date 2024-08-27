const ShimmerCards = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full p-4 mt-4 mb-4 rounded-lg h-50 bg-base md:w-1/4 md:mb-0 ">
        <div className="flex flex-col gap-4 w-90">
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 p-4 md:w-3/4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 w-90">
          <div className="w-full h-32 skeleton"></div>
          <div className="h-4 skeleton w-90"></div>
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
        </div>
        <div className="flex flex-col gap-4 w-90">
          <div className="w-full h-32 skeleton"></div>
          <div className="h-4 skeleton w-90"></div>
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
        </div>
        <div className="flex flex-col gap-4 w-90">
          <div className="w-full h-32 skeleton"></div>
          <div className="h-4 skeleton w-90"></div>
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
        </div>
      </div>
    </div>
    // <div className="container">
    //     <div className="row">
    //     <div className="col-md-4">

    //         <div className="shim-card">
    //         <div className="shimmerBG media"></div>
    //         <div className="p-32">
    //           <div className="shimmerBG title-line"></div>
    //           <div className="shimmerBG title-line end"></div>

    //           <div className="shimmerBG content-line m-t-24"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line end"></div>
    //         </div>
    //       </div>

    //     </div>
    //     <div className="col-md-4">

    //         <div className="shim-card">
    //         <div className="shimmerBG media"></div>
    //         <div className="p-32">
    //           <div className="shimmerBG title-line"></div>
    //           <div className="shimmerBG title-line end"></div>

    //           <div className="shimmerBG content-line m-t-24"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line end"></div>
    //         </div>
    //       </div>

    //     </div>
    //     <div className="col-md-4">

    //         <div className="shim-card">
    //         <div className="shimmerBG media"></div>
    //         <div className="p-32">
    //           <div className="shimmerBG title-line"></div>
    //           <div className="shimmerBG title-line end"></div>

    //           <div className="shimmerBG content-line m-t-24"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line"></div>
    //           <div className="shimmerBG content-line end"></div>
    //         </div>
    //       </div>

    //     </div>
    //     </div>
    // </div>
  );
};
export default ShimmerCards;
