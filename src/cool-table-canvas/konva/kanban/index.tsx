import React from 'react';
import { Stage, Layer, Group } from 'react-konva';
import Column from './column';
import { kanbanConfig } from '@/cool-table-canvas/constant';
import { Box } from './style';

const { kanbanHeight, kanbanWidth } = kanbanConfig.style;

const Container = () => {
    const columns = [1, 2, 3];

    return (
        <Box>
            <Stage width={kanbanWidth} height={kanbanHeight}>
                <Layer>
                    {columns.map((column, index) => (
                        <Group x={20 + index * 220}>
                            <Column />
                        </Group>
                    ))}
                </Layer>
            </Stage>
        </Box>
    );
};

export default Container;
