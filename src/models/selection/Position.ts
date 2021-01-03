interface IPositionProps {
    rowIdx: number;
    colIdx: number;
}

/**
 * 位置
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
