import { createDecorator } from '../instantiation/instantiation';

export interface IBService {
    id: string;
    name: string;
}

export const IBServiceDecorator = createDecorator<IBService>('BService');

export default class BService implements IBService {
    id: string;
    name: string;
    constructor() {
        this.id = 'b-id';
        this.name = 'b-name';
    }
}
