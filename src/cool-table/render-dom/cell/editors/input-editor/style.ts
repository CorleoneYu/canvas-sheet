import styled from 'styled-components';
import { defaultCellWidth, defaultCellHeight } from '@/cool-table/constant/style';

export const InputEditorBox = styled.div`
    .input-editor {
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: 0;
        margin: 0;
        height: ${defaultCellHeight};
        width: ${defaultCellWidth};
        border: 1px solid rgba(0,0,0,0.1);
        border-color: blue;
    }
`;
