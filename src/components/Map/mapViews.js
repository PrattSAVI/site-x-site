import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// LOAD style and functions for Intro - CEQR Intro
export const ceqrIntro = (map) => {
  if (!map.current) return;

  map.current.setStyle("mapbox://styles/prattsavi/cla1ds2ki002914qup9ylfdx0");

  map.current.flyTo({ center: [-74.007919, 40.702043], zoom: 10 });

  map.current.on("click", (e) => {
    const features = map.current.queryRenderedFeatures(e.point, {
      layers: ["puma_selector"], // replace with your layer name
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    const coords = new mapboxgl.LngLat(
      feature.properties.long - .0125,
      feature.properties.lat + .0075
    );

    
    // const neighborhood = feature.properties.nabes;

    map.current.flyTo({ center: coords, zoom: 13 });

    map.current.setPaintProperty("puma_selector", "fill-color", [
      "match",
      ["get", "puma"],
      feature.properties.puma,
      "rgba(255,255,255,0)",
      "rgba(255,255,255,.9)",
    ]);

    // use this to create thicker border for selected
    map.current.setPaintProperty(
      'puma_line',
      'line-color',
      ['match', ['get', 'puma'], feature.properties.puma, "#787878" , "transparent"]
    );
    map.current.setLayoutProperty('puma_line', 'visibility', 'visible');

    if (!document.getElementById("popuptext_nyc")) {
      return;
    }
    document.getElementById("popuptext_nyc").className = "nyc-hide";

    document.getElementById("popuptext").innerHTML = '<p class="puma-label intro">' + feature.properties.nabes + '</p>' +
    '<div class="row soft">' +
      '<div class="column num">' + '<p class="num">' + feature.properties.NU_softsites_12 + '</p>' + '</div>' +
      '<div class="column text">' + ' sites fit CEQR soft site criteria in 2012' + '</div>' +
    '</div>' +
    '<div class="row  dev_soft">' +
      '<div class="column num">' + '<p class="num">' + feature.properties.NU_rec_dev_is_soft_site + '</p>' + '</div>' +
      '<div class="column text">' + ' of those sites were developed between 2012 and 2022' + '</div>' +
    '</div>' +
    '<div class="row intro">' +
      '<div class="column num">' + '<p class="num">' + feature.properties.NU_rec_dev_not_soft_site + '</p>' + '</div>' +
      '<div class="column text">' +  ' lots that did not fit CEQR soft site criteria were also developed' + '</div>' +
    '</div>';
  });
};

// LOAD style and functions for Intro - CEQR Intro - Soft Sites and Development
export const ceqrIntroShowSoftsites = (map) => {
  map.current.setLayoutProperty("not_softsites_dev", "visibility", "visible");
  map.current.setLayoutProperty("softsites", "visibility", "visible");
  map.current.setLayoutProperty("softsites_dev", "visibility", "visible");
  map.current.setLayoutProperty("limits", "visibility", "none");
  map.current.setLayoutProperty("softsites_lim", "visibility", "none");
  map.current.setLayoutProperty("puma_selector", "visibility", "visible");
  map.current.setLayoutProperty("case_125_line", "visibility", "none");
  map.current.setLayoutProperty("case_125", "visibility", "none");
  map.current.setLayoutProperty("soft_07", "visibility", "none");
  map.current.setLayoutProperty("case_bk", "visibility", "none");
  map.current.setLayoutProperty("case_bk_line", "visibility", "none");
  map.current.setLayoutProperty("bk_lots", "visibility", "none");
};

// LOAD style and functions for Intro - CEQR Intro - Limits of soft sites identification
export const ceqrIntroshowLimits = (map) => {
  // map.flyTo({center: [-74.007919, 40.702043],
  //   zoom: 10});
  map.current.setLayoutProperty("softsites", "visibility", "none");
  map.current.setLayoutProperty("softsites_dev", "visibility", "none");
  map.current.setLayoutProperty("not_softsites_dev", "visibility", "none");
  map.current.setLayoutProperty("puma_selector", "visibility", "visible");
  map.current.setLayoutProperty("limits", "visibility", "visible");
  map.current.setLayoutProperty("softsites_lim", "visibility", "visible");
  map.current.setLayoutProperty("case_125_line", "visibility", "none");
  map.current.setLayoutProperty("case_125", "visibility", "none");
  map.current.setLayoutProperty("soft_07", "visibility", "none");
  map.current.setLayoutProperty("case_bk", "visibility", "none");
  map.current.setLayoutProperty("case_bk_line", "visibility", "none");
  map.current.setLayoutProperty("bk_lots", "visibility", "none");
};

// // LOAD style and functions for Section 1 - Size & FAR section - ?
export const ceqrIntroshow125 = (map) => {
  map.current.setLayoutProperty("case_125_line", "visibility", "visible");
  map.current.setLayoutProperty("case_125", "visibility", "visible");
  map.current.setLayoutProperty("soft_07", "visibility", "visible");
  map.current.setLayoutProperty("case_bk", "visibility", "none");
  map.current.setLayoutProperty("case_bk_line", "visibility", "none");
  map.current.setLayoutProperty("bk_lots", "visibility", "none");
  map.current.setLayoutProperty("softsites", "visibility", "none");
  map.current.setLayoutProperty("softsites_dev", "visibility", "none");
  map.current.setLayoutProperty("not_softsites_dev", "visibility", "none");
  map.current.setLayoutProperty("puma_selector", "visibility", "none");
  map.current.setLayoutProperty("limits", "visibility", "none");
  map.current.setLayoutProperty("softsites_lim", "visibility", "none");
  map.current.setPaintProperty('puma_selector', 'fill-color', 'transparent');
  map.current.setPaintProperty('puma_selector', 'fill-outline-color', 'transparent');
  map.current.setLayoutProperty('puma_selector', 'visibility', 'none');
  map.current.setLayoutProperty('puma_line', 'visibility', 'none');
  /// remove puma name to sidebar
  document.getElementById("popuptext").innerHTML = '';
  map.current.flyTo({ center: [-73.970706, 40.81001], zoom: 13.3 }); 
};

// // LOAD style and functions for Section 1 - Size & FAR section - ?
export const ceqrIntroshowBK = (map) => {
  map.current.setLayoutProperty("case_bk", "visibility", "visible");
  map.current.setLayoutProperty("case_bk_line", "visibility", "visible");
  map.current.setLayoutProperty("bk_lots", "visibility", "visible");
  map.current.setLayoutProperty("case_125_line", "visibility", "none");
  map.current.setLayoutProperty("case_125", "visibility", "none");
  map.current.setLayoutProperty("soft_07", "visibility", "none");
  map.current.setLayoutProperty("softsites", "visibility", "none");
  map.current.setLayoutProperty("softsites_dev", "visibility", "none");
  map.current.setLayoutProperty("not_softsites_dev", "visibility", "none");
  map.current.setLayoutProperty("puma_selector", "visibility", "none");
  map.current.setLayoutProperty("limits", "visibility", "none");
  map.current.setLayoutProperty("softsites_lim", "visibility", "none");
  map.current.setPaintProperty('puma_selector', 'fill-color', 'transparent');
  map.current.setPaintProperty('puma_selector', 'fill-outline-color', 'transparent');
  map.current.setLayoutProperty('puma_selector', 'visibility', 'none');
  map.current.setLayoutProperty('puma_line', 'visibility', 'none');
  /// remove puma name to sidebar
  document.getElementById("popuptext").innerHTML = '';
  map.current.flyTo({ center: [-73.989141, 40.690975], zoom: 14 });
};

// LOAD style and functions for Section 1 - Size & FAR section
export const secOneloadSizeFar = (map) => {
  if (!map.current) return;

  // map.current.setStyle("mapbox://styles/prattsavi/clckmgbop000314nsp0h13yyz");
  map.current.setStyle("mapbox://styles/prattsavi/clcqhsr34000d16pdlylrbln5");

  setTimeout(() => {

    map.current.addSource('pluto_rec_dev', {
      type: 'vector',
      url: 'mapbox://prattsavi.2bgpah10'
    });
    map.current.addSource('puma_all', {
      type: 'vector',
      url: 'mapbox://prattsavi.4893fisw'
    });
    map.current.addSource('soft_sites', {
      type: 'vector',
      url: 'mapbox://prattsavi.5fg3q1vq'
    });
    map.current.addSource('ozone_mask_src', {
      type: 'vector',
      url: 'mapbox://prattsavi.0cvcxfsr'
    });

    map.current.addLayer({
      'id': 'softsites',
      'type': 'fill',
      'source': 'soft_sites',
      'layout': {
      // Make the layer visible by default.
      'visibility': 'visible'
      },
      'paint': {
          'fill-color': '#d5d5d4'
      },
      // 'filter': ['<', 'availFAR_perc_12', farValue],
      'source-layer': 'soft_sites_dissolved_12'
    });
    map.current.addLayer({
      'id': 'pluto_recdev_soft',
      'type': 'fill',
      'source': 'pluto_rec_dev',
      'layout': {
      // Make the layer visible by default.
      'visibility': 'visible'
      },
      'paint': {
          'fill-color': '#8e8b86'
      },
      // 'filter': ['<', 'availFAR_perc_12', farValue],
      'source-layer': 'pluto_rec_dev_12'
    });
    map.current.addLayer({
      'id': 'pluto_recdev_no_soft',
      'type': 'fill',
      'source': 'pluto_rec_dev',
      'layout': {
      // Make the layer visible by default.
      'visibility': 'visible'
      },
      'paint': {
          'fill-color': '#258CCC'
      },
      'filter': [
          'any',
          ['<', 'availFAR_perc_12', 50],
          ['<', 'LotArea_12', 5000],
        ],
      'source-layer': 'pluto_rec_dev_12'
    });
    map.current.addLayer({
      'id': 'puma_selector',
      'type': 'fill',
      'source': 'puma_all',
      'layout': {
      // Make the layer visible by default.
      'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'transparent',
        'fill-outline-color': '#ffffff'
      },
      'source-layer': 'puma_selector-0zzab9'
    });

    // puma percent developed LINE layer - for onclick
    map.current.addLayer({
      'id': 'puma_line',
      'type': 'line',
      'source': 'puma_all',
      'layout': {
      // Make the layer visible by default.
      'visibility': 'none'
      },
      'paint': {
        'line-color': '#787878',
        'line-width': 2
      },
      'source-layer': 'puma_selector-0zzab9'
    });
    map.current.addLayer({
      'id': 'ozone_mask',
      'type': 'fill',
      'source': 'ozone_mask_src',
      'layout': {
      // Make the layer visible by default.
      'visibility': 'none'
      },
      'paint': {
        'fill-color': 'rgba(255,255,255,.9)',
        'fill-outline-color': 'transparent'
      },
      'source-layer': 'ozone_mask-52oeyz'
    });

    if (!map.current.getLayer("puma_selector")) return;
    map.current.on("click", (e) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ["puma_selector"], // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      const coords = new mapboxgl.LngLat(
        feature.properties.long - .0125,
      feature.properties.lat + .0075
      );

      map.current.flyTo({ center: coords, zoom: 13 });

      map.current.setPaintProperty("puma_selector", "fill-color", [
        "match",
        ["get", "puma"],
        feature.properties.puma,
        "rgba(255,255,255,0)",
        "rgba(255,255,255,.9)",
      ]);

      // use this to create thicker border for selected
      map.current.setPaintProperty(
        'puma_line',
        'line-color',
        ['match', ['get', 'puma'], feature.properties.puma, "#787878" , "transparent"]
      );
      map.current.setLayoutProperty('puma_line', 'visibility', 'visible');
      /// add puma name to sidebar
      document.getElementById("popuptext").innerHTML = '<p class="puma-label size">' + feature.properties.nabes + '</p>';
    
    });
  }, 500);

  map.current.flyTo({ center: [-74.007919, 40.702043], zoom: 10 });

  };

  // // LOAD style and functions for Section 1 - Size & FAR section - ?
  export const secOneloadSizeFarShowCEQR = (map) => {
    map.current.setFilter("pluto_recdev_no_soft", [
      "any",
      ["<", "availFAR_perc_12", 50],
      ["<", "LotArea_12", 5000],
    ]);
    map.current.setLayoutProperty("pluto_recdev_soft", "visibility", "visible");
    map.current.setLayoutProperty("ozone_mask", "visibility", "none");
    map.current.setLayoutProperty("ozone_line", "visibility", "none");
    map.current.setLayoutProperty('puma_selector', 'visibility', 'visible');

  };

  // // LOAD style and functions for Section 1 - Size & FAR section - ?
  export const secOneloadSizeFarShowOzone = (map) => {
    map.current.setLayoutProperty("ozone_mask", "visibility", "visible");
    map.current.setLayoutProperty("ozone_line", "visibility", "visible");
    map.current.setFilter("pluto_recdev_no_soft", [
      "any",
      ["<", "availFAR_perc_12", 50],
      ["<", "LotArea_12", 5000],
    ]);
    map.current.setLayoutProperty("pluto_recdev_soft", "visibility", "visible");
    map.current.setPaintProperty('puma_selector', 'fill-color', 'transparent');
    map.current.setPaintProperty('puma_selector', 'fill-outline-color', 'transparent');
    map.current.setLayoutProperty('puma_selector', 'visibility', 'none');
    map.current.setLayoutProperty('puma_line', 'visibility', 'none');
    /// remove puma name to sidebar
    document.getElementById("popuptext").innerHTML = '';
    map.current.flyTo({ center: [-73.859759, 40.684595], zoom: 13 }); 
  };

  // LOAD style and functions for Section 2 - Social and Neighborhood
  export const secTwoSocialNeigh = (map) => {
    if (!map.current) return;
    map.current.setStyle("mapbox://styles/prattsavi/clcjlvjvh008g15s2teji5eti");
    map.current.flyTo({ center: [-74.007919, 40.702043], zoom: 10 });

    // if (!map.current.getLayoutProperty("puma_disp", "visibility", "visible")) return;
    if (!map.current.getLayer("puma_selector")) return;
    map.current.on("click", (e) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ["puma_selector"], // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      const coords = new mapboxgl.LngLat(
        feature.properties.long - .0125,
        feature.properties.lat + .0075
      );

      map.current.flyTo({ center: coords, zoom: 13 });

      map.current.setPaintProperty("puma_selector", "fill-color", [
        "match",
        ["get", "puma"],
        feature.properties.puma,
        "rgba(255,255,255,0)",
        "rgba(255,255,255,.9)",
      ]);

      // use this to create thicker border for selected
      map.current.setPaintProperty(
        'puma_line',
        'line-color',
        ['match', ['get', 'puma'], feature.properties.puma, "#787878" , "transparent"]
      );
      map.current.setLayoutProperty('puma_line', 'visibility', 'visible');
      /// add puma name to sidebar
      document.getElementById("popuptext").innerHTML = '<p class="puma-label dev_soft">' + feature.properties.nabes + '</p>';
    
    });

};

