import styled from "styled-components";
import { defaultCellWidth, defaultCellHeight } from '../../constant/style';

export const CellBox = styled.div`
    box-sizing: border-box;
    width: ${defaultCellWidth};
    height: ${defaultCellHeight};
    line-height: ${defaultCellHeight};
    text-align: center;

    :hover {
        border: 1px solid #eee;
    }
`;