import React from 'react';
import { Rect, Text } from 'react-konva';

const Card = () => {
    const cardWidth = 200;
    const cardHeight = 120;
    const title = 'O1：实现看板视图，完成完整交互';
    const owner = '大帅比';
    const isFinished = '是否完成目标';

    return (
        <>
            <Rect
                fill="white"
                stroke="#ddd"
                strokeWidth={1}
                width={cardWidth}
                height={cardHeight}
                cornerRadius={2}
                shadowColor="black"
                shadowBlur={10}
                shadowOffset={{ x: 0, y: 4}}
                shadowOpacity={0.1}
            />
            <Text 
                text={title}
                fill="black"
                fontSize={14}
                lineHeight={1.5}
                padding={10}
                width={cardWidth}
            />
            <Text
                y={45}
                text={owner}
                fill="#999"
                fontSize={12}
                lineHeight={1.5}
                padding={10}
                width={cardWidth}
            />
            <Text
                y={45}
                text={owner}
                fill="#999"
                fontSize={12}
                lineHeight={1.5}
                padding={10}
                width={cardWidth}
            />
            <Text
                y={65}
                text={isFinished}
                fill="#555"
                fontSize={12}
                lineHeight={1.5}
                padding={10}
                width={cardWidth}
            />
        </>
    )
};

export default Card;