// LOAD style and functions for Section 2 - Social and Neighborhood - Show Full
export const secTwoSocialNeighShowFull = (map) => {
  map.current.flyTo({ center: [-74.007919, 40.702043], zoom: 10 });
  map.current.setLayoutProperty('puma_selector', 'visibility', 'visible');
  map.current.setPaintProperty('puma_selector', 'fill-color', 'transparent');
  map.current.setPaintProperty('puma_selector', 'fill-outline-color', '#ffffff');
  map.current.setLayoutProperty('puma_line', 'visibility', 'none');
  map.current.setLayoutProperty("puma_disp", "visibility", "visible");
  map.current.setLayoutProperty("puma_market", "visibility", "none");
  map.current.setLayoutProperty("puma_pop", "visibility", "none");
  map.current.setLayoutProperty("puma_housing", "visibility", "none");
  map.current.setLayoutProperty("assessed", "visibility", "none");
  map.current.setLayoutProperty("disappeared", "visibility", "none");
  map.current.setLayoutProperty("condo", "visibility", "none");
  map.current.setLayoutProperty("increased", "visibility", "none");
  map.current.setLayoutProperty("merged", "visibility", "none");
  map.current.setLayoutProperty("boro_line", "visibility", "none");
  map.current.setLayoutProperty("east_ny", "visibility", "none");
  map.current.setLayoutProperty("east_ny_poly", "visibility", "none");
};

