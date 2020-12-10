import styled from "styled-components";
import { defaultRowHeaderWidth, defaultCellHeight } from '../../constant/style';

export const RowBox = styled.div`
    display: flex;

    .cell-list {
        display: flex;
    }
`;

export const RowHeader = styled.div`
    box-sizing: border-box;
    height: ${defaultCellHeight};
    line-height: ${defaultCellHeight};
    width: ${defaultRowHeaderWidth};
    text-align: center;
`;