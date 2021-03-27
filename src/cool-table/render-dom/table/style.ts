import styled from 'styled-components';
import { defaultRowHeaderWidth, defaultCellHeight } from '../../constant/style';

export const TableBox = styled.div`
    user-select: none;
    .table-operate {
        .table-btn {
            margin-right: 20px;
        }
    }

    .table-header {
        display: flex;
        margin-top: 20px;
        margin-left: ${defaultRowHeaderWidth};
        line-height: ${defaultCellHeight};
        height: ${defaultCellHeight};
    }
`;
