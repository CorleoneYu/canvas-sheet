import styled from 'styled-components';
import { tableConfig } from '@/cool-table-canvas/constant';

const { tableHeight, tableWidth } = tableConfig.style;

export const Box = styled.div`
    position: relative;
    border: 1px solid black;
    width: ${tableWidth}px;
    height: ${tableHeight}px;
`;

interface ICanvasProps {
    left: number;
    top: number;
}

export const CanvasBox = styled.div`
    position: absolute;
    left: ${(props: ICanvasProps) => props.left}px;
    top: ${(props: ICanvasProps) => props.top}px;
`;
