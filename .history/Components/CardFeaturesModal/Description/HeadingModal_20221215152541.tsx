const HEADING = [
  {
    id: 'normal-text-btn',
    text: 'Normal text',
    fontSize: '16px',
  },
  {
    id: 'heading-1-btn',
    text: '1',
    fontSize: '24px',
  },
  {
    id: 'heading-2-btn',
    text: '2',
    fontSize: '22px',
  },
  {
    id: 'heading-3-btn',
    text: '3',
    fontSize: '20px',
  },
  {
    id: 'heading-4-btn',
    text: '4',
    fontSize: '16px',
  },
  {
    id: 'heading-5-btn',
    text: '5',
    fontSize: '18px',
  },
  {
    id: 'heading-6-btn',
    text: '6',
    fontSize: '16px',
  },
];

const HeadingModal = () => {
  return (
    <div>
      {HEADING.map((item, i) => {
        return (
          <button key={i} id={item.id} type='button'>
            <span>{i === 0 ? item.text : `Heading-${item.text}`}</span>
            <span className={`p-0.5 text-[${item.fontSize}] bg-gray-200`}>
              {i === 0 ? 'Ctrl+Alt+0' : `Ctrl+Alt+${item.text}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default HeadingModal;
