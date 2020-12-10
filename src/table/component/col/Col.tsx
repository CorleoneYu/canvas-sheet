import React from 'react';
import { Col } from '../../models';
import { ColBox } from './style';

interface IProps {
    col: Col;
}

const ColComp = (props: IProps) => {
    const { col } = props;

    return <ColBox>
       {col.colId}
    </ColBox>
};

export default ColComp;
