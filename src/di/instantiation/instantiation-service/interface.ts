import * as descriptors from '../descriptors';
import ServiceCollection from '../serviceCollection';

export interface IInstantiationService {
    readonly serviceBrand: undefined;

    /**
     * Synchronously creates an instance that is denoted by
     * the descriptor
     */
    createInstance<T>(descriptor: descriptors.SyncDescriptor0<T>): T;
    createInstance<A1, T>(descriptor: descriptors.SyncDescriptor1<A1, T>, a1: A1): T;
    createInstance<A1, A2, T>(descriptor: descriptors.SyncDescriptor2<A1, A2, T>, a1: A1, a2: A2): T;
    createInstance<A1, A2, A3, T>(descriptor: descriptors.SyncDescriptor3<A1, A2, A3, T>, a1: A1, a2: A2, a3: A3): T;
    createInstance<A1, A2, A3, A4, T>(
        descriptor: descriptors.SyncDescriptor4<A1, A2, A3, A4, T>,
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
    ): T;
    createInstance<A1, A2, A3, A4, A5, T>(
        descriptor: descriptors.SyncDescriptor5<A1, A2, A3, A4, A5, T>,
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
        a5: A5,
    ): T;
    createInstance<A1, A2, A3, A4, A5, A6, T>(
        descriptor: descriptors.SyncDescriptor6<A1, A2, A3, A4, A5, A6, T>,
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
        a5: A5,
        a6: A6,
    ): T;
    createInstance<A1, A2, A3, A4, A5, A6, A7, T>(
        descriptor: descriptors.SyncDescriptor7<A1, A2, A3, A4, A5, A6, A7, T>,
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
        a5: A5,
        a6: A6,
        a7: A7,
    ): T;
    createInstance<A1, A2, A3, A4, A5, A6, A7, A8, T>(
        descriptor: descriptors.SyncDescriptor8<A1, A2, A3, A4, A5, A6, A7, A8, T>,
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
        a5: A5,
        a6: A6,
        a7: A7,
        a8: A8,
    ): T;

    // createInstance<Ctor extends new (...args: any[]) => any, R extends InstanceType<Ctor>>(
    //     t: Ctor,
    //     ...args: GetLeadingNonServiceArgs<ConstructorParameters<Ctor>>
    // ): R;

    // /**
    //  *
    //  */
    // invokeFunction<R, TS extends any[] = []>(fn: (accessor: ServicesAccessor, ...args: TS) => R, ...args: TS): R;

    /**
     * Creates a child of this service which inherts all current services
     * and adds/overwrites the given services
     */
    createChild(services: ServiceCollection): IInstantiationService;
}
