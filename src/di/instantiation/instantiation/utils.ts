import { ServiceIdentifier } from '.';

export const serviceIds = new Map<string, ServiceIdentifier<any>>();

export const DI_TARGET = '$di$target';
export const DI_DEPENDENCIES = '$di$dependencies';
