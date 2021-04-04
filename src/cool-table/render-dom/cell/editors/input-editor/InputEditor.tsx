import React, { useCallback, useEffect, useRef } from 'react';

import { InputEditorBox } from './style';

interface IProps {
    value: string;
    handleChange: (value: string) => void;
}

const InputEditor = (props: IProps) => {
    const { value } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            props.handleChange(value);
        },
        [props],
    );

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, []);

    return (
        <InputEditorBox>
            <input ref={inputRef} className="input-editor" value={value} onChange={handleChange} />
        </InputEditorBox>
    );
};

export default InputEditor;
