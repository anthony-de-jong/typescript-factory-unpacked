import { Node, SourceFile } from 'typescript';

function* nodeIterator(file: SourceFile, node: Node, filter: (node: Node) => boolean): Generator<Node> {
    if (filter(node))
        yield node;

    for (const child of node.getChildren(file))
        yield* nodeIterator(file, child, filter);
}

export function findAll<T extends Node = Node>(file: SourceFile, node: Node, filter: (node: Node) => boolean): T[] {
    return Array.from(nodeIterator(file, node, filter)) as T[];
}

export function findAllInFile<T extends Node = Node>(file: SourceFile, filter: (node: Node) => boolean) : T[] {
    return Array.from(nodeIterator(file, file, filter)) as T[];
}

export function findFirstInFile<T extends Node = Node>(file: SourceFile, filter: (node: Node) => boolean): T | undefined {
    return nodeIterator(file, file, filter).next().value as T;
}
