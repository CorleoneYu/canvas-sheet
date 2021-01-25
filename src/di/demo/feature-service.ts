import { createDecorator } from '../instantiation';
import { IAServiceDecorator } from './a';
import { IAService } from './a/a.interface';
import { IBServiceDecorator } from './b';
import { IBService } from './b/b.interface';

export interface IFeature {
    _serviceBrand: undefined;
    getA(): void;
    getB(): void;
}

export const IFeatureDecorator = createDecorator<IFeature>('Feature');

export class FeatureImpl implements IFeature {
    _serviceBrand: undefined;

    constructor(
        @IAServiceDecorator private aService: IAService,
        @IBServiceDecorator private bService: IBService,
    ) {}

    getA() {
        console.log('getA', this.aService);
    }

    getB() {
        console.log('getB', this.bService);
    }
}