// LOAD style and functions for Section 2 - Social and Neighborhood - Market Pressure
export const secTwoSocialNeighShowMarket = (map) => {
  map.current.setLayoutProperty("puma_disp", "visibility", "none");
  map.current.setLayoutProperty("puma_market", "visibility", "visible");
  map.current.setLayoutProperty("puma_pop", "visibility", "none");
  map.current.setLayoutProperty("puma_housing", "visibility", "none");
  map.current.setLayoutProperty("assessed", "visibility", "none");
  map.current.setLayoutProperty("boro_line", "visibility", "none");
};

// LOAD style and functions for Section 2 - Social and Neighborhood - Population Vulnerability
export const secTwoSocialNeighShowPop = (map) => {
  map.current.setLayoutProperty("puma_disp", "visibility", "none");
  map.current.setLayoutProperty("puma_market", "visibility", "none");
  map.current.setLayoutProperty("puma_pop", "visibility", "visible");
  map.current.setLayoutProperty("puma_housing", "visibility", "none");
  map.current.setLayoutProperty("assessed", "visibility", "none");
  map.current.setLayoutProperty("boro_line", "visibility", "none");
  map.current.setLayoutProperty("east_ny", "visibility", "none");
  map.current.setLayoutProperty("east_ny_poly", "visibility", "none");
};

