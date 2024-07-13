import React from "react";
import PropTypes from 'prop-types';

const Title = ({ title }) => {
    return (
      <>
        {/* Divider: With Heading */}
        <h3 className="flex items-center">
          <span
            aria-hidden="true"
            className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
          />
          <span className="mx-3 text-2xl font-medium">{title}</span>
          <span
            aria-hidden="true"
            className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
          />
        </h3>
        {/* END Divider: With Heading */}
      </>
    );
  }

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
