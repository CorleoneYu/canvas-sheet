import Col, { IColProps } from './Col';

class ColManager {
  public colMap: Map<string, Col> = new Map();

  public createCol(props: IColProps = {}) {
    const col = new Col(props);
    this.colMap.set(col.colId, col);
    return col;
  }
}

export default ColManager;
