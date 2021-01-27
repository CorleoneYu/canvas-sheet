import { ServiceIdentifier } from '../instantiation';

enum TraceType {
    Creation,
    Invocation,
    Branch,
}

/**
 * 用来追踪创建实例时的路径（先后顺序，依赖关系等）
 */
export default class Trace {
    static traceInvocation(ctor: any): Trace {
        return new Trace(TraceType.Invocation, ctor.name || (ctor.toString() as string).substring(0, 42).replace(/\n/g, ''));
    }

    static traceCreation(ctor: any): Trace {
        return new Trace(TraceType.Creation, ctor.name);
    }

    private static _totals: number = 0; // 总共耗时
    private readonly _start: number = Date.now(); // 开始时间
    private readonly _deps: [ServiceIdentifier<any>, boolean, Trace?][] = [];

    private constructor(
        readonly type: TraceType,
        readonly name: string | null
    ) {}

    // first 为是否为第一次实例化
    branch(id: ServiceIdentifier<any>, first: boolean): Trace {
        const child = new Trace(TraceType.Branch, id.toString());
        this._deps.push([id, first, child]);
        return child;
    }

    stop() {
        const dur = Date.now() - this._start;
        Trace._totals += dur;

        let causedCreation = false;

        // n 为层级
        function printChild(n: number, trace: Trace) {
            const res: string[] = [];
            const prefix = new Array(n + 1).join('\t');
            for (const [id, first, child] of trace._deps) {
                if (first && child) {
                    // 依赖的服务被顺带创建
                    causedCreation = true;
                    res.push(`${prefix}CREATES -> ${id}`);
                    const nested = printChild(n + 1, child);
                    if (nested) {
                        res.push(nested);
                    }
                } else {
                    // 该服务已被创建，直接使用
                    res.push(`${prefix}uses -> ${id}`);
                }
            }
            return res.join('\n');
        }

        const lines = [
			`${this.type === TraceType.Creation ? 'CREATE' : 'CALL'} ${this.name}`,
			`${printChild(1, this)}`,
			`DONE, took ${dur.toFixed(2)}ms (grand total ${Trace._totals.toFixed(2)}ms)`
		];

		if (dur > 2 || causedCreation) {
			console.log(lines.join('\n'));
		}
    }
}
