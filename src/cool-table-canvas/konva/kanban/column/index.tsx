import React from 'react';
import { Group } from 'react-konva';
import Title from './title';
import Card from '../card';

const Column = () => {
    const cards = [1, 2, 3];
    return (
        <>
            <Title />
            {cards.map((card, index) => (
                <Group y={30 + index * 150}>
                    <Card />
                </Group>
            ))}
        </>
    );
};

export default Column;
