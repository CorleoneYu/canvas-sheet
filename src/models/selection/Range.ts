interface IRangeProps {
    startRowIdx: number;
    endRowIdx: number;
    startColIdx: number;
    endColIdx: number;
}

/**
 * 选区范围
 */
class Range {
    public startRowIdx: number;
    public endRowIdx: number;
    public startColIdx: number;
    public endColIdx: number;

    public constructor(props: IRangeProps) {
        const { startColIdx, startRowIdx, endColIdx, endRowIdx } = props;
        this.startColIdx = startColIdx;
        this.endColIdx = endColIdx;
        this.startRowIdx = startRowIdx;
        this.endRowIdx = endRowIdx;
    }
}

export default Range;
