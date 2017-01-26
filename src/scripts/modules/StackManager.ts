import {Stack} from './Stack'
import {StartStackValue} from './TheGame' 
import * as Config from './Configuration'

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
            for (let i = 0; i < stacks; i++) {
                let startValue:StartStackValue =  i < Number(stacks) / 2 ? StartStackValue.LOW : StartStackValue.LOW;
                this.stacks.push(new Stack(startValue));
            }
        }
	}

	public get stacks(): Array<Stack> {
		return this._stacks;
	}

	public set stacks(value: Array<Stack>) {
		this._stacks = value;
	}
    

}

export { StackManager }