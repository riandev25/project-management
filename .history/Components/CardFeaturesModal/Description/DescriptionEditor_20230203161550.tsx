import styles from './description.module.css';
import {
  useEditor,
  ReactNodeViewRenderer,
  EditorContent,
  Content,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import Underline from '@tiptap/extension-underline';

interface IDescriptionEditor {
  data: Content;
}

const DescriptionEditor = ({ data }: IDescriptionEditor) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: `${styles.ProseMirror} prose-sm mx-5 my-3 focus:outline-none`,
      },
    },
    content: data,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
    },
  });

  return (
    <div>
      <section
        className={`${styles.ProseMirror} flex flex-col border border-gray-300 rounded-md bg-white focus:outline focus:border-blue-500`}
      >
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </section>
    </div>
  );
};
export default DescriptionEditor;
