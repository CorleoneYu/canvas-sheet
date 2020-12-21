import styled from 'styled-components';
import { defaultCellWidth, defaultCellHeight, gray } from '../../constant/style';

interface ICellBoxProps {
    isLastRow: boolean;
}

export const CellBox = styled.div`
    box-sizing: border-box;
    width: ${defaultCellWidth};
    height: ${defaultCellHeight};
    line-height: ${defaultCellHeight};
    text-align: center;

    border-top: 1px solid ${gray};
    border-bottom: ${(props: ICellBoxProps) => {
        if (!props.isLastRow) {
            return 'none';
        }
        return `1px solid ${gray};`;
    }};

    cursor: pointer;
`;
