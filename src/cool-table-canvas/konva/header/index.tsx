import React from 'react';
import { ITableHeader } from '@/cool-table-canvas/typing';
import { Group, Rect } from 'react-konva';

interface IHeaderProps {
    header: ITableHeader;
}

const Header = (props: IHeaderProps) => {
    const { header } = props;
    const { colHeaders, colHeight, border, background } = header;

    return (
        <>
            <Group>
                {colHeaders.map((colHeader, index) => (
                    <Rect
                        width={colHeader.width}
                        height={colHeight}
                        y={0}
                        x={index * colHeader.width}
                        fill={background}
                        stroke={border.color}
                        strokeWidth={border.width}
                    />
                ))}
            </Group>
        </>
    );
};

export default Header;