// LOAD style and functions for Section 2 - Social and Neighborhood - Housing Conditions
export const secTwoSocialNeighShowHousing = (map) => {
  map.current.setLayoutProperty("puma_disp", "visibility", "none");
  map.current.setLayoutProperty("puma_market", "visibility", "none");
  map.current.setLayoutProperty("puma_pop", "visibility", "none");
  map.current.setLayoutProperty("puma_housing", "visibility", "visible");
  map.current.setLayoutProperty("assessed", "visibility", "none");
  map.current.setLayoutProperty("boro_line", "visibility", "none");
};

// LOAD style and functions for Section 2 - Social and Neighborhood - Assessed to Improvement
export const secTwoSocialNeighShowAssessed = (map) => {
  map.current.setLayoutProperty("puma_disp", "visibility", "none");
  map.current.setLayoutProperty("puma_market", "visibility", "none");
  map.current.setLayoutProperty("puma_pop", "visibility", "none");
  map.current.setLayoutProperty("puma_housing", "visibility", "none");
  map.current.setLayoutProperty("boro_line", "visibility", "visible");
  map.current.setLayoutProperty("assessed", "visibility", "visible");
  map.current.setLayoutProperty("puma_selector", "visibility", "visible");
};

// LOAD style and functions for Section 2 - Social and Neighborhood - Assessed to Improvement
export const secTwoSocialMerged = (map) => {
  map.current.setLayoutProperty("disappeared", "visibility", "visible");
  map.current.setLayoutProperty("condo", "visibility", "visible");
  map.current.setLayoutProperty("increased", "visibility", "visible");
  map.current.setLayoutProperty("merged", "visibility", "visible");
  map.current.setLayoutProperty("puma_selector", "visibility", "visible");
  map.current.setLayoutProperty("boro_line", "visibility", "visible");
  map.current.setLayoutProperty("puma_disp", "visibility", "none");
  map.current.setLayoutProperty("puma_market", "visibility", "none");
  map.current.setLayoutProperty("puma_pop", "visibility", "none");
  map.current.setLayoutProperty("puma_housing", "visibility", "none");
  map.current.setLayoutProperty("assessed", "visibility", "none");
  map.current.setLayoutProperty("east_ny", "visibility", "none");
  map.current.setLayoutProperty("east_ny_poly", "visibility", "none");
};

