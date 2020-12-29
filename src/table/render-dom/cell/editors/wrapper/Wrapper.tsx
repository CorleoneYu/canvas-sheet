import React, { useCallback } from 'react';
import useCellModel, { ICell, getCellId } from '../../../../models/useCell';
import InputEditor from '../input-editor';

interface IProps {
    cell: ICell;
}

const EditorWrapper = (props: IProps) => {
    const { cell } = props;
    const { updateCellValue } = useCellModel();

    const handleChange = useCallback(
        (value: string) => {
            updateCellValue(getCellId(cell), value);
        },
        [cell, updateCellValue],
    );
    return <InputEditor value={cell.value} handleChange={handleChange} />;
};

export default EditorWrapper;
