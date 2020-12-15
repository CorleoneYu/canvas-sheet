import Range from './Range';
import Position from './Position';

/**
 * 管理 单点选区、选区范围
 */
class Selection {
    public range: Range[] = [];
    public position: Position | null = null;
}

export default Selection;