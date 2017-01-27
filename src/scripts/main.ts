// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { Player } from './modules/Player';
    import { Stack } from './modules/Stack';
    import { Card } from './modules/Card';
    let newGame  = new Game();

// Game Config

// Vue
    import { gameInfo }       from './Vue/gameInfo';
    import { localPlayer }       from './Vue/localPlayer';
    import { actionBar }       from './Vue/actionBar';
    import { stackManager }       from './Vue/stackManager';
    
// Main

let app = new Vue({
    el: '#app',
    data: () => {
        return {
            game : newGame,
            hand : newGame.players[0].hand,
            selectedCard : null
        }
    },
    computed: {     
    },
    components:{
        gameInfo,
        localPlayer,
        actionBar,
        stackManager
    },
    methods: {
        drawCard : function(){
            console.log('draw card on main')
            this.game.drawCard()
        },
        stackSelection(stack:Stack){
            console.log('main stack selection', stack)
            if(this.selectedCard){
                console.log('try to add card on stack', this.selectedCard, stack, this.game.addCard(this.selectedCard, stack))
                console.log(this.game)
            }
        },
        cardSelection(card:Card){
            this.selectedCard = this.selectedCard === card ? null : card
        }
    }
})

