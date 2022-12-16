import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const DescriptionEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'prose ml-5 focus:outline-none',
        // 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
  `,
  });

  return (
    <div className='flex flex-col border border-gray-300 bg-white'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
export default DescriptionEditor;
