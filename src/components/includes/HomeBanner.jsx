import React, { useState, useEffect } from "react";

export const HomeBanner = () => {
  const [banners, setBanners] = useState([]);
  
  const fetchData = async (color) => {
    try {
      const response = await fetch(`https://dummyjson.com/image/800x200/${color}`);
      const data = await response.blob();
      const objectUrl = URL.createObjectURL(data);
      return objectUrl;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; // Handle errors by returning null
    }
  };

  const fetchMultipleTimes = async () => {
    try {
      const colors = [
        '25BDE6',
        'ED96B5',
        'FFE84E',
        '25BDE6',
        'ED96B5'
      ]; 
      const promises = colors.map(color => fetchData(color));
      const results = await Promise.all(promises);
      return results.filter(result => result !== null); // Filter out any null results
    } catch (error) {
      console.error('Error fetching multiple times:', error);
      return []; // Return an empty array in case of error
    }
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      const data = await fetchMultipleTimes();
      setBanners(data); // Set the state with the fetched data
    };

    fetchAndSetData();
  }, []);
  console.log(banners.length);
  return (
    
    <>
      {banners.length === 0 ? (
  <div className="skeleton h-40 w-full"></div>
) : (
  <div className="carousel w-full">
    {banners.map((banner, index) => (
      <div
        id={`slide${index + 1}`}
        key={index}
        className="carousel-item relative w-full"
      >
        <img src={banner} className="w-full" alt={`Slide ${index + 1}`} />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href={`#slide${index === 0 ? banners.length : index}`}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href={`#slide${(index + 1) % banners.length + 1}`}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    ))}
  </div>
)}

    </>
  );
};
