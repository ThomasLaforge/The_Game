// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { Player } from './modules/Player';
    let newGame  = new Game();

// Game Config

// Vue
    import { gameInfo }       from './Vue/gameInfo';
    import { localPlayer }       from './Vue/localPlayer';
    import { actionBar }       from './Vue/actionBar';
// Main

let app = new Vue({
    el: '#app',
    data: () => {
        return {
            game : newGame,
            hand : newGame.players[0].hand
        }
    },
    computed: {        
    },
    components:{
        gameInfo,
        localPlayer,
        actionBar
    },
    methods: {
        drawCard : function(){
            console.log('draw card on main')
            this.game.drawCard()
        }
    }
})

