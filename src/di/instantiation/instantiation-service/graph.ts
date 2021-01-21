export class Node<T> {
    readonly data: T;
    readonly incoming = new Map<string, Node<T>>();
    readonly outgoing = new Map<string, Node<T>>();

    constructor(data: T) {
        this.data = data;
    }
}

export default class Graph<T> {
    private readonly nodes = new Map<string, Node<T>>();

    // 节点计算 hash 的逻辑由业务提供
    private hash: (node: T) => string;

    constructor(hash: (node: T) => string) {
        this.hash = hash;
    }

    roots(): Node<T>[] {
        const ret: Node<T>[] = [];
        for (let node of this.nodes.values()) {
            ret.push(node);
        }
        return ret;
    }

    insertEdge(from: T, to: T): void {
        const fromNode = this.lookupOrInsertNode(from);
        const toNode = this.lookupOrInsertNode(to);

        fromNode.outgoing.set(this.hash(to), toNode);
        toNode.incoming.set(this.hash(from), fromNode);
    }

    removeNode(data: T): void {
        const key = this.hash(data);
        this.nodes.delete(key);
        // 这里太暴力了吧？
        for (let node of this.nodes.values()) {
            node.outgoing.delete(key);
            node.incoming.delete(key);
        }
    }

    lookupOrInsertNode(data: T): Node<T> {
        const key = this.hash(data);
        if (this.nodes.has(key)) {
            return this.nodes.get(key)!;
        }

        const node = new Node(data);
        this.nodes.set(key, node);
        return node;
    }

    lookup(data: T): Node<T> | undefined {
        return this.nodes.get(this.hash(data));
    }

    isEmpty(): boolean {
        return this.nodes.size === 0;
    }

    toString(): string {
        const data: string[] = [];
        for (let [key, value] of this.nodes) {
            data.push(
                `${key}, (incoming)[${[...value.incoming.keys()].join(', ')}], (outgoing)[${[
                    ...value.outgoing.keys(),
                ].join(',')}]`,
            );
        }
        return data.join('\n');
    }
}
