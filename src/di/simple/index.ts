import 'reflect-metadata';

// 参数装饰器 
const decorator = (target: Object, propertyName: string, index: number) => {
    // @ts-ignore
    target['deps'] = [{
        index,
        id: 'idA',
    }];
}
class Feature {
    name = 'feature';
    a: any;
    constructor(
        @decorator a: any,
    ) {
        this.a = a;
    }
}

// 服务集
class ServiceCollection {
    // 服务集合
    // key 为服务标识
    // value 为 服务ctor
    private entries = new Map<string, any>();

    set(id: string, ctor: any) {
        this.entries.set(id, ctor);   
    }

    get(id: string): any {
        return this.entries.get(id);
    }
}

const services = new ServiceCollection();

class A {
    name = 'a'
}

services.set('idA', A);

class InstantiationService {
    services: ServiceCollection;

    constructor(services: ServiceCollection) {
        this.services = services;
    }

    createInstance(ctor: any) {
        // 1. 获取 ctor 依赖的 服务id
        // 结果为: ['idA']
        const depIds = ctor['deps'].map((item: any) => item.id);

        // 2. 获取服务 id 对应的 服务构造器
        // 结果为：[A]
        const depCtors = depIds.map((id: string) => services.get(id));

        // 3. 获取服务实例
        // 结果为: [ A { name: 'a'} ]
        const args = depCtors.map((ctor: any) => new ctor());

        // 4. 依赖的服务作为参数注入，实例化所需要模块
        // 结果为：[ Feature { name: 'feature', a }]
        const result = new ctor(...args);

        return result;
    }
}

const instantiation = new InstantiationService(services);
const feature = instantiation.createInstance(Feature);
console.log('feature', feature);
