import React, { useEffect, useContext } from "react";
import Box from "../Box";
import "../../styles/map.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxToken from "./mapboxToken";
import { zoomToNYC } from "./mapUtils";
import { MapContext } from "../../pages/part1";
//import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = mapboxToken;

const Map = ({ mapContainerRef }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/prattsavi/clcdtuf07000d15obmlbafjll",
      center: [-74.007919, 40.70204],
      zoom: 10,
    maxBounds: [[-74.68378, 40.47854],
                [-73.48021, 41.13637]]
    });
    map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

    return () => map.current.remove();
  }, []);

  return (
    <>
      <Box
        position="fixed"
        className="nyc"
        top="432px"
        left="30px"
        zIndex="1000"
        width="57px"
        height="30px"
        borderRadius="10pt"
        backgroundColor="transparent"
        color="#a3a199"
        border="1px solid #908E8E"
        textAlign="center"
        fontSize="19px"
        fontWeight="600"
        onClick={() => zoomToNYC(map)}
      >
        NYC
      </Box>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
};

export default Map;
