import React, { PropTypes } from 'react';

import d3 from 'd3';
import Axis from './Axis';

const styles = require('./WeatherChart.scss');

export default function WeatherChart({ data }) {
  const height = 400;
  const width = 600;

  const xScale = d3.time.scale()
    .domain(d3.extent(data, ({ date }) => date))
    .range([10, width]);

  const [yMin, yMax] = d3.extent(data, ({ temp }) => temp);

  const yScale = d3.scale.linear()
    .domain([yMin - 2, yMax + 2])
    .range([height, 0]);

  const line = d3.svg.line()
    .x(({ date }) => xScale(date))
    .y(({ temp }) => yScale(temp))
    .interpolate('cardinal');

  const dots = data.map(({ temp, date }) => ({
    cx: xScale(date),
    cy: yScale(temp),
  }));

  const path = line(data);

  return (
    <svg width={width + 40} height={height + 40}>
      <g transform="translate(20, 20)">
        <Axis xScale={xScale} yScale={yScale} height={height} />

        <g>
          <path
            className={styles.line}
            d={path}
            stroke="black"
            fill="none"
          />
          <g>
            {dots.map(dot => <circle
              {...dot}
              className={styles.dot}
              key={`${dot.cx}-${dot.cy}`}
              r="3.5"
              fill="#fff"
              stroke="#000"
            />)}
          </g>
        </g>
      </g>
    </svg>
  );
}

WeatherChart.propTypes = {
  data: PropTypes.array.isRequired,
};

