import React, { useMemo, useState, useCallback } from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from 'slate-react';
import { toggleBoldMark, Leaf } from './feature/bold';
import { CodeElement, toggleCodeBlock } from './feature/code';

const EditorContainer = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState<Node[]>([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]);

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />;
            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props: RenderLeafProps) => {
        return <Leaf {...props} />;
    }, []);

    return (
        <div className="editor">
            <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
                <div className="toolbar">
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            toggleBoldMark(editor);
                        }}
                    >
                        Bold
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            toggleCodeBlock(editor);
                        }}
                    >
                        Code Block
                    </button>
                </div>
                <Editable
                    renderLeaf={renderLeaf}
                    renderElement={renderElement}
                    onKeyDown={(event) => {
                        if (!event.ctrlKey) {
                            return;
                        }

                        switch (event.key) {
                            case '`': {
                                event.preventDefault();
                                toggleCodeBlock(editor);
                                break;
                            }
                            case 'b': {
                                event.preventDefault();
                                toggleBoldMark(editor);
                                break;
                            }
                        }
                    }}
                />
            </Slate>
        </div>
    );
};

const DefaultElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>;
};

export default EditorContainer;
