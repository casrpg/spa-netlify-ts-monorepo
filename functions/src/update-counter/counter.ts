export class Counter {
    constructor(private count: number) {}
    
    increment(): this {
        this.count++;
        return this;
    }
    
    decrement(): this {
        this.count--;
        return this;
    }
    
    getCount(): number {
        return this.count;
    }
}
