interface IPositionProps {
    rowIdx: number;
    colIdx: number;
}

/**
 * 选区（单个点）
 */
class Position {
    public rowIdx: number;
    public colIdx: number;

    constructor(props: IPositionProps) {
        this.rowIdx = props.rowIdx;
        this.colIdx = props.colIdx;
    }
}

export default Position;