// LOAD style and functions for Section 2 - Social and Neighborhood - Case Stuyd
export const secTwoSocialEastNY = (map) => {
  map.current.setLayoutProperty("puma_disp", "visibility", "visible");
  map.current.setLayoutProperty("east_ny", "visibility", "visible");
  map.current.setLayoutProperty("east_ny_poly", "visibility", "visible");
  map.current.setLayoutProperty("disappeared", "visibility", "none");
  map.current.setLayoutProperty("condo", "visibility", "none");
  map.current.setLayoutProperty("increased", "visibility", "none");
  map.current.setLayoutProperty("merged", "visibility", "none");
  map.current.setLayoutProperty("puma_market", "visibility", "none");
  map.current.setLayoutProperty("puma_pop", "visibility", "none");
  map.current.setLayoutProperty("puma_housing", "visibility", "none");
  map.current.setLayoutProperty("assessed", "visibility", "none");
  map.current.setPaintProperty('puma_selector', 'fill-color', 'transparent');
  map.current.setPaintProperty('puma_selector', 'fill-outline-color', 'transparent');
  map.current.setLayoutProperty('puma_selector', 'visibility', 'none');
  map.current.setLayoutProperty('puma_line', 'visibility', 'none');
  /// remove puma name to sidebar
  document.getElementById("popuptext").innerHTML = '';
  map.current.flyTo({ center: [-73.92859, 40.67236], zoom: 12.1 });
};

