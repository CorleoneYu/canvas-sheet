import React from 'react';
import { RenderElementProps } from 'slate-react';
import { Editor, Transforms } from 'slate';

// Define a React component renderer for our code blocks.
const CodeElement = (props: RenderElementProps) => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    );
};

function isCodeBlockActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
        match: (n) => n.type === 'code',
    });

    return !!match;
}

function toggleCodeBlock(editor: Editor) {
    const isActive = isCodeBlockActive(editor);
    Transforms.setNodes(editor, { type: isActive ? null : 'code' }, { match: (n) => Editor.isBlock(editor, n) });
}

export { CodeElement, toggleCodeBlock };
