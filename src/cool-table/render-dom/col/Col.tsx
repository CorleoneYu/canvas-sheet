import React from 'react';
import { ICol } from '@/cool-table/typing';
import { ColBox } from './style';

interface IProps {
    col: ICol;
}

const ColComp = (props: IProps) => {
    const { col } = props;

    return <ColBox>
        {col.type}: {col.name}
    </ColBox>
};

export default ColComp;
