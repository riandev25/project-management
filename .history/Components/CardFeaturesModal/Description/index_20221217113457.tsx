import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import DescriptionEditor from './DescriptionEditor';
import { useState } from 'react';

const Description = () => {
  const data = `<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>`;

  const [isEditing, setIsEditing] = useState(false);
  const onClickHandler = () => {};

  return (
    <div className='flex flex-row gap-4 text-gray-600'>
      <FontAwesomeIcon
        icon={faBarsStaggered}
        size='lg'
        className='translate-y-1'
      />
      <div className='flex flex-col gap-3 w-full max-w-[492px]'>
        <section className='flex flex-row gap-3 justify-start'>
          <span className='font-bold'>Description</span>
          {isEditing ? (
            <NoIconBtn id='edit-btn' title='Edit' onClick={onClickHandler} />
          ) : null}
        </section>
        <DescriptionEditor data={data} />
        <div></div>
        {/* <NoIconBtn /> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default Description;
