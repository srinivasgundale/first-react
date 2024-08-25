import React, { useState } from "react";
import axios from "axios";
import "daisyui/dist/full.css";

const products = {
  shirts: [
    {
      id: 1,
      name: "Red Shirt",
      description: "a red shirt",
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Red+Shirt",
    },
    {
      id: 2,
      name: "Blue Shirt",
      description: "a blue shirt",
      image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue+Shirt",
    },
  ],
  pants: [
    {
      id: 1,
      name: "Black Pants",
      description: "black pants",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Black+Pants",
    },
    {
      id: 2,
      name: "Blue Jeans",
      description: "blue jeans",
      image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue+Jeans",
    },
  ],
};

function AiComm() {
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [selectedPant, setSelectedPant] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShirtSelect = (shirt) => setSelectedShirt(shirt);
  const handlePantSelect = (pant) => setSelectedPant(pant);

  const generateImage = async () => {
    if (!selectedShirt || !selectedPant) return;

    setLoading(true);
    try {
      const payload = {
        prompt: `a model wearing ${selectedShirt.description} and ${selectedPant.description}`,
        output_format: "webp",
      };
      // Creating FormData manually in the browser environment
      const formData = new FormData();
      formData.append("prompt", payload.prompt);
      formData.append("output_format", payload.output_format);

      const response = await axios.post(
        "https://api.stability.ai/v2beta/stable-image/generate/ultra",
        formData,
        {
          headers: {
            Authorization: `Bearer sk-Te9fjk1mj3Y2ioKZhXreIUfj6Ieg1P31wkTUXLDsB5vvk99w`, // Replace with your API key
            Accept: "image/*",
          },
          responseType: "blob", // Ensure the response is in binary form
        }
      );

      if (response.status === 200) {
        // Create a blob URL for the image to be used in an img tag
        const imageBlob = new Blob([response.data], { type: "image/webp" });
        const imageUrl = URL.createObjectURL(imageBlob);
        setGeneratedImage(imageUrl);
      } else {
        throw new Error(`${response.status}: ${response.data}`);
      }
    } catch (error) {
      console.log("🚀 ~ generateImage ~ error:", error);
    } finally {
      setLoading(false);
    }
    // try {
    //   const response = await axios.post(
    //     "https://api.deepai.org/api/text2img",
    //     {
    //       text: `a model wearing ${selectedShirt.description} and ${selectedPant.description}`,
    //     },
    //     {
    //       headers: {
    //         "Api-Key": "sk-Te9fjk1mj3Y2ioKZhXreIUfj6Ieg1P31wkTUXLDsB5vvk99w", // Replace with your DeepAI API key
    //       },
    //     }
    //   );
    //   setGeneratedImage(response.data.output_url);
    // } catch (error) {
    //   console.error("Error generating image:", error);
    // }
    // setLoading(false);
  };

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Select Shirt</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {products.shirts.map((shirt) => (
          <button
            key={shirt.id}
            className="btn btn-outline"
            onClick={() => handleShirtSelect(shirt)}
          >
            <img src={shirt.image} alt={shirt.name} className="w-full h-full" />
            <p className="mt-2">{shirt.name}</p>
          </button>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold">Select Pant</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {products.pants.map((pant) => (
          <button
            key={pant.id}
            className="btn btn-outline"
            onClick={() => handlePantSelect(pant)}
          >
            <img src={pant.image} alt={pant.name} className="w-full h-full" />
            <p className="mt-2">{pant.name}</p>
          </button>
        ))}
      </div>

      {selectedShirt && selectedPant && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Selected Outfit</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-64 shadow-xl card bg-base-100">
              <img
                src={selectedShirt.image}
                alt={selectedShirt.name}
                className="w-full h-auto"
              />
              <div className="card-body">
                <h3 className="card-title">{selectedShirt.name}</h3>
              </div>
            </div>
            <div className="w-64 shadow-xl card bg-base-100">
              <img
                src={selectedPant.image}
                alt={selectedPant.name}
                className="w-full h-auto"
              />
              <div className="card-body">
                <h3 className="card-title">{selectedPant.name}</h3>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              className="btn btn-primary"
              onClick={generateImage}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </div>
        </div>
      )}

      {generatedImage && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
            Model Wearing Selected Outfit
          </h2>
          <div className="flex justify-center">
            <img
              src={generatedImage}
              alt="Model wearing selected outfit"
              className="w-1/2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AiComm;
