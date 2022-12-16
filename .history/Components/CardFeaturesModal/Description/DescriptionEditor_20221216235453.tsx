import styles from './description.module.css';
import { useEditor, ReactNodeViewRenderer, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
// import css from 'highlight.js/lib/languages/css';
// import js from 'highlight.js/lib/languages/javascript';
// import ts from 'highlight.js/lib/languages/typescript';
// import html from 'highlight.js/lib/languages/xml';
// load all highlight.js languages
// import { lowlight } from 'lowlight';
import MenuBar from './MenuBar';

const DescriptionEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: `${styles.ProseMirror} prose-sm mx-5 my-3 focus:outline-none`,
      },
    },
    content: `
    <h2>
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
      </blockquote>
  `,
  });

  return (
    <div
      className={`${styles.ProseMirror} flex flex-col border text-gray-600 border-gray-300 bg-white focus:outline focus:border-blue-500`}
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
export default DescriptionEditor;
