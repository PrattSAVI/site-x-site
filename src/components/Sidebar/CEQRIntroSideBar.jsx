import React, { useContext, useEffect } from "react";
import { MapContext } from "../../pages/part1";
import Text from "../../components/Text";
import { Link } from "react-router-dom";
import park from "../../public/images/part1/park.jpg";
import ImageExtended from "../../components/ImageExtended";
import {
  ceqrIntroShowSoftsites,
  ceqrIntroshowLimits,
  ceqrIntroshow125
} from "../../components/Map/mapViews";
// import MapHeader from "../MapHeader";

function CEQRIntroSideBar() {
  const { map, 
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
      <div className="title intro">Identifying Soft Sites <br /> 2012-2022</div>
      {/* <div className="title intro">2012-2022</div> */}
      <div className="accordion intro" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            {/* legend  = softsites_dev_section */}
            <button
              className="accordion-button intro-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() => {
                ceqrIntroShowSoftsites(map);
                handleLegend(true, "ceqrIntro");
              }}
            >
              Soft sites and Development
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div id="popuptext">
                {/* <p className="neighbor">{ feature.properties.nabes }</p> */}
                <div className="row soft">
                  <div className="column num">
                    <p className="num">48,762</p>
                  </div>
                  <div className="column text"> sites fit CEQR soft site criteria in 2012</div>
                </div>
                <div className="row dev_soft">
                  <div className="column num">
                    <p className="num">5,145</p>
                  </div>
                  <div className="column text"> of those sites were developed between 2012 and 2022</div>
                </div>
                <div className="row intro">
                  <div className="column num">
                    <p className="num">17,594</p>
                  </div>
                  <div className="column text"> lots that did not fit CEQR soft site criteria were also developed</div>
                </div>
                {/* <div className="row intro">
                  <div className="column num">
                    <p className="num">61%</p>
                  </div>
                  <div className="column text"> of developed lot floor area (gsf) of lots did not fit criteria</div>
                </div> */}
              </div>
              <Text as="p" className="sidep" mt="20px">
              {/* <p className="sidep"> */}
              When developable sites are not fully evaluated for impacts, unintentional consequences 
              such as over-capacity public schools, insufficient open space, overburdened public transit, 
              and increased vehicular traffic can occur. If future <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">development</Link> projections are 
              underestimated, resources may not be sufficiently allocated to meet a neighborhood’s needs. 
              On the other hand, when anticipated development does not materialize as expected, questions 
              may be raised about how responsive certain land use decisions are to the reality on the ground.
              </Text>
              <p className="lastp">
              * SITE x SITE uses ≥5,000 sf and ≥50% Available <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">FAR</Link>. An overview of soft sites can be found in Primer on Development in New York City.
              </p>
              <p className="lastp">See Step 2b: Rezonings to reference neighborhood rezonings from 2012-2022.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            {/* legend  = limits_section */}
            <button
              className="accordion-button intro-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={() => {
                ceqrIntroshowLimits(map);
                handleLegend(true, "ceqrIntro2");
              }}
            >
              Limits of Soft Site Identification
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
              The <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">CEQR Technical Manual</Link> provides guidance and criteria for identifying 
              sites that are likely to be developed—that is, <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">soft sites.</Link> At the same 
              time, certain sites may be less developable because of conditions and 
              characteristics that make their buildings or uses difficult to demolish or 
              relocate, such as utilities, parks/open space, and transportation infrastructure.
              </p>
              <p className="sidep">
              In addition to the sites that are difficult to relocate, this map shows landmarked 
              sites, which are also excluded from the SITE x SITE analysis. Finally, the map 
              includes a variety of sites that may be less likely to be developed because of 
              their primary use (“building class”). These sites are included in this analysis 
              because, taken as a whole, they typically have fewer site-specific and regulatory 
              constraints than the sites identified above. There is a level of subjectivity in 
              selecting and excluding certain sites from consideration.
              </p>
              <Text as="p" variant="sideBold" mb="0px" >
              Other development limitations:
              </Text>
              <Text as="p" variant="sidep" mb="5px" >
              Some of this process is outlined in Step 2b:
              </Text>
              <ul className="list">
                <li>Buildings with rent stabilized units</li>
                <li>Coastal Zone Boundary</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button intro-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              // onClick={() => secOneloadSizeFarShowOzone(map)}
              onClick={() => {
                ceqrIntroshow125(map);
                handleLegend(true, "ceqrIntro3");
              }}
            >
              Case Study: 125th Street Corridor (2008)
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Text as="p" variant="sidep" mb="5px" >
              The rezoning of 125th Street Corridor in Harlem sought to encourage new mixed-use development and incentivize 
              affordable housing through the use of floor area bonuses. As of the 
              2017 <Link to= "/methods/glossary" className="glossary-maplink" target="_blank" rel="noopener noreferrer" title="go to glossary">build year</Link>, only 29 percent of the 
              anticipated residential development including less than 8 percent of affordable units had been constructed. 
              Overall, 48 development sites were identified under CEQR, but the rezoned area only added 17 new buildings 
              as of 2017.
              </Text>
              <div>
                <div className="row soft">
                  <div className="column num">
                    <p className="num">14</p>
                  </div>
                  <div className="column text"> developed between 2007-2017* </div>
                </div>
                <div className="row dev_soft">
                  <div className="column num">
                    <p className="num">4</p>
                  </div>
                  <div className="column text"> lots fit CEQR soft site criteria</div>
                </div>
                <div className="row intro">
                  <div className="column num">
                    <p className="num">10</p>
                  </div>
                  <div className="column text"> lots do not fit CEQR soft site criteria </div>
                </div>
                <div className="row intro">
                  <div className="column num">
                    <p className="num">587,118</p>
                  </div>
                  <div className="column text"> sf of floor area added by developed lots that did not fit the soft site criteria </div>
                </div>
              </div>
              <Text as="p" variant="sideCaption" mb="10px" ml="-10px" mt="2px" >
              * This rezoning precedes the analysis time captured in the webtool (2012-2022). More information on the 125th Street 
              Corridor rezoning can be found in the SITE x SITE report.
              </Text>
              <ImageExtended src={park} width="calc(100% + 20px)" marginLeft="-20px" marginTop="10px" />
              <Text as="p" variant="sideCaption" mb="10px" ml="-10px" mt="2px" >
              1824 Park Avenue, a projected site that remains undeveloped. Credit: MAS
              </Text>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CEQRIntroSideBar;
