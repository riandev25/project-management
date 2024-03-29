import { MouseEventHandler } from 'react';

interface SubmitBtn {
  id: string;
  name: string;
  bgColor: string;
  disabled?: boolean;
}

export const SubmitBtn = ({ id, name, bgColor, disabled }: SubmitBtn) => {
  return (
    <button
      data-id={id}
      type='submit'
      disabled={disabled}
      className={`flex justify-center items-center ${bgColor} w-20 py-1 text-sm text-white rounded-sm`}
    >
      {name}
    </button>
  );
};

interface NoIconBtnProp {
  id: number | string;
  title: string;
  onClick: MouseEventHandler;
}

export const NoIconBtn = ({ id, title, onClick }: NoIconBtnProp) => {
  return (
    <button
      data-id={id}
      type='button'
      className='bg-gray-200 flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 text-sm text-gray-700 hover:bg-gray-300'
      onClick={onClick}
    >
      {title}
    </button>
  );
};
