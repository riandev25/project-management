const HEADING = [
  {
    id: 'normal-text-btn',
    text: 'Normal text',
    size: 'base',
  },
  {
    id: 'heading-1-btn',
    text: '1',
    size: '3xl',
  },
  {
    id: 'heading-2-btn',
    text: '2',
    size: '2xl',
  },
  {
    id: 'heading-3-btn',
    text: '3',
    size: 'xl',
  },
  {
    id: 'heading-4-btn',
    text: '4',
    size: '[18px]',
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
    <div className='absolute z-30 top-3 left-0 w-96 bg-white'>
      {HEADING.map((item, i) => {
        return (
          <button
            key={i}
            id={item.id}
            type='button'
            className={`flex flex-row justify-between text-${item.size}`}
          >
            <span className={`text-gray-800`}>
              {i === 0 ? item.text : `Heading-${item.text}`}
            </span>
            <span className={`p-0.5 bg-gray-200 text-gray-300`}>
              {`Ctrl+Alt+${i === 0 ? '0' : item.text}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default HeadingModal;
