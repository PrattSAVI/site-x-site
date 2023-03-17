import React, { useEffect, useRef, useState} from "react";
import { debounce } from "underscore";
import Box from "../Box";
import * as d3 from "d3";

const BoxChart = ({ lot_value, far_value }) => {
  const boxRef = useRef();

  const [data, setData] = useState([]);

  const margin = {
    top: 0,
    right: 30,
    bottom: 40,
    left: 125,
  };
  const width = 800 - margin.left - margin.right;
  const height = 900 - margin.top - margin.bottom;
  const tickValues = [3701, 3901, 3801, 4001, 4101];
  const tickLabels = [
    "Bronx",
    "Staten Island",
    "Manhattan",
    "Brooklyn",
    "Queens",
  ];

  const svg = d3
    .select(boxRef.current)
    // .attr("viewBox", '0 0 580 700')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleLinear().domain([0, 100]).range([0, width]);

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(x)
        .ticks(4)
        .tickFormat((d) => d + "%")
    )
    .selectAll("text")
    // .attr("transform", "translate(15,0)")
    .attr("class", "x-axis");
    // .style("text-anchor", "end");

  const y = d3.scaleBand().range([0, height]);

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/PrattSAVI/site-x-site/main/data/pluto_rec_dev12_2.csv",
      (data) => {
        setData(data);
        createMap(data);
      }
    );
  }, []);

  const createMap = debounce((data) => {
    // Parse the Data. Repeated below for when chart needs to update.
    // TODO: Use the mean & sum to calculate % for both the color of map and the bar chart.
    let pumaData = d3
      .nest()
      .key(function (row) {
        return row.puma;
      })
      .rollup(function (values) {
        return {
          boro: d3.max(values, function (d) {
            return d.boro;
          }),
          nabes: d3.max(values, function (d) {
            return d.nabes;
          }),
          puma: d3.mean(values, function (d) {
            return +d.puma;
          }),
          puma_lots: d3.mean(values, function (d) {
            return +d.puma_lots;
          }),
          filtered_lots: d3.sum(values, function (d) {
            return +d.count;
          }),
        };
      })
      .map(
        data.filter(function (row) {
          return (
            row["LotArea_12"] < lot_value | row["availFAR_pct_fx"] < far_value
          );
        })
      )
      .values()
      .sort((a, b) => d3.ascending(a.puma, b.puma));

    // Y axis
    y.domain(
      pumaData.map(function (d) {
        return d.puma;
      })
    ).padding(0.2);
    let yAxisGenerator = d3.axisLeft(y).tickSizeOuter(0);
    yAxisGenerator.tickValues(tickValues);
    yAxisGenerator.tickFormat((d, i) => tickLabels[i]);
    // let yAxis = 
    svg.append("g").call(yAxisGenerator);

    // Blue Bars
    svg
      .selectAll("blue-bar")
      .data(pumaData)
      .enter()
      .append("rect")
      .attr("class", "blue-bar")
      .attr("y", function (d) {
        return y(d.puma);
      })
      .attr("x", x(0))
      .attr("width", function (d) {
        return x(100 * (d.filtered_lots / d.puma_lots));
      })
      .attr("height", 14)
      .attr("fill", "#71B7E2");

    // Grey Bars
    svg
      .selectAll("grey-bar")
      .data(pumaData)
      .enter()
      .append("rect")
      .attr("class", "grey-bar")
      .attr("y", function (d) {
        return y(d.puma);
      })
      .attr("x", function (d) {
        return x(100 * (d.filtered_lots / d.puma_lots));
      })
      .attr("width", function (d) {
        return x(100) - x(100 * (d.filtered_lots / d.puma_lots));
      })
      .attr("height", 14)
      .attr("fill", "#E2E2E2");

    // Labels on bars
    svg
      .selectAll("text.myRect")
      .data(pumaData)
      .enter()
      .append("text")
      .attr("fill", "#FFFFFF")
      .attr("class", "bar-label")
      .attr("x", x(0) + 2)
      .attr("y", function (d) {
        return y(d.puma) + 11;
      })
      .text((d) => d.nabes);
  }, 500);

  useEffect(() => {
    createMap(data);
  }, [data, far_value, lot_value]);

  return (
    <Box
      className="legendBox"
      position="absolute"
      top="0"
      left="0"
      width="75%"
      height="100%"
      zIndex="1002"
      border="1px solid #AAA"
      backgroundColor="white"
      padding="25px"
      overflow="scroll"
    >
      <div className="chart-container">
        <div className="bar-legend">
          <p className="chart-title">Developed lots per PUMA</p>
          <p className="blue-label">
            Percent sites not meeting thresholds for CEQR review
          </p>
        </div>
        <svg ref={boxRef}></svg>
      </div>
    </Box>
  );
};

export default BoxChart;