type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    //use a map for better performace and type safety
    //key:eventName(string) -> value array of callback functions
    private events: Map<string, Callback[]>;
    
    constructor(){
        this.events = new Map();
    }
    
    subscribe(eventName: string, callback: Callback): Subscription {
        //initialization: if this event hasn't been subscribed to before, create a new list;
        if(!this.events.has(eventName)){
            this.events.set(eventName, [])
        }

        //add listener: push the new callback into the list
        const listeners = this.events.get(eventName)!;
        listeners.push(callback);

        //removeing This callback
        return {
            unsubscribe: () => {
                //find where this callback is sitting in the array
                const index = listeners.indexOf(callback);
                //if found, remove it
                if(index !== -1){
                    listeners.splice(index, 1)
                }
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        //check exist: if no one is listening ,return empty array immediately
        if(!this.events.has(eventName)){
            return[];
        }

        const listeners = this.events.get(eventName)!;
        const results:any[]= [];

        //loop through all callback, run them, and save result
        for(const listener of listeners){
            results.push(listener(...args))
        }

        return results;

    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */