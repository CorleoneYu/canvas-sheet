import { createDecorator } from '../instantiation/instantiation';

export interface IFeatureService {
    id: string;
    name: string;
}

export const IAServiceDecorator = createDecorator<IAService>('AService');

export default class AService implements IAService {
    id: string;
    name: string;

    constructor() // TODO: 开启装饰器语法
    {
        this.id = 'feature-id';
        this.name = 'feature-name';
    }
}
