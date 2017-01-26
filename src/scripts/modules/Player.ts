// Imports
	import {Card} from './Card'
	import {Hand} from './Hand'
// -------

class Player {

    private _hand: Hand;

	constructor(hand?: Hand) {
        if(!hand){ hand = new Hand()}
		this._hand = hand;
	}

	addNewCard(c:Card) {
		this.hand.addNewCard(c);
	}

	getPlayableCards(minValueUpStack: number, maxValueDownStack: number){
		return this.hand.cards.filter( c => { return c.isPlayable(minValueUpStack, maxValueDownStack) }); 
	}

// Getters / Setters
	get hand(): Hand {
		return this._hand;
	}

	set hand(value: Hand) {
		this._hand = value;
	}
// ------------------

}

export {Player}