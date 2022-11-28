import { HeadeNavProps } from '../../types/props/props_HeaderNav';

const Navigation = ({ nav }: HeadeNavProps) => {
  return (
    <ul className='flex flex-row'>
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

export default Navigation;
