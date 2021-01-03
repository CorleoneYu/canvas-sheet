import React from 'react';
import { Editor, Transforms, Text } from 'slate';
import { RenderLeafProps } from 'slate-react';

function isBoldMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
        match: (n) => n.bold === true,
        universal: true,
    });
    return !!match;
}

function toggleBoldMark(editor: Editor) {
    const isActive = isBoldMarkActive(editor);
    Transforms.setNodes(editor, { bold: isActive ? null : true }, { match: (n) => Text.isText(n), split: true });
}

const Leaf = (props: RenderLeafProps) => {
    return (
        <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}>
            {props.children}
        </span>
    );
};

export { toggleBoldMark, Leaf };
