let template = `
<div class="game-info">
    {{ $t('game_info.nb_cards_on_deck') }} : {{nbCardsOnDeck}}
</div>
`

const gameInfo = {
    props : ['game'],
    template : template,
    data: function(){
        return {

        }
    },
    computed : {
        nbCardsOnDeck : function(){
            return this.game.deck.getNbCards()
        }
    },
    components : {
    },
    methods: {
    }
};

export { gameInfo }