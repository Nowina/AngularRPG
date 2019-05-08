export abstract class Repository<T>{
    public items: T[] = [];

    public getAll(): T[] {
        return this.items;
    }
    public addArray(items: T[]): void {
        items.forEach(s => this.items.push(s));
    }
    public add(firstItem: T, ...restOfItems: T[]): void {
        this.items.push(firstItem);
        restOfItems.forEach(s => this.items.push(s));
    }

    public deleteItem(item: T): void {
        let indexOfItem = this.items.indexOf(item);
        this.items.splice(indexOfItem, 1);
    }

    public deleteLastItem() {
        this.items.pop();
    }

    public deleteAll(): void {
        this.items.splice(0, this.items.length);
    }
}