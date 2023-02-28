import React, { useContext, useEffect } from "react";
import { MapContext } from "../../pages/part1";
import Text from "../../components/Text";
import { Link } from "react-router-dom";
import {
  secThreeDevLimitsShowStab,
  secThreeDevLimitsShowStabComp,
  secThreeDevLimitsShowHist,
  secThreeShowZoning,
  secThreeShowCompact,
} from "../../components/Map/mapViews";

function SecThreeDevLimitsSideBar() {
  const { 
    map, 
    handleLegend,
    // hideHexMaps,
    hideBoxChart,
  } = useContext(MapContext);

  useEffect(() => {
    // hideHexMaps();
    hideBoxChart();
  });
  
  return (
    <div className="sidebar">
      <div className="title dev_lim">CEQR STEP 2b <br />Additional Development Considerations II</div>
      {/* <div className="subtitle dev_lim">Development Limitations</div> */}
      <Text  as="p" variant="sidep" className="intro-text" >
      The CEQR Technical Manual recommends additional attributes that affect the likelihood that a site 
      will be developed in the future. These attributes are more interpretive and enable a degree of 
      discretion on a project-by-project basis. Inconsistencies in analyses that may arise as a result 
      speak to the need for a more flexible, site-specific framework for evaluating development potential.
      </Text>
      <Text  as="p" variant="sidep" className="intro-text" >
      Regulatory and zoning factors play an integral role in City land use decisions and resulting development. 
      Among these factors are historic districts, the Coastal Zone Boundary, and areas that have been recently 
      rezoned. Irregularly shaped lots can also affect development due 
      to <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">zoning</Link> and design limitations.
      </Text>
      {/* <p className="intro-text sidep">
        In <i>SITE x SITE</i> data, 95 percent of the lots identified as difficult-to-relocate (see Step 1) 
        are residential buildings with rent stabilized units. Other regulatory conditions that can affect 
        development include location in historic districts or the Coastal Zone Boundary and recently rezoned 
        areas. An irregularly shaped lot can also limit development due to zoning and design regulations and 
        requirements.
      </p> */}
      <div id="popuptext" className="puma-header"></div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            {/* legend  = stab_section */}
            <button
              className="accordion-button three-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={() => {
                secThreeDevLimitsShowStab(map);
                handleLegend(true, "secThreeDevLimits");
              }}
            >
              Rent Stabilized Housing: CEQR proxy
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="sidep">
                The <i>CEQR Technical Manual</i> assumes that residential buildings
                constructed before 1974 that consist of six or more units are
                likely to be rent stabilized and are not typically 
                considered <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">soft sites</Link>. To evaluate how accurately this assumption
                identifies rent stabilized buildings, the outcome was compared
                against NYC Department of Finance (<Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">DOF</Link>) property tax data on
                actual unit counts for rent stabilization. The CEQR proxy was
                found to cover 93 percent of rent stabilized units,
                demonstrating that it was reliable in this study.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            {/* legend  = stab_com_section */}
            <button
              className="accordion-button three-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={() => {
                secThreeDevLimitsShowStabComp(map);
                handleLegend(true, "secThreeDevLimits2");
              }}
            >
              Explore Rent Stabilization Methods
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                error facilis ea explicabo nemo aperiam veritatis sapiente
                minima est perspiciatis enim animi, vitae eveniet obcaecati ut
                dignissimos voluptate alias eligendi. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Quia, error facilis ea
                explicabo nemo aperiam veritatis sapiente minima est
                perspiciatis enim animi, vitae eveniet obcaecati ut dignissimos
                voluptate alias eligendi.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            {/* legend = devlim_section */}
            <button
              className="accordion-button three-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              onClick={() => {
                secThreeDevLimitsShowHist(map);
                handleLegend(true, "secThreeDevLimits3");
              }}
            >
              Historic Districts and the Coastal Zone Boundary
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
              Historic districts include City landmarked districts and districts listed on the 
              <a href="https://parks.ny.gov/shpo/national-register/" target="_blank"  rel="noopener noreferrer" className="maplink"> State and National Registers</a>. 
              The Coastal Zone Boundary is regulated by New York 
              State and covers all waterfront areas of the City. The Coastal Zone Boundary 
              includes the following designated areas: Special Natural Waterfront Areas, Priority 
              Marine Activity Zones, Significant Maritime and Industrial Areas, Recognized Ecological 
              Complexes, and the Arthur Kill Ecologically Sensitive Maritime and Industrial Area.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button three-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              onClick={() => {
                secThreeShowZoning(map);
                handleLegend(true, "secThreeDevLimits4");
              }}
            >
              Rezonings
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
              In SITE x SITE, areas that have been recently rezoned are considered more likely to see new development. 
              While <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">zoning</Link> amendments define a certain level of scale and density and specific uses, development does 
              not always materialize as initially envisioned in the CEQR process. In neighborhoods that are zoned to 
              incentivize development, irregularly shaped lots are often costly to redevelop. In addition, in soft 
              site analysis, CEQR criteria considers irregularly shaped lots as site specific conditions that make 
              development difficult. 
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button three-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              onClick={() => {
                secThreeShowCompact(map);
                handleLegend(true, "secThreeDevLimits5");
              }}
            >
              Irregularly Shaped Lots 
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
              Even 
              in neighborhoods that are zoned to incentivize development, irregularly 
              shaped lots are costly to redevelop. In CEQR analyses, irregularly shaped 
              lots tend to be considered less developable. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecThreeDevLimitsSideBar;
