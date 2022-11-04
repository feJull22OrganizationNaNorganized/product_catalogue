import React from 'react';
// import classNames from 'classnames';
// import { NavLink } from 'react-router-dom';
// import s from '../Header/Header.module.scss';

// type Props = {
//   to: string,
//   text: string,
// }

// export const PageNavLink: React.FC<Props> = ({ to, text }) => {
//   return (
//     <NavLink
//       className={({ isActive}:any):string => classNames('nav__link', { 'is-active': isActive })}
//       to={to}
//     >{text}
//     </NavLink>
//   );
// };

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import s from '../Header/Header.module.scss';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classNames(s.link, { [s.link__active]: isActive })
    }
  >
    {text}
  </NavLink>
);