import Position from './Position';

interface IRangeProps {
    // start 不一定在 end 前面， 取决于用户先点了哪个
    start: Position;
    end: Position;
}

/**
 * 选区范围
 */
class Range {
    public start: Position;
    public end: Position;

    public constructor(props: IRangeProps) {
        const { start, end } = props;
        this.start = start;
        this.end = end;
    }
}

export default Range;
