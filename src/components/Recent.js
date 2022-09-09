import { useState, useEffect } from "react";
import { getRecentPhotos } from "../services/gallery-api";

export default function Recent() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getRecentPhotos().then((response) => setPhotos(response.data));
  }, []);

  return (
    <div>
      <ul className="gallery">
        {photos.map((photo) => {
          return (
            <li>
              <a href={`/${photo._id}`}>
                <img src={photo.src[1]} alt={photo.alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
