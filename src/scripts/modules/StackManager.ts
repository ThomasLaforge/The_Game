// Imports
    import {Stack} from './Stack'
    import {Card} from './Card'
    import {StartStackValue} from './TheGame' 
    import * as Config from './Configuration'
// -------

class StackManager{

    private _stacks : Array<Stack>;

	constructor(stacks?:Array<Stack> | number) {
        if(stacks && Array.isArray(stacks)){
            this.stacks = stacks;
        }
        else{
            if(!stacks){
                stacks = Config.NB_STACKS;
            }
            this.stacks = [];
            for (let i = 0; i < stacks; i++) {
                let startValue:StartStackValue =  i < Number(stacks) / 2 ? StartStackValue.LOW : StartStackValue.LOW;
                this.stacks.push(new Stack(startValue));
            }
        }
	}


	addCard(card:Card, stack:Stack){
        let stackIndex = this.stacks.indexOf(stack);
		let stackExists = stackIndex !== -1;
        return stackExists && this.stacks[stackIndex].addCard(card);
	}

// Getters / Setters
    getUpStacks(): Array<Stack>{
        return this.stacks.filter(s => { return s.startValue === StartStackValue.LOW})        
    }
    
    getDownStacks(): Array<Stack>{
        return this.stacks.filter(s => { return s.startValue === StartStackValue.HIGH})
    }

    minValueUpStack() : number{
        let minValue = StartStackValue.LOW + 1;

        this.getUpStacks().forEach( s => {
            if( s.currentCard().value > minValue){
                minValue = s.currentCard().value + 1
            }
        })

        return minValue;
    }

    maxValueDownStack(){
        let maxValue = StartStackValue.HIGH - 1;

        this.getDownStacks().forEach( s => {
            if( s.currentCard().value < maxValue){
                maxValue = s.currentCard().value - 1;
            }
        })

        return maxValue;
    }

	get stacks(): Array<Stack> {
		return this._stacks;
	}

	set stacks(value: Array<Stack>) {
		this._stacks = value;
	}
// ----------------

}

export { StackManager }