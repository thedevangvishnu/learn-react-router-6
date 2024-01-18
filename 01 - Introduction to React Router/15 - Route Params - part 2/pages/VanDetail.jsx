import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div>
      {van ? (
        <div>
          <img src={van.imageUrl} alt="" />
          <h2>{van.name}</h2>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
