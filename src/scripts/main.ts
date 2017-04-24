// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { Player } from './modules/Player';
    import { Hand } from './modules/Hand';
    import { Stack } from './modules/Stack';
    import { Card } from './modules/Card';
    let newGame  = new Game();

// Game Config

// Vue
    import { gameInfo }       from './Vue/gameInfo';
    import { localPlayer }       from './Vue/localPlayer';
    import { actionBar }       from './Vue/actionBar';
    import { stackManager }       from './Vue/stackManager';
    
    import * as VueI18n from 'vue-i18n'
    Vue.use(VueI18n)

    Vue.config.lang = 'fr'
    import {locales} from './locales'
    Object.keys(locales).forEach(function (lang) {
        Vue.locale(lang, locales[lang])
    })
// Main

let app = new Vue({
    el: '#app',
    data: (): { game: Game, hand: Hand, selectedCard:Card, possibleStacks: Array<Stack>} => {
        return {
            game : newGame,
            hand : newGame.players[0].hand,
            selectedCard : null,
            possibleStacks : []
        }
    },
    computed: {
        canDraw : function(){ return this.game.playerCanDraw() } 
    },
    components:{
        gameInfo,
        localPlayer,
        actionBar,
        stackManager
    },
    methods: {
        drawCards : function(){
            if(this.canDraw){
                this.game.completeCurrentPlayerHand();
                this.game.changePlayer();
            }
        },
        stackSelection(stack:Stack){
            console.log('main stack selection', stack)
            if(this.selectedCard){
                let cardAdded = this.game.addCard(this.selectedCard, stack)
                if(cardAdded){
                    this.possibleStacks = []
                }
            }
        },
        cardSelection(card:Card){
            this.selectedCard = this.selectedCard === card ? null : card
            this.possibleStacks = this.selectedCard ? this.game.getPossibleStacks(this.selectedCard) : [];
            console.log(this.possibleStacks)
        }
    }
})

