import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function Vertical() {
  const data = [12, 36, 42, 25, 35, 10, 38, 47];
  const barRef = useRef(null);
  const w = 600;
  const h = 400;

  useEffect(() => {
    let currentRef = d3
      .select(barRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("padding", 10)
      .style("background-color", "grey")
      .style("margin-left", 50);

    currentRef
      .selectAll("bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 8 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", (d, i) => (d > 35 ? "tomato" : "yellow"));

    currentRef
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 8 * d);
  }, []);

  return (
    <div className="parent">
      <div ref={barRef}></div>
    </div>
  );
}

export default Vertical;
