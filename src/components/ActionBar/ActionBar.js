import React, { PropTypes } from 'react';

const styles = require('./ActionBar.scss');

export default function ActionBar({ isEnabled, load, reset }) {
  return (
    <div className={`row ${styles.actionBar}`}>
      <div className="col-md-12">
        <button
          className="btn btn-primary"
          type="button"
          onClick={load}
          disabled={!isEnabled}
        >
          Load
        </button>
        <button
          className="btn btn-default"
          type="button"
          onClick={reset}
          disabled={!isEnabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

ActionBar.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
