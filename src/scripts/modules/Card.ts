import {CardInterface} from './TheGame';

class Card implements CardInterface {

    private _value: number;

	constructor(value: number) {
		this._value = value;
	}

    show() : void {
        console.log(this.constructor.name, this)
    }

	isPlayable(minValueUpStack: number, maxValueDownStack: number) : boolean {
		return this.value > minValueUpStack || this.value < maxValueDownStack;
	}

    get value(): number {
		return this._value;
	}

	set value(value: number) {
		this._value = value;
	}
}

export { Card };
