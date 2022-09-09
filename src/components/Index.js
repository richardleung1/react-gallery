import { useState, useEffect } from "react";
import { getCuratedPhotos } from "../services/pexels-api";
import { createPhoto } from "../services/gallery-api";

export default function Index() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (e) => {
    const data = photos[parseInt(e.target.name)];
    const photoData = {
      id: data.id,
      url: data.url,
      photographer: data.photographer,
      photographer_url: data.photographer_url,
      alt: data.alt,
      src: [data.src.large, data.src.tiny],
    };
    createPhoto(photoData);
    console.log(photoData);
  };

  useEffect(() => {
    getCuratedPhotos().then((response) => {
      setPhotos(response);
    });
  }, []);

  return (
    <div>
      <ul className="gallery">
        {photos.map((photo, index) => {
          return (
            <li>
              <a href={`/${photo.id}`}>
              <img
                src={photo.src.tiny}
                alt={photo.alt}
                onClick={addPhoto}
                name={index}
              />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
