import Table from './Table';
import View from './View';
import Manager from '../Manager';

export interface ITableManagerProps {
    manager: Manager;
}

class TableManager {
    public tableMap: Map<string, Table> = new Map();
    public viewMap: Map<string, View> = new Map();
    private manager: Manager;

    public constructor(props: ITableManagerProps) {
        this.manager = props.manager;        
    }

    public createTable() {
        const table = new Table({
            rowIds: [],
            colIds: [],
            viewIds: [],
            manager: this.manager,
        });

        this.tableMap.set(table.tableId, table);
        return table;
    }

    public createView() {
        
    }
}

export default TableManager;
