import { HeadeNavProps } from '../../types/props/props_HeaderNav';

const Nav = ({ nav }: HeadeNavProps) => {
  return (
    <ul>
      {nav.map((item) => {
        return (
          <li key={item}>
            <a>{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
