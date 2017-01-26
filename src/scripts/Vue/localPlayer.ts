import {card} from './components/card'

let template = `
<div class="local-player">
    <card v-for="card in hand.cards" :card="card" />  
</div>
`

const localPlayer = {
    props : ['hand'],
    template : template,
    data: function(){
        return {

        }
    },
    computed : {
    },
    components : {
        card
    },
    methods: {
    }
};

export { localPlayer }