import { Children, useContext, cloneElement } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import '../index.css';
import PropTypes from 'prop-types';

export default function Content({ children }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'darkContent mainPage' : 'lightContent mainPage'}>
      {Children.map(children, (child) =>
        cloneElement(child)
      )}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
