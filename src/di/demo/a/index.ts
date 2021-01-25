import { createDecorator } from '../../instantiation';
import { IBServiceDecorator } from '../b';
import { IBService } from '../b/b.interface';
import { IAService } from './a.interface';

export const IAServiceDecorator = createDecorator<IAService>('AService');

export class AServiceImpl implements IAService {
    _serviceBrand: undefined;
    id: string;
    name: string;

    constructor(@IBServiceDecorator private bService: IBService) {
        this.id = 'a-id';
        this.name = 'a-name';
    }
}
