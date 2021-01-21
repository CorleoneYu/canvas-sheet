import { createDecorator } from '../instantiation/instantiation';

export interface IAService {
    id: string;
    name: string;
}

export const IAServiceDecorator = createDecorator<IAService>('AService');

export default class AService implements IAService {
    id: string;
    name: string;
    constructor() {
        this.id = 'a-id';
        this.name = 'a-name';
    }
}
