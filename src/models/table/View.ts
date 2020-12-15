export interface IViewProps {
    tableId: string;
    rowIds: string[];
    colIds: string[];
}

let viewIdx = 1;
class View {
    public viewId: string;
    public tableId: string;
    public rowIds: string[] = [];
    public colIds: string[] = [];

    public constructor(props: IViewProps) {
        const { tableId, rowIds, colIds } = props;
        this.viewId = `view-${viewIdx++}`;
        this.tableId = tableId;
        this.rowIds = rowIds;
        this.colIds = colIds;
    }
}
export default View;
