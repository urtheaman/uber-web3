import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  map: `w-full h-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/urtheaman/cl13vojmy000314lba6ocdid2",
      center: [-99.29011, 39.39172],
      attributionControl: false,
      zoom: 3,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 100,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };
  return <div className={style.map} id="map" />;
};

export default Map;
