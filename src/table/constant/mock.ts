import manager from './manager';
const { tableManager, cellManager, rowManager, colManager } = manager;

function createTable() {
  const table = tableManager.createTable();
  table.colIds = createCols(5);
  table.rowIds = createRows(4, table.colIds);
  return table;
}

function createCols(count: number) {
  const colIds: string[] = [];
  for (let i = 0; i < count; i++) {
    const col = colManager.createCol();
    colIds.push(col.colId);
  }
  return colIds;
}

function createRows(count: number, colIds: string[]) {
  const rowIds: string[] = [];
  for (let i = 0; i < count; i++) {
    const row = rowManager.createRow({ colIds });
    createCells(row.rowId, colIds);
    rowIds.push(row.rowId);
  }
  return rowIds;
}

function createCells(rowId: string, colIds: string[]) {
  return colIds.map((colId, index) => {
    const cell = cellManager.createCell({
      colId,
      rowId,
      data: `cell-${index}`,
    });
    return cell.cellId;
  });
}

const table = createTable();
console.log('manager', manager);
export default table;
