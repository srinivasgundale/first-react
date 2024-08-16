import React, { useState, useEffect } from "react";

export const HomeBanner = () => {
  const [banners, setBanners] = useState([]);
  
  const fetchData = async (color) => {
    try {
      const response = await fetch(`https://dummyjson.com/image/300x400/${color}`);
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

  return (
    <>
      {banners.length === 0 ? (
        <div className="skeleton h-40 w-full"></div>
      ) : (
        <div className="carousel rounded-box">
          {banners.map((banner, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={banner} // Use the object URL
                alt={`Banner ${index}`}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
