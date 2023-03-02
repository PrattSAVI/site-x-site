import React, { useContext } from "react";
import { MapContext } from "../../pages/part1";
import ozone_photo from "../../public/images/part1/ozone_photo_min.jpg";
import far_hist from "../../public/images/part1/far_hist.svg";
import lot_hist from "../../public/images/part1/lot_hist.svg";
import ImageExtended from "../../components/ImageExtended";
import Text from "../../components/Text";
import { Link } from "react-router-dom";
import { 
  secOneloadSizeFarShowCEQR,
  secOneloadSizeFarShowOzone
 } from "../../components/Map/mapViews";

function SecOneloadSizeFarSideBar() {
  const {
    map,
    displayBoxChart,
    hideBoxChart,
    handleLegend,
    farValue,
    lotValue,
    handleFarValue,
    handleLotValue,
  } = useContext(MapContext);
  

  const handleMapFilter = () => {

    map.current.setFilter('pluto_recdev_no_soft', [
      "any",
      ['<', 'availFAR_perc_12', farValue],
      ['<', 'LotArea_12', lotValue]
    ]);
  };

  return (
    <div className="sidebar">
      <div className="title size">CEQR STEP 1 <br />Size and FAR</div>
      <div id="popuptext" className="puma-header"></div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            {/* legend = ceqr_section */}
            <button
              className="accordion-button one-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() => {
                hideBoxChart();
                secOneloadSizeFarShowCEQR(map);
                handleLegend(true, "secOneloadSizeFar");
              }}
            >
              Explore Current CEQR Thresholds
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="sidep">
              The <i>Technical Manual’s</i> criteria screens lots according to size and density (bulk). 
              If a lot has an area larger than 5,000 square feet and a substantial amount of 
              available unbuilt floor area, then it is sufficiently large and underbuilt 
              to be considered for future development. Site by Site uses the thresholds ≥5,000 square 
              feet and ≥50% available <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">FAR</Link>. A low % FAR indicates a building that is close to reaching 
              the maximum allowable density on the lot.
              </p>
              <Text as="p" variant="sideBold" mb="5px" >Lot Size</Text>
              <ImageExtended src={lot_hist} mb="5px" />
              <Text as="p" variant="sideBold" mt="20px" mb="5px" >Available Floor Area Ratio</Text>
              <ImageExtended src={far_hist} mb="5px" />
              <p className="lastp">See Step 2b: Rezonings to reference neighborhood rezonings from 2012-2022.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            {/* no function, the map automatically updates when the sliders are adjusted
					I will style the slider */}
            <button
              className="accordion-button one-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={() => {
                secOneloadSizeFarShowCEQR(map);
                handleMapFilter();
                handleLegend(true, "secOneloadSizeFar2");
              }}
            >
              Adjust the parameters
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <p className="sidep">
                Our analysis finds that the size and bulk of recently developed
                lots (newly constructed or subject to a <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">merger</Link>) varies widely
                across the five boroughs, which can be explored in the map using
                the sliders below. 
              </p>
              <p className="hist">Lot Size:</p>
              <p className="slider-value">{ lotValue.toLocaleString("en-US") } SF</p>
              <div className="lot_slidecontainer range-wrap">
                <input
                  type="range"
                  min="0"
                  max="20000"
                  className="slider range"
                  id="lot-filter-input"
                  value={lotValue}
                  onChange={(e) => {
                    e.preventDefault();
                    handleLotValue(parseInt(e.target.value));
                    handleMapFilter();
                  }}
                ></input>
                <p className="minp">0</p>
                <p className="maxp">20,000</p>
              </div>
              <p className="hist">Available Floor Area Ratio (buildable SF):</p>
              <p className="slider-value">{ farValue }%</p>
              <div className="far_slidecontainer range-wrap">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="slider range"
                  id="far-filter-input"
                  value={farValue}
                  onChange={(e) => {
                    e.preventDefault();
                    handleFarValue(parseInt(e.target.value));
                    handleMapFilter();
                  }}
                ></input>
                <p className="minp">0%</p>
                <p className="maxp">100%</p>
                {/* <output className="bubble"></output> */}
              </div>
              {/* <p className="sidep">
                Our analysis finds that the size and bulk of recently developed
                lots (newly constructed or subject to a <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">merger</Link>) varies widely
                across the five boroughs, which can be explored in the map using
                the sliders above. 
              </p> */}
              {/* <Text as="p" variant="sideBold" mb="5px" >Lot Size</Text>
              <ImageExtended src={lot_hist} mb="5px" />
              <Text as="p" variant="sideBold" mt="20px" mb="5px" >Available Floor Area Ratio</Text>
              <ImageExtended src={far_hist} mb="5px" /> */}

              <div className='chartToggle'>
                <div className="form-check">
                  <input
                    className="form-check-input bar-chart"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => displayBoxChart()}
                  ></input>
                  <label className="form-check-label chart-label sidep" htmlFor="flexRadioDefault1">
                  Show PUMA comparison chart
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input bar-chart"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    // checked
                    onClick={() => hideBoxChart()}
                  ></input>
                  <label className="form-check-label sidep" htmlFor="flexRadioDefault2">
                    Show map
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button one-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              // onClick={() => secOneloadSizeFarShowOzone(map)}
              onClick={() => {
                hideBoxChart();
                secOneloadSizeFarShowOzone(map);
                handleLegend(true, "secOneloadSizeFar3");
              }}
            >
              Case Study: Ozone Park (2013)
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Text as="p" variant="sidep" mb="5px" >
              The Ozone Park rezoning sought to guide development while preserving the character of the 
              neighborhood, particularly along low-rise residential mid-blocks. The rezoning also directed 
              mixed-use development along the area’s major corridors. CEQR projections significantly 
              overestimated the amount of residential development that was ultimately built. Less than 
              61 percent of the residential units anticipated under the plan were constructed. In addition, 
              contrary to the intentions of the rezoning, new development was not limited to major corridors. 
              Although the rezoning is largely characterized as a downzoning, many smaller residential 
              buildings were constructed along area mid-blocks. Overall, actual development more than 
              doubled CEQR estimations.
              </Text>
              <div>
                <div className="row size">
                  <div className="column num">
                    <p className="num">126</p>
                  </div>
                  <div className="column text"> lots were developed between 2012 and 2022 </div>
                </div>
                <div className="row size">
                  <div className="column num">
                    <p className="num">89</p>
                  </div>
                  <div className="column text"> developed lots did not fit CEQR soft site criteria</div>
                </div>
                <div className="row size">
                  <div className="column num">
                    <p className="num">55%</p>
                  </div>
                  <div className="column text"> in floor area derive from the lots that did not fit the criteria</div>
                </div>
              </div>
              <ImageExtended src={ozone_photo} width="calc(100% + 20px)" marginLeft="-20px" marginTop="10px" />
              <Text as="p" variant="sideCaption" mb="10px" ml="-10px" mt="2px" >
              80th Street and 101st Avenue, view of a block in R5 district, which allows three-and 
              four-story attached houses and small apartment houses with a height limit of 40 feet. Credit: RPA
              </Text>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecOneloadSizeFarSideBar;
