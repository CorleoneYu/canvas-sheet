import React from 'react';
import { Row } from '../../../models';
import { RowHeader } from './style';

interface IProps {
    index: number;
    row: Row;
}

const Header = (props: IProps) => {
    const { index } = props;
    return <RowHeader>{index + 1}</RowHeader>;
};

export default Header;
