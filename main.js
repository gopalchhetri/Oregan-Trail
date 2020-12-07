class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passenger = []
    }

    getAvailableSeatCount(){
        return this.capacity - this.passenger.length
    }
    join(traveler){
        if(this.getAvailableSeatCount){
            this.passenger.push(traveler)
        }
    }
    shouldQuarantine(){
        return this.passenger.some(passenger => !passenger.isHealthy)
    }
    totalFood(){
        let count = 0
        for (let g = 0; g < this.passenger.length; g++){
            const traveler = this.passenger[g];
            count += traveler.food
        }
            return count
        }
    }

class Traveler {
    constructor(name){
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt(){
        this.food += 2;
    }
    eat(){

        if(this.food ===0){
            this.isHealthy = false;
        } else{
            this.food -=1;
        }
    }
    generate(){
        this.element = 1;
    }
}
