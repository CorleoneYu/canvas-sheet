
import 'reflect-metadata';

import instantiationService, { services, SyncDescriptor, printServiceDependencies} from '../instantiation';
import{ AServiceImpl, IAServiceDecorator } from './a';
import { IAService } from './a/a.interface'
import { BServiceImpl, IBServiceDecorator } from './b';
import { IBService } from './b/b.interface';
import { IFeature, FeatureImpl } from './feature-service';

services.set(IBServiceDecorator, new SyncDescriptor(BServiceImpl)) as IBService;
services.set(IAServiceDecorator, new SyncDescriptor(AServiceImpl)) as IAService;

printServiceDependencies(FeatureImpl, services);
instantiationService.createInstance(FeatureImpl) as IFeature;

// @ts-ignore
console.log('instantiationService', FeatureImpl['$di$dependencies']);
