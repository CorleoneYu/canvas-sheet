import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { Box, boxHeight, boxWidth } from './style';

const Container = () => {
    return (
        <Box>
            <Stage width={boxWidth} height={boxHeight}>
                <Layer>
                    <Text text="Some text on canvas" fontSize={15} />
                    <Rect x={20} y={50} width={100} height={100} fill="red" shadowBlur={10} />
                </Layer>
            </Stage>
        </Box>
    );
};

export default Container;
