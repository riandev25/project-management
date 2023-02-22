import { NodeViewContent, NodeViewWrapper, Extension } from '@tiptap/react';

interface CodeBlockSelectProps {
  node: {
    attrs: {
      language: string;
    };
  };
  updateAttributes: (attrs: { language: string }) => void;
  extension: Extension;
}

const CodeBlockSelect = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: CodeBlockSelectProps) => (
  <NodeViewWrapper className='code-block'>
    <select
      contentEditable={false}
      defaultValue={defaultLanguage}
      onChange={(event) => updateAttributes({ language: event.target.value })}
    >
      <option value='null'>auto</option>
      <option disabled>—</option>
      {extension.options.lowlight
        .listLanguages()
        .map((lang: string, index: number) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
    </select>
    <pre>
      <NodeViewContent as='code' />
    </pre>
  </NodeViewWrapper>
);

export default CodeBlockSelect;
