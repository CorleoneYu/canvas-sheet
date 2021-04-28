import styled from 'styled-components';
export const boxHeight = 700;
export const boxWidth = 800;

export const Box = styled.div`
    position: relative;
    border: 1px solid black;
    width: ${boxWidth}px;
    height: ${boxHeight}px;
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
