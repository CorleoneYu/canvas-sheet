import styled from 'styled-components';
import { defaultRowHeaderWidth, defaultCellHeight, darkGray } from '../../constant/style';

export const RowBox = styled.div`
    display: flex;

    .cell-list {
        display: flex;
    }
`;

export const RowHeader = styled.div`
    box-sizing: border-box;
    width: ${defaultRowHeaderWidth};
    height: ${defaultCellHeight};
    line-height: ${defaultCellHeight};
    text-align: center;
    color: ${darkGray};
    cursor: grab;
`;
