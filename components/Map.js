import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

const style = {
  map: `w-full h-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
mapboxgl.style = "mapbox://styles/urtheaman/cl13vojmy000314lba6ocdid2";
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/urtheaman/cl13vojmy000314lba6ocdid2",
      center: [-74.5, 40],
      attributionControl: false,
      zoom: 9,
    });
  });
  return <div className={style.map} id="map"></div>;
};

export default Map;
