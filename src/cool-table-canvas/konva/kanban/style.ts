import styled from 'styled-components';
import { kanbanConfig } from '@/cool-table-canvas/constant';

const { kanbanHeight, kanbanWidth } = kanbanConfig.style;
export const Box = styled.div`
    position: relative;
    border: 1px solid black;
    width: ${kanbanWidth}px;
    height: ${kanbanHeight}px;
`;

