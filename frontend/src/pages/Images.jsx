import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";

function App() {
  const [myImage, setMyImages] = useState([]);
  const [images, setImages] = useState({
    id: null,
    name: "",
    url: "",
  });

  const getAllImages = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/images`)
      .then((image) => setMyImages(image.data))
      .catch((error) => console.error(error));
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllImages();
  }, []);

  /**
   * Fonction qui gère le changement d'état des inputs
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newImages = { ...images };
    newImages[place] = value;
    setImages(newImages);
  };

  /**
   * Fonction qui gère l'ajout d'une nouvelle image
   */
  const handleAddImage = () => {
    delete images.id;
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/images`, {
        ...images,
      })
      .then((image) => {
        setImages(image.data);
        getAllImages();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la suppression d'une nouvelle image
  // const handleDeleteImages = () => {
  //   axios
  //     .delete(`${import.meta.env.VITE_BACKEND_URL}/Images/${images.id}`)
  //     .then(() => {
  //       setImages({
  //         id: null,
  //         uame: "",
  //         url: "",
  //       });
  //       getAllImages();
  //     })
  //     .catch((error) => console.error(error));
  // };

  // Fonction qui gère la suppression d'une nouvelle video
  // const handleUpdateImage = () => {
  //   axios
  //     .put(`${import.meta.env.VITE_BACKEND_URL}/images/${images.id}`, {
  //       ...images,
  //     })
  //     .then(() => getAllImages())
  //     .catch((error) => console.error(error));
  // };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      <SearchBarTemplate
        data={myImage}
        customWidth="cstm_width_XlInput"
        searchBarContainer="flex flex-col items-center w-full relative"
        textPlaceholder="Search image"
        textButton="Show image"
      />
      <div className="mt-10 flex flex-col items-center w-full gap-y-7">
        <InputTemplate
          textPlaceholder="Name"
          customWidth="cstm_width_XlInput"
          value={images.name}
          methodOnChange={handleInputOnChange}
          name="name"
        />
        <InputTemplate
          textPlaceholder="URL"
          customWidth="cstm_width_XlInput"
          value={images.url}
          methodOnChange={handleInputOnChange}
          name="url"
        />
      </div>
      <div>
        <button
          className="border-2 border-black"
          type="button"
          onClick={handleAddImage}
        >
          Add images
        </button>
      </div>
      <div>
        {myImage.map((image) => (
          <p>{image.name}</p>
        ))}
      </div>
    </form>
  );
}

export default App;
