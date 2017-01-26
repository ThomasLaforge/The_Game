// imports
    import { Deck }          from './Deck';
    import { Card }          from './Card';
    import { Player }        from './Player';
    import { Stack }         from './Stack';
    import { StackManager }  from './StackManager';    
    import * as _            from 'lodash'
// -------

class Game {

    private _deck: Deck;
    private _players : Array<Player>;
    private _stacks : StackManager;


	constructor(players: Array<Player>, deck?: Deck, stacks?: StackManager) {
		if (!deck) { deck = new Deck(); }
        if (!stacks) { stacks = new StackManager(); }
        this._deck = deck;
		this._players = players;
		this._stacks = stacks;
	}
    

	get deck(): Deck {
		return this._deck;
	}

	set deck(value: Deck) {
		this._deck = value;
	}

	get players(): Array<Player> {
		return this._players;
	}

	set players(value: Array<Player>) {
		this._players = value;
	}

	get stacks(): StackManager {
		return this._stacks;
	}

	set stacks(value: StackManager) {
		this._stacks = value;
	}
    

}

export { Game }
