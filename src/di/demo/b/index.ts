import { createDecorator } from '../../instantiation';
import { IBService } from './b.interface';

export const IBServiceDecorator = createDecorator<IBService>('BService');

export class BServiceImpl implements IBService {
    id: string;
    name: string;
    constructor() {
        this.id = 'b-id';
        this.name = 'b-name';
    }
}
