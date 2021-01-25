import 'reflect-metadata';
import instantiationService, { services, SyncDescriptor } from '../instantiation';
import{ AServiceImpl, IAServiceDecorator } from './a';
import { IAService } from './a/a.interface'
import { BServiceImpl, IBServiceDecorator } from './b';
import { IBService } from './b/b.interface';
import { IFeature, FeatureImpl } from './feature-service';

services.set(IBServiceDecorator, new SyncDescriptor(BServiceImpl)) as IBService;
services.set(IAServiceDecorator, new SyncDescriptor(AServiceImpl)) as IAService;

const feature = instantiationService.createInstance(FeatureImpl) as IFeature;

console.log('instantiationService', feature.getA(), services);
