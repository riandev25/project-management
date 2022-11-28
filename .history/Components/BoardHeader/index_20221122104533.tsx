import TransparentBtn from "../../UI/Buttons/TransparentBtn";
import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";

const BoardHeader = () => {
  return (
    <section>
      <input type='text' defaultValue='PM' className='w-content' />
      <TransparentBtn icon={faStar} />
      <TransparentBtn icon={faUser} label='Workspace visible' />
    </section>
  );
};

export default BoardHeader;
