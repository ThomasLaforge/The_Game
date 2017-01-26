let template = `
<div class="game-info">
    {{nbCardsOnDeck}}
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