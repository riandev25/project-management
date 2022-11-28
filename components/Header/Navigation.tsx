import { HeadeNavProps } from '../../interfaces/props/props_HeaderNav';

const Navigation = ({ nav }: HeadeNavProps) => {
  return (
    <ul className='flex flex-row gap-4 p-3'>
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
