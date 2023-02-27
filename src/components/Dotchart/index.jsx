import React, { useEffect, useRef, useContext } from "react";
import { MapContext } from "../../pages/part1";
import useOnClickOutside from "../../utils/useOnClickOutside";
import * as d3 from "d3";
import Box from "../Box";

const DotChart = () => {
  const dotRef = useRef();
  // close chart when clicking outside of it
  const containerRef = useRef();
  const { displayDotChart } = useContext(MapContext);
  useOnClickOutside(containerRef, () => {
    displayDotChart();
  });

  useEffect((ref) => {
    // set the dimensions and margins of the graph
    // set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 150 };
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;
    // add labels for highest to lowest
    const tickValues = [0, 50, 100];
    const tickLabels = [
      "Lowest Vulnerability",
      "City-wide Median",
      "Highest Vulnerability",
    ];

    // append the svg object to the body of the page
    const svg = d3
      .select(dotRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Read the data and compute summary statistics for each specie
    d3.csv(
      "https://raw.githubusercontent.com/skhaji/test_data/main/puma_displacement.csv",
      function (data) {
        // Add the options to the button
        d3.select("#selectButton")
          .selectAll("myOptions")
          .data(
            d3
              .map(data, function (d) {
                return d.puma;
              })
              .values()
          )
          .enter()
          .append("option")
          .text(function (d) {
            return d.puma + ": " + d.nabes;
          }) // text showed in the menu
          .attr("value", function (d) {
            return d.puma;
          }); // corresponding value returned by the button

        // Build and Show the Y scale
        var y = d3
          .scaleLinear()
          .domain([0, 100]) // Note that here the Y scale is set manually
          .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));
        // .attr("transform", "translate(-20, 0)") this moves the y axis line to the left
        let yAxisLabelGenerator = d3.axisLeft(y);
        yAxisLabelGenerator.tickValues(tickValues);
        yAxisLabelGenerator.tickFormat((d, i) => tickLabels[i]);
        // let yAxisLabel = 
        svg.append("g")
          // move the labels to the left, need to remove the axis line here
          .attr("transform", "translate(-22, -1)") 
          .attr("class", "chart-label")
          .call(yAxisLabelGenerator);

        // Build and Show the X scale. It is a band scale like for a boxplot: each group has an dedicated RANGE on the axis.
        // This range has a length of x.bandwidth
        var x = d3
          .scaleBand()
          .range([-1, width])
          .domain([
            "Displacement Risk",
            "Market Pressure",
            "Population Vulnerability",
            "Housing Conditions",
          ])
          .padding(0.75); // This is important: it is the space between 2 groups. 0 means no padding. 1 is the maximum.
        svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        svg
          .append("line")
          .attr("y1", y(0))
          .attr("y2", y(100))
          .attr("x1", 3 * (width / 10) - 30)
          .attr("x2", 3 * (width / 10) - 30)
          .style("fill", "#ADAEAD")
          .attr("stroke", "#C2C2C2");

        // Add individual points with jitter
        var jitterWidth = 70;
        svg
          .selectAll("indPoints")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", function (d) {
            return x(d.index) + x.bandwidth() * 2 - Math.random() * jitterWidth - 30;
          })
          .attr("cy", function (d) {
            return y(d.value);
          })
          .attr("r", 5)
          // .style("fill", function(d){ return(color(d.value))})
          .style("fill", "#ADAEAD")
          .attr("stroke", "#C2C2C2");
        // .append("line")
        //   .attr("y1", y(0))
        //   .attr("y2", y(100))
        //   .attr("x1", 200)
        //   .attr("x2", 200)
        //   .attr("stroke", "#C2C2C2")

        // A function that update the chart
        // function update(selectedGroup) {
        //   // Create new data with the selection?
        //   var dataFilter = data.map(function (d) {
        //     return { time: d.puma, value: d[selectedGroup] };
        //   });
        // }

        // When the button is changed, run the updateChart function
        d3.select("#selectButton").on("change", function (d) {
          // recover the option that has been chosen
          var selectedOption = d3.select(this).property("value");

          svg
            .selectAll("circle")
            .style("fill", function (d) {
              if (d.puma === selectedOption) {
                return "#6A42A4";
              } else {
                return "#ADAEAD";
              }
            })
            .style("stroke", function (d) {
              if (d.puma === selectedOption) {
                return "#6A42A4";
              } else {
                return "#ADAEAD";
              }
            })
            .attr("r", function (d) {
              if (d.puma === selectedOption) {
                return 10;
              } else {
                return 5;
              }
            });
        });
      }
    );
  }, []);

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="75%"
      height="100%"
      zIndex="1006"
      border="1px solid #AAA"
      backgroundColor="white"
      padding="20px"
      ref={containerRef}
      // className="legendBox"
      overflow="scroll"
      // style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="dot-chart-container">
        <p className="dev_soft dot-chart-title">Displacement Risk Vulnerability</p>
        <svg ref={dotRef}></svg>
        <select id="selectButton">
          <option>Select neighborhood</option>
        </select>
      </div>
    </Box>
  );
};

export default DotChart;
