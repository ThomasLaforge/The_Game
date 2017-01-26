import {Card} from './Card'

class Hand {
    
    private _cards:Array<Card>;

	constructor(cards: Array<Card> = []) {
		this._cards = cards;
	}

	addNewCard(c:Card){
		this.cards.push(c)
	}

	getNbCards(): number {
		return this.cards.length
	}

	public get cards(): Array<Card> {
		return this._cards;
	}

	public set cards(value: Array<Card>) {
		this._cards = value;
	}
    

}

export {Hand}