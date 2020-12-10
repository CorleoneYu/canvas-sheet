import Table from './Table';

class TableManager {
  public tableMap: Map<string, Table> = new Map();

  public createTable() {
    const table = new Table({
      rowIds: [],
      colIds: [],
    });
    this.tableMap.set(table.tableId, table);
    return table;
  }
}

export default TableManager;
