const HEADING = [
  {
    id: 'normal-text-btn',
    text: 'Normal text',
    size: 'base',
  },
  {
    id: 'heading-1-btn',
    text: '1',
    size: '4xl',
  },
  {
    id: 'heading-2-btn',
    text: '2',
    size: '4xl',
  },
  {
    id: 'heading-3-btn',
    text: '3',
    size: 'xl',
  },
  {
    id: 'heading-4-btn',
    text: '4',
    size: 'lg',
  },
  {
    id: 'heading-5-btn',
    text: '5',
    size: 'base',
  },
  {
    id: 'heading-6-btn',
    text: '6',
    size: 'sm',
  },
];

const HeadingModal = () => {
  return (
    <div className='absolute z-30 top-9 left-2 grid grid-cols-1 w-64 border border-gray-300 bg-white'>
      {HEADING.map((item, i) => {
        return (
          <button
            key={i}
            id={item.id}
            type='button'
            className={`flex flex-row justify-between items-center w-full h-10 border border-black px-4 text-[24px]`}
          >
            <span className={`text-gray-800`}>
              {i === 0 ? item.text : `Heading-${item.text}`}
            </span>
            <span className={`p-0.5 bg-gray-200 text-[10px] text-gray-500`}>
              {`Ctrl+Alt+${i === 0 ? '0' : item.text}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default HeadingModal;
