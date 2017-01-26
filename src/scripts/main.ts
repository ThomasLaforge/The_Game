// Libraries
    // let bootstrap = require('bootstrap/dist/js/bootstrap');
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { Player } from './modules/Player';
    let players = [ new Player('A'), new Player('B'), new Player('C')]
    let nbPlayer = players.length;
    let newGame  = new Game(nbPlayer);

// Game Config
    // newGame.level = 2
    
// Vue
    // import { dangerCard }       from './Vue/dangerCard';
// Main

let app = new Vue({
    el: '#app',
    data: () => {
        return {
        }
    },
    computed: {
    },
    components:{
    },
    methods: {
    }
})

