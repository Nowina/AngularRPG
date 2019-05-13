import { IContainer } from './container';

export interface IContainerHandler {
    container: IContainer;
    maxLoad: number;
    currentLoad: number;
}