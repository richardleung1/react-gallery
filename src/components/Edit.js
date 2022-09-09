import { getPhoto, editPhoto } from "../services/gallery-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getPhoto(id).then((res) => setData(res.data));
  }, []);

  const editThePhoto = (e) => {
    e.preventDefault();

    const updatedPhoto = {
      alt: e.target.alt.value,
      description: e.target.description.value,
    };

    editPhoto(id, updatedPhoto);
    nav(`/${id}`);
  };

  return (
    <div>
      <form onSubmit={editThePhoto}>
        <input
          type="text"
          name="alt"
          defaultValue={data.alt}
          placeholder="Alt"
        />
        <input
          type="text"
          name="description"
          defaultValue={data.description}
          placeholder="Description"
        />
        <input type="submit" />
      </form>
      <br />
      <button onClick={() => nav("/")}>Back To Recently Viewed</button>
      <br />
      <button onClick={() => nav(`/${id}`)}>Back To Photo</button>
    </div>
  );
};

export default Edit;
