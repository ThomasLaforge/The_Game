// Imports
	import {Card} from './Card'
	import {Hand} from './Hand'
// -------

class Player {

    private _hand: Hand;
    private _pseudo: string;

	constructor(pseudo?:string, hand?: Hand) {
		if(!pseudo){ pseudo = 'Invité-' + Date.now()}
		this.pseudo = pseudo;
        if(!hand){ hand = new Hand()}
		this._hand = hand;
	}

	addNewCard(c:Card|Array<Card>) {
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
	get pseudo(): string {
		return this._pseudo;
	}

	set pseudo(value: string) {
		this._pseudo = value;
	}
// ------------------

}

export {Player}