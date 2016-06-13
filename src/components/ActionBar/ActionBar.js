import React, { PropTypes } from 'react';

const styles = require('./ActionBar.scss');

export default function ActionBar({ load, reset }) {
  console.log(styles);
  return (
    <div className={`row ${styles['action-bar']}`}>
      <div className="col-md-12">
        <button className="btn btn-primary" type="button" onClick={load}>Load</button>
        <button className="btn btn-default" type="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

ActionBar.propTypes = {
  load: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
