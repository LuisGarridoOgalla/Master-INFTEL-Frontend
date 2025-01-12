class SlotMachine{
    constructor (){
        this.currencyCount = 0;
        this.state = [false, false, false];
    }

    randomBoolean() {
        this.state = [Math.random(0, 1) >= 0.5, Math.random(0, 1) >= 0.5, Math.random(0, 1) >= 0.5];
    }
    play(){
        this.currencyCount += 1;
        this.randomBoolean();
         if (this.state.some(value => value === false)) {
            console.log('Good luck next time!!');
         } else {
            console.log(`Congratulations!!!. You won ${this.currencyCount} coins!!`);
            this.currencyCount = 0;
         }
    }
}

const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();


