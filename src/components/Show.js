import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPhoto, deletePhoto } from "../services/gallery-api";

export default function Show() {
  const nav = useNavigate();
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    getPhoto(id).then((response) => setPhoto(response.data[0]));
  }, []);

  const deleteThePhoto = () => {
    deletePhoto(id);
    nav("/");
  };

  return (
    <div>
      <a href={photo.url}>
        <img src={photo.src} alt={photo.alt} />
      </a>
      <a href={photo.url}>
        <h3>{photo.alt}</h3>
      </a>
      <h4>
        by <a href={photo.photographer_url}>{photo.photographer}</a>
      </h4>
      <h5>{photo.description}</h5>
      <button
        onClick={() => {
          nav(`./edit`);
        }}
      >
        Edit
      </button>
      <br />
      <button onClick={deleteThePhoto}>Remove from Recent</button>
    </div>
  );
}
