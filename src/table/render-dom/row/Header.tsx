import React from 'react';
import { RowHeader } from './style';

interface IProps {
    index: number;
}

const Header = (props: IProps) => {
    const { index } = props;
    return <RowHeader>{index + 1}</RowHeader>;
};

export default Header;
