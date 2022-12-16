import { Fragment } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const DescriptionEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    
  `,
  });

  return (
    <div className='flex flex-col border border border-gray-200 bg-white w-full'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
export default DescriptionEditor;
