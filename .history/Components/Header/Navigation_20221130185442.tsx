type HeaderNavProps = {
  nav: Array<string>;
};

const Navigation = ({ nav }: HeaderNavProps) => {
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