// LOAD style and functions for Section 3 - Dev Limitations
export const secThreeDevLimits = (map) => {
  if (!map.current) return;

  map.current.setStyle("mapbox://styles/prattsavi/clckpgixo000b14mi5dfnvt3t");

  map.current.flyTo({ center: [-74.007919, 40.702043], zoom: 10 });

  map.current.on("click", (e) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.current.queryRenderedFeatures(e.point, {
      layers: ["puma_selector"], // replace with your layer name
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    const coords = new mapboxgl.LngLat(
      feature.properties.long - .0125,
      feature.properties.lat + .0075
    );

    map.current.flyTo({ center: coords, zoom: 13 });

    map.current.setPaintProperty("puma_selector", "fill-color", [
      "match",
      ["get", "puma"],
      feature.properties.puma,
      "rgba(255,255,255,0)",
      "rgba(255,255,255,.9)",
    ]);

    // use this to create thicker border for selected
    map.current.setPaintProperty(
      'puma_line',
      'line-color',
      ['match', ['get', 'puma'], feature.properties.puma, "#787878" , "transparent"]
    );
    map.current.setLayoutProperty('puma_line', 'visibility', 'visible');

    /// add puma name to sidebar
    document.getElementById("popuptext").innerHTML = '<p class="puma-label dev_lim">' + feature.properties.nabes + '</p>';
  });
};

// LOAD style and functions for Section 3 - Dev Limitations - Rent Stabilization
// export const secThreeDevLimitsShowStab = (map) => {
//   map.current.setLayoutProperty("dev_stab", "visibility", "visible");
//   map.current.setLayoutProperty("stab_proxy", "visibility", "visible");
//   map.current.setLayoutProperty("dev_no_stab", "visibility", "visible");
//   map.current.setLayoutProperty("soft_sites", "visibility", "visible");
//   map.current.setLayoutProperty("rec_dev", "visibility", "none");
//   map.current.setLayoutProperty("coastal", "visibility", "none");
//   map.current.setLayoutProperty("historical", "visibility", "none");
//   map.current.setLayoutProperty("presmia", "visibility", "none");
//   map.current.setLayoutProperty("zoning_a", "visibility", "none");
//   map.current.setLayoutProperty("compact", "visibility", "none");
//   map.current.setLayoutProperty("stab_compare", "visibility", "none");
// };

// LOAD style and functions for Section 3 - Dev Limitations - Rent Stabilization Comp
export const secThreeDevLimitsShowStabComp = (map) => {
  map.current.setLayoutProperty("stab_compare", "visibility", "visible");
  map.current.setLayoutProperty("dev_stab", "visibility", "visible");
  map.current.setLayoutProperty("soft_sites", "visibility", "none");
  map.current.setLayoutProperty("rec_dev", "visibility", "none");
  map.current.setLayoutProperty("zoning_a", "visibility", "none");
  map.current.setLayoutProperty("compact", "visibility", "none");
  map.current.setLayoutProperty("stab_proxy", "visibility", "none");
  map.current.setLayoutProperty("coastal", "visibility", "none");
  map.current.setLayoutProperty("historical", "visibility", "none");
  map.current.setLayoutProperty("presmia", "visibility", "none");
};

// LOAD style and functions for Section 3 - Dev Limitations - Historical
export const secThreeDevLimitsShowHist = (map) => {
  map.current.setLayoutProperty("compact", "visibility", "none");
  map.current.setLayoutProperty("zoning_a", "visibility", "none");
  map.current.setLayoutProperty("stab_compare", "visibility", "none")
  map.current.setLayoutProperty("dev_stab", "visibility", "none");
  map.current.setLayoutProperty("stab_proxy", "visibility", "none");
  map.current.setLayoutProperty("presmia", "visibility", "visible");
  map.current.setLayoutProperty("historical", "visibility", "visible");
  map.current.setLayoutProperty("coastal", "visibility", "visible");
  map.current.setLayoutProperty("soft_sites", "visibility", "visible");
  map.current.setLayoutProperty("rec_dev", "visibility", "visible");
};

// LOAD style and functions for Section 3 - Dev Limitations - Zoning Amendments
export const secThreeShowZoning = (map) => {
  map.current.setLayoutProperty("compact", "visibility", "none");
  map.current.setLayoutProperty("zoning_a", "visibility", "visible");
  map.current.setLayoutProperty("soft_sites", "visibility", "visible");
  map.current.setLayoutProperty("rec_dev", "visibility", "visible");
  map.current.setLayoutProperty("stab_compare", "visibility", "none");
  map.current.setLayoutProperty("dev_stab", "visibility", "none");
  map.current.setLayoutProperty("stab_proxy", "visibility", "none");
  map.current.setLayoutProperty("coastal", "visibility", "none");
  map.current.setLayoutProperty("historical", "visibility", "none");
  map.current.setLayoutProperty("presmia", "visibility", "none");
};

// LOAD style and functions for Section 3 - Dev Limitations - Irregular Lots
export const secThreeShowCompact = (map) => {
  map.current.setLayoutProperty("compact", "visibility", "visible");
  map.current.setLayoutProperty("zoning_a", "visibility", "none");
  map.current.setLayoutProperty("soft_sites", "visibility", "none");
  map.current.setLayoutProperty("rec_dev", "visibility", "none");
  map.current.setLayoutProperty("stab_compare", "visibility", "none");
  map.current.setLayoutProperty("dev_stab", "visibility", "none");
  map.current.setLayoutProperty("stab_proxy", "visibility", "none");
  map.current.setLayoutProperty("coastal", "visibility", "none");
  map.current.setLayoutProperty("historical", "visibility", "none");
  map.current.setLayoutProperty("presmia", "visibility", "none");
};
