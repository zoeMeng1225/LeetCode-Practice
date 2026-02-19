function canCompleteCircuit(gas: number[], cost: number[]): number {
    //if the Total Gas of this journey is not enough to cover the total cost, then no matter where you start from, it is impossible to complete the lap.
    //sum(gas) < sum(cost) return -1; 
    //i: current i the gas stations; 
    //gas[i]: when you drive car into [i]th gas station, will add gas [i] gas. 
    //cost[i]: leave [i]th station for next station, the car is burn off cost[i] gas.
    let totalGas = 0; //total of fuel can be added;
    let totalCost = 0; //total gas required
    let currentTank = 0; // current fuel in the tank
    let startStation = 0 //starting point we looking for

    for(let i = 0; i < gas.length; i++){
        //total gas and total cost;
        totalGas += gas[i];
        totalCost += cost[i]

        //current value of fuel
        currentTank += gas[i] - cost[i];

        //if the car breaks down
        if(currentTank < 0){
            //any station from our current startstation to i can not be the starting point, we must try the next station
            startStation = i + 1;
            //reset the tank to 0 to start fresh from the new station
            currentTank = 0;
        }
    }

    //final global check: 
    //if the total gas across all station is less than total cost,
    //it's impossible to complete the loop;
    if(totalGas < totalCost){
        return -1;
    }

    
    return startStation;
    
};