import React, { useContext, useEffect } from "react";
import { MapContext } from "../../pages/part1";
import atlantic from "../../public/images/part1/atlantic.jpg";
import liberty from "../../public/images/part1/liberty.jpg";
import ImageExtended from "../../components/ImageExtended";
import { Link } from "react-router-dom";
import Text from "../../components/Text";
import {
  secTwoSocialNeighShowFull,
  secTwoSocialNeighShowMarket,
  secTwoSocialNeighShowPop,
  secTwoSocialNeighShowHousing,
  secTwoSocialNeighShowAssessed,
  // secTwoSocialMerged,
  secTwoSocialEastNY,
} from "../../components/Map/mapViews";

function SecTwoSocialNeighSideBar() {
  const { 
    map, 
    displayDotChart, 
    handleLegend ,
    hideBoxChart,
  } = useContext(MapContext);

  useEffect(() => {
    hideBoxChart();
  });

  return (
    <div className="sidebar">
      <div className="title dev_soft">CEQR STEP 2a <br /> Additional Development Considerations I</div>
      <Text  as="p" variant="sidep" className="intro-text" >
      The CEQR Technical Manual recommends additional attributes that affect the likelihood that a site will 
      be developed in the future. These attributes are more interpretive and enable a degree of discretion 
      on a project-by-project basis. Inconsistencies in analyses that may arise as a result speak to the need 
      for a more flexible, site-specific framework for evaluating development potential.
      </Text>
      <Text  as="p" variant="sidep" className="intro-text" >
      Development from City land use decisions can have unintended consequences, particularly in neighborhoods 
      with vulnerable populations. Additional factors such as market pressure and housing instability can contribute 
      to residential displacement risk.
      </Text>
      <div id="popuptext" className="puma-header"></div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button two-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              onClick={() => {
                // hideHexMaps();
                secTwoSocialNeighShowFull(map);
                handleLegend(true, "secTwoSocialNeigh");
              }}
            >
              Displacement Risk Map
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
              The City’s <a href="https://equitableexplorer.planning.nyc.gov/map/drm/nta?geoid=QN70" target="_blank"  rel="noopener noreferrer"  className="glossary-maplink">Displacement Risk Map</a>, 
              part of the Equitable Development Data Explorer 
              (EDDE), allows users to visualize displacement risk across neighborhoods based 
              on population vulnerability, housing conditions, and market pressure. SITE x SITE 
              adapts this map to show this information at the <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">PUMA</Link> level. The selections below can 
              be used to view the overall displacement risk index and the three indicators individually.
              </p>
            </div>
            <div className="mapToggle">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  // checked
                  onClick={() => {
                    // hideHexMaps();
                    secTwoSocialNeighShowFull(map);
                    handleLegend(true, "secTwoSocialNeigh");
                  }}
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Full Index
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onClick={() => {
                    // hideHexMaps();
                    secTwoSocialNeighShowMarket(map);
                    handleLegend(true, "secTwoSocialNeigh2"); 
                  }}
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Market Pressure
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  onClick={(e) => {
                    secTwoSocialNeighShowPop(map);
                    handleLegend(true, "secTwoSocialNeigh3"); 
                  }}
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Population Vulnerability
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  onClick={() => {
                    // hideHexMaps();
                    secTwoSocialNeighShowHousing(map);
                    handleLegend(true, "secTwoSocialNeigh4"); 
                  }}
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Housing Conditions
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button two-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={() => {
                // hideHexMaps();
                displayDotChart();
              }}
            >
              Displacement Risk, compare areas in a chart
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
                This plot can be used to visualize how displacement risk
                indicators compare across neighborhoods. Neighborhoods are ranked
                according to level of vulnerability ranging from lowest to
                highest. The citywide median is also included for reference. Use
                the dropdown menu to select neighborhoods to highlight in the
                plot.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button two-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={() => {
                displayHexMaps();
                handleLegend(true, "secTwoSocialNeigh4pt5");
              }}
            >
              Building + Alteration Permits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="sidep">
              NYC Department of Buildings (DOB) permits are required to allow construction, alteration, or demolition 
              of a building. These three maps show the citywide distribution of DOB permits that were approved between 
              2012 and 2022. Darker areas show a higher density of issued permits, indicating likely development hot 
              spots. In this map view, “Alterations Type 1” refers to major alterations that require a new Certificate 
              of Occupancy. These alterations include projects ranging from commercial-to-residential conversions to 
              the addition of a floor to a building. Note: As mentioned in Part I, permits are not included in the SITE 
              x SITE analysis of recent development because of uncertainty in the associated data.
              </p>
            </div>
          </div>
        </div> */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button two-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              onClick={() => {
                // hideHexMaps();
                secTwoSocialNeighShowAssessed(map);
                handleLegend(true, "secTwoSocialNeigh5");
              }}
            >
              Improvement to Land Value Ratio
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="sidep">
              The <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">improvement to land value ratio</Link> indicates the percent difference between the value of a 
              property if it were vacant and unimproved (the assessed land value) and its estimated actual 
              market value (assessed total value). A lower improvement ratio generally indicates an underutilized lot.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button two-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              onClick={() => {
                hideHexMaps();
                secTwoSocialMerged(map);
                handleLegend(true, "secTwoSocialNeigh7");
              }}
            >
              Merged Tax Lots & Air Rights Transfers
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="sidep">
              In SITE x SITE, tax lots that increased in size are assumed to have undergone tax lot mergers. 
              Air rights transfers, meanwhile, are a key mechanism in New York City’s development. This map 
              highlights tax lots that were merged or involved in air rights transfers according to property 
              records in the City Register. 
              </p>
            </div>
          </div>
        </div> */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button two-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              onClick={() => {
                // hideHexMaps();
                secTwoSocialEastNY(map);
                handleLegend(true, "secTwoSocialNeigh8");
              }}
            >
              Case Study: East New York (2016)
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="sidep">
              The 2016 East New York Neighborhood Plan was the first neighborhood rezoning to implement Mandatory 
              Inclusionary Housing (<Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">MIH</Link>), which requires at least 25 percent of new residential floor area under 
              a rezoning to be permanently affordable. Though the City pledged 1,200 affordable housing units by 
              2018, just over 100 new units of housing were open to tenants by the end of 2021. Community groups 
              fear that market-rate development is outpacing affordable housing; the median rent jumped 29 percent 
              since the rezoning’s implementation through the end of 2021.  According to the City’s Equitable 
              Development Data Explorer 
              <a href="https://equitableexplorer.planning.nyc.gov/map/drm/nta?geoid=QN70" target="_blank" rel="noopener noreferrer"  className="maplink"> Displacement Risk Map</a>, 
              the area’s population is among the most vulnerable 
              citywide based on race, income, level of English proficiency, and rent burden. Recent affordable 
              housing and economic development-centered plans present an opportunity to use the City’s Equitable 
              Development Data Explorer to track the racial impact of these rezonings. 
              </p>
              <ImageExtended src={liberty} width="calc(100% + 20px)" marginLeft="-20px" marginTop="10px" />
              <Text as="p" variant="sideCaption" mb="10px" ml="-10px" mt="2px" >
              989 Liberty Avenue, an apartment building constructed in 2018 with ground floor retail. This 
              development is located within East New York’s Mandatory Inclusionary Housing Area. Credit: RPA
              </Text>
              <ImageExtended src={atlantic} width="calc(100% + 20px)" marginLeft="-20px" marginTop="10px" />
              <Text as="p" variant="sideCaption" mb="10px" ml="-10px" mt="2px" >
              2817 Atlantic Avenue to the left, a 14-story mixed-use building constructed in 2022 with 14 units 
              designated for residents at 40 to 60 percent of the area median income (AMI). Credit: RPA
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecTwoSocialNeighSideBar;
