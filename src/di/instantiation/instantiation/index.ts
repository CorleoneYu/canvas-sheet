import { serviceIds, DI_DEPENDENCIES, DI_TARGET } from './utils';

// 服务标识, 有两个作用
// 1. 服务的 id
// 2. 参数装饰器
export interface ServiceIdentifier<T> {
    (...args: any[]): void;
    type: T;
}

// 为服务创建对应的 标识
export function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {
    if (serviceIds.has(serviceId)) {
        return serviceIds.get(serviceId)!;
    }

    // 参数装饰器
    const id = function (target: Function, key: string, index: number): any {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
        storeServiceDependency(id, target, index, false);
    } as any;

    id.toString = () => serviceId;

    serviceIds.set(serviceId, id);
    return id;
}

/**
 * 存储依赖信息
 * @param id 服务标识
 * @param target 参数装饰器修饰的类
 * @param index 参数装饰器对应的参数，在构造器参数列表中的索引
 * @param optional 参数装饰器对应的参数， 是否为可选参数
 */
function storeServiceDependency(id: Function, target: Function, index: number, optional: boolean): void {
    if ((target as any)[DI_TARGET] === target) {
        // 被装饰过，则直接添加信息
        (target as any)[DI_DEPENDENCIES].push({ id, index, optional });
        return;
    }

    // 被装饰的类记录下 服务标识 等信息
    (target as any)[DI_DEPENDENCIES] = [{ id, index, optional }];
    (target as any)[DI_TARGET] = target;
}

export function getServiceDependencies(ctor: any): { id: ServiceIdentifier<any>; index: number; optional: boolean }[] {
    return ctor[DI_DEPENDENCIES] || [];
}
