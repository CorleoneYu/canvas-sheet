import { SyncDescriptor } from './descriptors';
import { ServiceIdentifier } from './instantiation';

// 服务集
export default class ServiceCollection {
    // 服务集合
    // key 为服务标识
    // value 为 服务描述符 或者 服务实例
    private entries = new Map<ServiceIdentifier<any>, any>();

    constructor(...entries: [ServiceIdentifier<any>, any][]) {
        for (let [id, service] of entries) {
            this.set(id, service);
        }
    }

    set<T>(id: ServiceIdentifier<T>, instanceOrDescriptor: T | SyncDescriptor<T>): T | SyncDescriptor<T> {
        const result = this.entries.get(id);
        this.entries.set(id, instanceOrDescriptor);
        return result;
    }

    forEach(callback: (id: ServiceIdentifier<any>, instanceOrDescriptor: any) => any): void {
        this.entries.forEach((value, key) => callback(key, value));
    }

    has(id: ServiceIdentifier<any>): boolean {
        return this.entries.has(id);
    }

    get<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T> {
        return this.entries.get(id);
    }
}
