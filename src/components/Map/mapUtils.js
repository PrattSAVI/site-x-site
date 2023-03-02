//zoom to map
export const zoomToNYC = (map) => {
  map.current.flyTo({ center: [-74.007919, 40.702043], zoom: 10 });
  map.current.setPaintProperty('puma_selector', 'fill-color', 'transparent');
  map.current.setPaintProperty('puma_selector', 'fill-outline-color', '#ffffff');
  map.current.setLayoutProperty('puma_line', 'visibility', 'none');
  /// remove puma name to sidebar
  document.getElementById("popuptext").innerHTML = '';
  if (!document.getElementById("popuptext_nyc")) {
    return;
  }
  document.getElementById("popuptext_nyc").className = "nyc-show";
};


