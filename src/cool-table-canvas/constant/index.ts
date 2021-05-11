const tableConfig = {
    overview: {
        rowCount: 50,
        colCount: 13,
    },
    style: {
        tableWidth: 800,
        tableHeight: 700,
        cell: {
            width: 107,
            height: 24,
        },
        header: {
            border: {
                color: '#cdcdcd',
                width: 1,
            },
            background: {
                normal: '#f9fafb',
            },
            color: {
                normal: 'rgba(0, 0, 0, 0.88)',
            },
            colHeaderHeight: 24,
            rowHeaderWidth: 50,
        },
    },
}

const kanbanConfig = {
    style: {
        kanbanWidth: 800,
        kanbanHeight: 700,
    }
};

export {
    tableConfig,
    kanbanConfig,
}
