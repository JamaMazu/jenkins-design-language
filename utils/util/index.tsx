import * as React from 'react';

export type Constructor<T = {}> = new (...args: any[]) => T;
export const isEmptyChildren = (children: React.ReactNode) => React.Children.count(children) === 0;
export const isFunction = <T extends Function>(value: any): value is T =>
    typeof value === 'function';
