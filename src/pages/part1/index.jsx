import React, { useState, useRef, useEffect } from "react";
import Map from "../../components/Map";
import Navigation from "../../components/Navigation";
import Sidebar from "../../components/Sidebar";
import {
  ceqrIntro,
  secOneloadSizeFar,
  secTwoSocialNeigh,
  secThreeDevLimits,
} from "../../components/Map/mapViews";
import Boxchart from "../../components/Boxchart/index";
import Dotchart from "../../components/Dotchart";
import Legend from "../../components/Legend";

export const MapContext = React.createContext();

const PartOne = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [showDotchart, setShowDotchart] = useState(false);
  const [showBoxchart, setShowBoxchart] = useState(false);
  // const [showHexMaps, setShowHexMaps] = useState(false);
  const [showLegend, setShowLegend] = useState(false);
  const [legendIndex, setLegendIndex] = useState("");
  const [farValue, setFarValue] = useState(50);
  const [lotValue, setLotValue] = useState(5000);

  const [currentMap, setCurrentMap] = useState("ceqrIntro"); //Acceptable values: ceqrIntro, secOneloadSizeFar, secTwoSocialNeigh, secThreeDevLimits

  const handleMapChange = (mapString) => {
    setCurrentMap(mapString);
  };

  useEffect(() => {
    if (currentMap === "ceqrIntro") {
      ceqrIntro(mapRef);
      handleLegend(true, currentMap);
    } else if (currentMap === "secOneloadSizeFar") {
      secOneloadSizeFar(mapRef);
      handleLegend(true, currentMap);
    } else if (currentMap === "secTwoSocialNeigh") {
      secTwoSocialNeigh(mapRef);
      handleLegend(true, currentMap);
    } else if (currentMap === "secThreeDevLimits") {
      secThreeDevLimits(mapRef);
      handleLegend(true, currentMap);
    } else {
      console.log("Error: Invalid map string");
    }
  }, [currentMap]);

  const handleDotChart = () => {
    setShowDotchart(!showDotchart);
  };

  const handleBoxChart = () => {
    setShowBoxchart(true);
  };

  const removeBoxChart = () => {
    setShowBoxchart(false);
  };

  // const handleHexMaps = () => {
  //   setShowHexMaps(true);
  // };

  // const removeHexMaps = () => {
  //   setShowHexMaps(false);
  // };

  const handleFarValue = (value) => {
    setFarValue(value);
  };

  const handleLotValue = (value) => {
    setLotValue(value);
  };


  const handleLegend = (show, index) => {
    setShowLegend(show);
    setLegendIndex(index);
  };

  return (
    <MapContext.Provider
      value={{
        map: mapRef,
        displayDotChart: handleDotChart,
        displayBoxChart: handleBoxChart,
        hideBoxChart: removeBoxChart,
        // displayHexMaps: handleHexMaps,
        // hideHexMaps: removeHexMaps,
        displayLegend: handleLegend,
        handleLegend: handleLegend,
        legendIndex: legendIndex,
        farValue: farValue,
        lotValue: lotValue,
        handleFarValue: handleFarValue,
        handleLotValue: handleLotValue
      }}
    >
      <Map mapContainerRef={mapContainerRef} />
      <Navigation
        navType="section1"
        mapOnClick={handleMapChange}
        currentMap={currentMap}
      />
      {showBoxchart && <Boxchart far_value={farValue} lot_value={lotValue} />}
      {/* {showHexMaps && <Hexmap />} */}
      {showDotchart && <Dotchart />}
      {showLegend && <Legend />}
      <Sidebar currentMap={currentMap} />
    </MapContext.Provider>
  );
};

export default PartOne;
