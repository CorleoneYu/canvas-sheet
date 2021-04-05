import styled from 'styled-components';
import { defaultCellWidth, defaultCellHeight, gray } from '@/cool-table/constant/style';

interface ICellBoxProps {
    isActive: boolean;
    isLastRow: boolean;
    isFirstRow: boolean;
    isLastCol: boolean;
    isFirstCol: boolean;
}

export const CellBox = styled.div`
    position: relative;
    box-sizing: border-box;
    width: ${defaultCellWidth};
    height: ${defaultCellHeight};
    line-height: ${defaultCellHeight};
    text-align: center;
    border: 1px solid ${gray};
    border-color: ${(props: ICellBoxProps) => {
        return props.isActive ? 'blue' : gray;
    }};
    cursor: pointer;
`;
