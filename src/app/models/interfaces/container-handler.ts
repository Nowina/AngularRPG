import { IContainer } from './container';

export interface IContainerHandler {
    container: IContainer;
    maxCapacity: number;
    currentCapacity: number;
}