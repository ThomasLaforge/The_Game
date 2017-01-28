import {Card} from './Card'
import {StartStackValue} from './TheGame' 

class Stack {

    private _startValue: StartStackValue;
    private _cards?: Array<Card>;


	constructor(startValue:StartStackValue, cards: Array<Card> = []) {
		this._cards = cards;
		this._startValue = startValue;
	}
    
    addCard(card:Card): boolean{
        let res:boolean = false;
        if( this.canPlay(card) ){
            this.cards.push(card);
            res = true;
        }

        return res;
    }

    canPlay(card: Card): boolean {
        return  (this.startValue === StartStackValue.LOW && card.value > this.currentCardValue() )
                ||
                (this.startValue === StartStackValue.HIGH && card.value < this.currentCardValue() )            
                ||
                (this.startValue === StartStackValue.LOW && card.value === this.currentCardValue() - 10 )
                ||
                (this.startValue === StartStackValue.HIGH && card.value === this.currentCardValue() + 10 )

    }

    currentCardValue() : number {
        return this.cards.length > 0 ? this.cards[this.cards.length - 1].value : this.startValue
    }

	get startValue(): StartStackValue {
		return this._startValue;
	}

	set startValue(value: StartStackValue) {
		this._startValue = value;
	}
    

	get cards(): Array<Card> {
		return this._cards;
	}
	set cards(value: Array<Card>) {
		this._cards = value;
	}
    

}

export {Stack}