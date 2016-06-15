import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import { findDOMNode } from 'react-dom';

const styles = require('./WeatherChart.scss');

export default class Axis extends Component {
  static propTypes = {
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { xScale, yScale } = this.props;

    const xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .ticks(d3.time.hour, 6)
      .tickFormat(d3.time.format('%H:%M'));

    const yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left');

    d3.select(findDOMNode(this.refs.xAxis))
      .call(xAxis);

    d3.select(findDOMNode(this.refs.yAxis))
      .call(yAxis);
  }

  render() {
    const { height } = this.props;

    return (
      <g>
        <g className={styles.axis} ref="xAxis" transform={`translate(0, ${height})`} />
        <g className={styles.axis} ref="yAxis" />
      </g>
    );
  }
}
