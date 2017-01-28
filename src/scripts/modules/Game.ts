// imports
    import { Deck }          from './Deck';
    import { Card }          from './Card';
    import { Player }        from './Player';
    import { Stack }         from './Stack';
    import { StackManager }  from './StackManager';    
    import { NbCardToGet }   from './TheGame'
    import * as _            from 'lodash'
// -------

class Game {

    private _deck: Deck;
    private _players : Array<Player>;
	private _currentPlayer : Player;
    private _stackManager : StackManager;

	constructor(players?: Array<Player>|number, deck?: Deck, stacks?: StackManager, currentPlayer?:Player) {
		if(players){
			if(!Array.isArray(players)){
				let nbPlayers = players;
				players = []; 
				for (let pIndex = 0; pIndex < nbPlayers; pIndex++) {
					players.push(new Player());
				}
			}
		}
		else{
			players = [new Player()]
		}
		this.players = players;
        this.deck = deck ? deck : new Deck();
		this.stackManager = stacks ? stacks : new StackManager();
		this.currentPlayer = currentPlayer ? currentPlayer : this.getRandomPlayer();

		this.giveInitCards();
	}

	giveInitCards(): void{
		let nbCardsToDraw = this.getInitialHandSize();
		this.players.forEach(p => {
			let cardsToGive = this.deck.drawCards(nbCardsToDraw)
			p.addNewCard(cardsToGive);
		})
	}

	// Actions
	addCard(card:Card, stack:Stack){
		let cardExists = this.currentPlayer.hand.cards.indexOf(card) !== -1;
		let stackExists = this.stackManager.stacks.indexOf(stack) !== -1;
		let cardAdded = this.stackManager.addCard(card, stack);
		if(cardAdded) {
			this.currentPlayer.removeCard(card)
		}
		return cardExists && stackExists && cardAdded
	}

	drawCard(){
		let cardDraw = this.deck.drawOneCard();
		this.currentPlayer.addNewCard(cardDraw);
	}

	completeCurrentPlayerHand(){
		while(this.currentPlayer.hand.getNbCards() !== this.getInitialHandSize()){
			this.drawCard();
		}
	}

	changePlayer() : void {
		let nextPlayerIndex = (this.players.indexOf(this.currentPlayer) + 1) % this.getNbPlayers()
		this.currentPlayer = this.players[nextPlayerIndex]
	}

	getPlayableCards(player : Player) : Array<Card>{
		let playerExists = this.players.indexOf(player) !== -1;
		return playerExists ? player.getPlayableCards(this.stackManager.minValueUpStack(), this.stackManager.maxValueDownStack()) : []
	}

	// Game State
	isLost() : boolean {
		return this.currentPlayer.hand.cards.filter(c => {return c.isPlayable(this.stackManager.minValueUpStack(), this.stackManager.maxValueDownStack()) }).length === 0 && !this.playerCanDraw()
	}

	isWon() : boolean {
		let nbCards = 0;
		this.players.forEach( p => {
			nbCards += p.hand.getNbCards()
		})
		nbCards += this.deck.getNbCards()

		return nbCards === 0;
	}

	getScore(): number {
		let score = 0;

		this.players.forEach( p => {
			score += p.hand.getNbCards();
		})
		score += this.deck.getNbCards();

		return score;
	}

	playerCanDraw(): boolean {
		let minimumNbCardToPlayEachTurn = this.deck.isEmpty() ? 1 : 2;
		return this.currentPlayer.hand.cards.length <= this.getInitialHandSize() - 2;
	}
    
// Getters / Setters
	getInitialHandSize(): number{
		let nbCardsToDraw:number = NbCardToGet.AT_3_OR_MORE;
		let nbPlayers = this.getNbPlayers()
		if(nbPlayers === 1) { 
			nbCardsToDraw = NbCardToGet.AT_1; 
		}
		else if(nbPlayers === 2) {
			nbCardsToDraw = NbCardToGet.AT_2;  
		}
		return nbCardsToDraw;
	}	

	getNbPlayers(): number {
		return this.players.length;
	}
	getRandomPlayer() : Player {
		return this.players[_.random(0, this.players.length - 1)]
	}

	getPossibleStacks(card:Card): Array<Stack> {
		return this.stackManager.getPossibleStacks(card);
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

	get stackManager(): StackManager {
		return this._stackManager;
	}

	set stackManager(value: StackManager) {
		this._stackManager = value;
	}

	get currentPlayer(): Player {
		return this._currentPlayer;
	}

	set currentPlayer(value: Player) {
		this._currentPlayer = value;
	}
//------------------- 
    

}

export { Game }
