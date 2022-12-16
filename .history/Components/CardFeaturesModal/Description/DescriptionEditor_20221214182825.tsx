import { Fragment } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const DescriptionEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <Fragment>
      {/* <MenuBar editor={editor} /> */}
      <EditorContent editor={editor} />
    </Fragment>
  );
};
export default DescriptionEditor;
