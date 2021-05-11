import React from 'react';
import { Rect, Text } from 'react-konva';

interface ITitleProps {

}

const Title: React.FC<ITitleProps> = (props) => {
    const title = '1月～2月';
    return (
        <Text 
            x={0}
            y={10}
            text={title}
        />
    )
};

export default Title;
