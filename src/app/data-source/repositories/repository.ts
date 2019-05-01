export abstract class Repository <T>{
    public items : T[] = [];

    public getAll() : T[]{
        return this.items;
    }

    public add(item : T) : void{
        this.items.push(item);
    }

    public deleteItem(item ?:T) : void{ //deletes last if parameter is not given
        if (item == null || item === undefined){
            this.items.pop();
        }
        else{
            let indexOfItem = this.items.indexOf(item);
            this.items.splice(indexOfItem);
        }
    }
    
    public deleteAll() : void{
        this.items.splice(0,this.items.length);
    }
}