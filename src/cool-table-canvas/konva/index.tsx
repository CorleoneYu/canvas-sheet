import React from 'react';
import { Stage, Layer } from 'react-konva';
import Table from './table';
import { Box, boxHeight, boxWidth } from './style';

const Container = () => {
    return (
        <Box>
            <Stage width={boxWidth} height={boxHeight}>
                <Layer>
                    <Table />
                </Layer>
            </Stage>
        </Box>
    );
};

export default Container;
