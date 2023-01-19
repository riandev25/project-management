import { IAuthInput } from '../../interfaces/user.interface';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';

const InputElement = ({
  register,
  labelName,
  booleanError,
  inputType,
  errorType,
}: IAuthInput) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label
        htmlFor={inputType}
        className='text-sm font-semibold text-gray-500'
      >
        {labelName}
      </label>
      <input
        {...register(inputType)}
        type={inputType}
        id={inputType}
        autoFocus
        className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
        required
      />
      {booleanError ? (
        <p className='text-sm text-red-500'>
          {capitalizeFirstLetter(errorType)}
        </p>
      ) : null}
    </div>
  );
};
export default InputElement;
