import {card} from './components/card'
import {Card} from '../modules/Card'

let template = `
<div class="local-player">
    <card v-for="card in hand.cards" :card="card" @select="cardSelection" :class="selectedCard === card ? 'card-selected': '' "/>  
</div>
`

const localPlayer = {
    props : ['hand', 'selectedCard'],
    template : template,
    data: function(){
        return {
        }
    },
    computed : {
        classSelected : function(){ return 3 }
    },
    components : {
        card
    },
    methods: {
        cardSelection(card:Card){
            console.log('localPlayer card selection', card)
            this.$emit('card-selected', card)
        }
    }
};

export { localPlayer }