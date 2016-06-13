import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function LoadInfo({ loading, error }) {
  const alertClassName = classNames('alert', {
    'alert-info': loading,
    'alert-danger': error,
  });

  return (
    <div className={alertClassName}>
         {loading && 'Loading...'}
         {!loading && error}
    </div>
  );
}

LoadInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
