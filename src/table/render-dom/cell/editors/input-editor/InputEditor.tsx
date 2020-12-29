import React, { useCallback } from 'react';

import { InputEditorBox } from './style';

interface IProps {
    value: string;
    handleChange: (value: string) => void;
}

const InputEditor = (props: IProps) => {
    const { value } = props;

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            props.handleChange(value);
        },
        [props],
    );

    return (
        <InputEditorBox className="input-editor">
            <input value={value} onChange={handleChange} />
        </InputEditorBox>
    );
};

export default InputEditor;
