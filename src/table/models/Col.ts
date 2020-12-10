export enum ColType {
  text = 'text',
  number = 'number',
  select = 'select',
  date = 'date',
  people = 'people',
}

export interface IColProps {
  type?: ColType;
  name?: string;
}

let colIdx = 1;
class Col {
  public colId: string;
  public type: ColType;
  private name: string = '';

  public constructor(props: IColProps) {
    const { type = ColType.text, name = '' } = props;
    this.colId = `c-${colIdx++}`;
    this.type = type;
    this.name = name;
  }

  public get colName() {
    return this.name ? this.name : `未命名列 ${this.colId}`;
  }
}

export default Col;
