//define the structure of the data stored in the Map
interface CacheEntry{
    value: number;
    timer: ReturnType<typeof setTimeout> // compatible with both Node and Browser
}

class TimeLimitedCache {
    //use the Map to store key -> {value,timer}
    private cache: Map<number, CacheEntry>;
    constructor() {
        this.cache = new Map();
    }
    /**
        @param {number} key
        @param {number} value
        @param {number} duration time until expiration in ms
        @return {boolean} true if un-expired key already existed, false otherwise
     */
    
    set(key: number, value: number, duration: number): boolean {
        //check if the key already exists
        const exists = this.cache.has(key);

        //if it exists, we must clear the old timer
        //otherwise, the old timer will still trigger and delete our new value prematurely
        if(exists){
            clearTimeout(this.cache.get(key)!.timer);
        }

        //set up a new timer to auto delete this key after duration.
        const timerId = setTimeout(() => {
            this.cache.delete(key)
        },duration)

        //update the new value and the new timers id into the Map
        this.cache.set(key, {value: value, timer: timerId});

        return exists;
    }
    /**
        @param {number} key
        @return {number} value(associated with key)
     */
    get(key: number): number {
        //if the key is in the map, it means it hasn't expired yet(timer deletes it)
        if(this.cache.has(key)){
            return this.cache.get(key)!.value
        }
        return -1
    }
    /**
    @return {number} count of non-expired keys
     */
    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */