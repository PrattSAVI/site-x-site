const legendOptions = {
  ceqrIntro: {
    /// legend title
    name: "Soft Sites and Development",
    /// section id  in map colors/layers doc - https://docs.google.com/spreadsheets/d/1Ri0HaOR3276XUikoxgNKhDK3m2GZhT6nkC_grDRPlkQ/edit?usp=sharing
    section: "softsites_dev_section",
    subdescription: "Typically if a lot is larger than 5,000 square feet and has substantial available unbuilt floor area, it is considered a soft site.* But as this map shows, 77 percent of lots that were developed between 2012 and 2022 would not qualify as soft sites under current criteria and therefore would not be evaluated for environmental impact. The floor area that would not be captured is equivalent to 125 Hudson Yards.",
    /// colors and text in legend
    stops: [
      { text: "Developed sites that are NOT soft sites", color: "#FFB809" },
      { text: "Developed sites that are soft sites", color: "#6A42A4" },
      { text: "All soft sites", color: "#ccbbec" },
      // { text: "Zoning Amendments"},
      // { text: "Adopted before 2012", color: "#F5E6F9" },
      // { text: "Adopted after 2011", color: "#F9E5E5" },
      
    ],
  },
  ceqrIntro2: {
    /// legend title
    name: "Soft Site Identification",
    /// legend subtitle
    description: "Difficult to Relocate Site Uses",
    section: "limits_section",
    stops: [
      { text: "Unlikely to be developed building classes", color: "#ffba0a" },
      { text: "Landmarked sites", color: "#42ACD1" },
      { text: "Difficult to relocate uses", color: "#886DA3" },
      { text: "Land use categories", color: "#6bb35b" },
      { text: "Soft sites", color: "#a3a199" },
    ],
  },
  ceqrIntro3: {
    /// legend title
    name: "125 St Case Study (2008)",
    subdescription: "Key Finding: CEQR projections vastly overestimated overall development. Despite the rezoning’s intentions to increase housing density and create affordable housing, less than one-third of the anticipated residential units have been built.",
    section: "case_study",
    timenote: "Case study soft sites are based on SITE x SITE’s analysis of development from 2007-2017.",
    /// colors and text in legend
    stops: [
      { text: "Developed sites that are NOT soft sites", color: "#FFB809" },
      { text: "Developed sites that are soft sites", color: "#6A42A4" },
      { text: "All soft sites", color: "#ccbbec" },
    ],
  },
  ceqrIntro4: {
    /// legend title
    name: "Downtown Brooklyn Case Study (2004)",
    subdescription: "Key Finding: The rezoning was envisioned to spur development with the goal of fostering a new downtown commercial core. While development did occur, the type of development significantly diverged from what was anticipated in the CEQR process. The area has seen almost nine times the estimated residential floor area and commercial space has lagged significantly.",
    section: "case_study",
    /// colors and text in legend
    stops: [
      { text: "Sites< 5,000 square feet or sites that have < 50% available FAR", color: "#FFB809" },
      { text: "Sites ≥ 5,000 square feet and ≥ 50% available FAR (meet CEQR criteria)", color: "#6A42A4" },
      { text: "Sites that met CEQR criteria for soft sites in 2007", color: "#ccbbec" },
    ],
  },
  // secOneloadSizeFar: {
  //   /// legend title
  //   name: "Soft Sites and Development",
  //   /// legend subtitle
  //   section: "ceqr_section",
  //   stops: [
  //     {
  //       text: "Recently developed lots",
  //       color: "#258CCC",
  //     },
  //     { text: "Soft sites", color: "#D5D5D4" },
  //   ],
  // },
  secOneloadSizeFar: {
    /// legend title
    name: "Recently Developed Lots",
    /// legend subtitle
    section: "ceqr_section",
    stops: [
      {
        text: "Smaller than 5,000 sf or has less than 50% available FAR",
        color: "#258CCC",
      },
      {
        text: "Sites ≥ 5,000 square feet and ≥ 50% available FAR (meet CEQR criteria)",
        color: "#A3A199",
      },
      {text: ""},
      { text: "Soft sites with no recent development", color: "#D5D5D4" },
    ],
  },
  secOneloadSizeFar2: {
    /// legend title
    name: "Recently Developed Lots",
    /// legend subtitle
    section: "explore_section",
    stops: [
      {
        text: "Sites that do not meet user-adjusted thresholds for CEQR review",
        color: "#258CCC",
      },
      {
        text: "Sites that do meet user-adjusted thresholds for CEQR review",
        color: "#A3A199",
      },
      { text: ""},
      { text: "Soft sites with no recent development", color: "#D5D5D4" },
    ],
  },
  secOneloadSizeFar3: {
    /// legend title
    name: "Ozone Park, 2013 - 2022",
    /// legend subtitle
    // description: "Ozone Park",
    section: "case_study",
    image: ["ozone_a", "ozone_b"],
    subdescription:  "Key Finding: CEQR projections overestimated the amount of residential development that materialized along major corridors, while the number of smaller developments along low residential mid-blocks was underestimated.",
    stops: [
      {
        text: "Rezoning Boundary (2013)", 
        color: "transparent",
        outline: "2px dashed #66A9DC",
      },
      {
        text: "Sites that did not meet CEQR criteria",
        color: "#258CCC",
      },
      {
        text: "Sites that DID meet thresholds for CEQR review in 2012",
        color: "#A3A199",
      },
    ],
  },
  secTwoSocialNeigh: {
    /// legend title
    name: "Residential Displacement Risk:",
    /// legend subtitle
    description: "Overall Vulnerability Score",
    section: "disp_section",
    stops: [
      { text: "1: lowest risk", color: "#E8E1F2" },
      { text: "2: low risk", color: "#c8bde1" },
      { text: "3: moderate risk", color: "#9275c3" },
      { text: "4: high risk", color: "#6A42A5" },
      { text: "5: highest risk", color: "#3C2D72" },
    ],
  },
  secTwoSocialNeigh2: {
    /// legend title
    name: "Residential Displacement Risk:",
    /// legend subtitle
    description: "Market Pressure",
    section: "market_section",
    stops: [
      { text: "1: lowest pressure", color: "#E8E1F2" },
      { text: "2: low pressure", color: "#c8bde1" },
      { text: "3: moderate pressure", color: "#9275c3" },
      { text: "4: high pressure", color: "#6A42A5" },
      { text: "5: highest pressure", color: "#3C2D72" },
    ],
  },
  secTwoSocialNeigh3: {
    /// legend title
    name: "Residential Displacement Risk:",
    /// legend subtitle
    description: "Population Vulnerability",
    section: "pop_section",
    stops: [
      { text: "1: lowest vulnerability", color: "#E8E1F2" },
      { text: "2: low vulnerability", color: "#c8bde1" },
      { text: "3: moderate vulnerability", color: "#9275c3" },
      { text: "4: high vulnerability", color: "#6A42A5" },
      { text: "5: highest vulnerability", color: "#3C2D72" },
    ],
  },
  secTwoSocialNeigh4: {
    /// legend title
    name: "Residential Displacement Risk:",
    /// legend subtitle
    description: "Housing Conditions",
    section: "housing_section",
    stops: [
      { text: "1: lowest vulnerability", color: "#E8E1F2" },
      { text: "2: low vulnerability", color: "#c8bde1" },
      { text: "3: moderate vulnerability", color: "#9275c3" },
      { text: "4: high vulnerability", color: "#6A42A5" },
      { text: "5: highest vulnerability", color: "#3C2D72" },
    ],
  },
  secTwoSocialNeigh4pt5: {
    /// legend title
    name: "Development Trends",
    /// legend subtitle
    description: "Department of Buildings Construction Permits",
    subdescription: "Alteration Type 1",
    section: "assessed_section",
    stops: [
      { text: "1 - 25", color: "#E8E1F2" },
      { text: "25 - 150", color: "#c8bde1" },
      { text: "150 - 350", color: "#9275c3" },
      { text: "350 - 700", color: "#6A42A5" },
      { text: "700 - 1120", color: "#3C2D72" },
    ],
  },
  secTwoSocialNeigh4pt6: {
    subdescription: "New Buildings",
    stops: [
      { text: "1 - 25", color: "#dfedf7" },
      { text: "25 - 100", color: "#b0d5f0" },
      { text: "100 - 250", color: "#57a1d8" },
      { text: "250 - 1000", color: "#2178c3" },
      { text: "1000 - 2560", color: "#004fa3" },
    ],
  },
  secTwoSocialNeigh4pt7: {
    subdescription: "Demolition",
    stops: [
      { text: "1 - 5", color: "#FDF7F7" },
      { text: "5 - 30", color: "#FDD5D4" },
      { text: "30 - 60", color: "#FBA2A2" },
      { text: "60 - 150", color: "#FE5A5A" },
      { text: "150 - 270", color: "#BE0101" },
    ],
  },
  secTwoSocialNeigh5: {
    /// legend title
    name: "Improvement to Land Value Ratio increase",
    /// legend subtitle
    description: "Soft Sites and Recently Developed Sites",
    section: "assessed_section",
    stops: [
      { text: "0 - 20%", color: "#E8E1F2" },
      { text: "20 - 40%", color: "#c8bde1" },
      { text: "40 - 60%", color: "#9275c3" },
      { text: "60 - 80%", color: "#6A42A5" },
      { text: "80 - 100%", color: "#3C2D72" },
    ],
  },
  secTwoSocialNeigh6: {
    /// legend title
    name: "Merged or Asssembled Lots and Lots that Disappeared",
    /// legend subtitle
    // description: "Soft Sites and Recently Developed Sites",
    section: "merged_section",
    stops: [
      {text: 'Soft sites that disappeared by 2022', color:'#FFB809'},
      {text: 'Developed after 2011 - Condominiums', color:'#6BB219'},
      {text: 'Developed after 2011 - Lots that increased in size', color:'#F73939'},
      {text: 'Developed after 2011 - Possible Merged Sites', color:'#6A42A4'},
    ],
  },
  secTwoSocialNeigh7: {
    /// legend title
    name: "Merged or Asssembled Lots and Lots that Disappeared",
    /// legend subtitle
    section: "merged_section",
    stops: [
      { text: "Soft sites that disappeared by 2022", color: "#FFB809" },
      { text: "Developed after 2011 - Condominiums", color: "#6BB219" },
      {
        text: "Developed after 2011 - Lots that increased in size",
        color: "#F73939",
      },
      {
        text: "Developed after 2011 - Possible merged sites",
        color: "#6A42A4",
      },
    ],
  },
  secTwoSocialNeigh8: {
    /// legend title
    name: "East New York (2016)",
    /// legend subtitle
    // description: "Displacement Risk Score",
    section: "case_study",
    subdescription:  "Key Finding: CEQR does not account for the lag time between when affordable housing projects are produced and when units are available for tenants to rent. Additionally, there is a lack of public information on the progress of commitments made during a rezoning and how they align with the neighborhood’s needs.",
    stops: [
      {
        text: "Rezoning Boundary (2016)", 
        color: "transparent",
        outline: "2px dashed #000000",
      },
      { text: "Displacement Risk Score"},
      { text: "1: lowest risk", color: "#E8E1F2" },
      { text: "2: low risk", color: "#c8bde1" },
      { text: "3: moderate risk", color: "#9275c3" },
      { text: "4: high risk", color: "#6A42A5" },
      { text: "5: highest risk", color: "#3C2D72" },
      ],
  },
  secThreeDevLimits0: {
    /// legend title
    name: "Rent Stabilized Buildings",
    /// legend subtitle
    description: "CEQR Proxy + Recent Development",
    section: "stab_section",
    stops: [
      { text: "Rent stabilized and developed", color: "#F73939" },
      { text: "Rent stabilized according to CEQR proxy", color: "#FCC2C0" },
      { text: "Developed, not rent stabilized", color: "#8e8b86" },
      { text: "Undeveloped soft sites", color: "#B3B1AB" },
    ],
  },
  secThreeDevLimits: {
    /// legend title
    name: "How are rent stabilized properties identifed?",
    /// legend subtitle
    description: "Compare CEQR Proxy and tax document analysis",
    section: "stab_com_section",
    stops: [
      { text: "Rent stabilized and developed", color: "#000000" },
      { text: "Identified by CEQR proxy AND analysis", color: "#F73939" },
      { text: "CEQR proxy only", color: "#FCC2C0" },
      { text: "Tax documents analysis only", color: "#5DAEE0" },
    ],
  },
  secThreeDevLimits3: {
    /// legend title
    name: "Development Limitations",
    /// legend subtitle
    description: "Historic Landmark and Environmental Districts",
    section: "devlim_section",
    stops: [
      { text: "Historic Districts", color: "#F7ACAC" },
      { text: "Special Marine Districts", color: "#9BCCE9" },
      { text: "Coastal Boundary Zones", color: "#B0D487" },
      { text: "Sites Developed Since 2011", color: "#8e8b86" },
      { text: "Soft Sites", color: "#B3B1AB" },
    ],
  },
  secThreeDevLimits4: {
    /// legend title
    name: "Rezonings",
    /// legend subtitle
    section: "zoning_section",
    stops: [
      { text: "Zoning changes since 2012", color: "#FCC0C0" },
      { text: "Zoning changes before 2012", color: "#CEE6F6" },
      { text: "Recently developed sites", color: "#a3a199" },
      { text: "Soft sites 2012", color: "#d5d5d4" },
    ],
  },
  secThreeDevLimits5: {
    /// legend title
    name: "Irregularly Shaped Lots",
    /// legend subtitle
    description: "Lot Compactness Score",
    subdescription: "The compactness score of a lot is a measure of how rectangular its shape is.",
    section: "zoning_section",
    stops: [
      { text: "0 - 0.25 (irregular shape)", color: "#f73939" },
      { text: "0.25 - 0.5", color: "#f99995" },
      { text: "0.5 - 0.75", color: "#a49db8" },
      { text: "0.75 - 1 (compact / regular shape)", color: "#57a1d8" },
    ],
  },
};

export default legendOptions;
