/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  linkText: string;
};

export const PageNavLink: React.FC<Props> = ({
  to, linkText,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'menu__link',
      { 'is-active': isActive },
    )}
  >
    {linkText}
  </NavLink>
);