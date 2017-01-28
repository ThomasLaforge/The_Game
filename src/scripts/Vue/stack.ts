import { StartStackValue } from '../modules/TheGame'


let template = `
    <div class="stack">
        <div class="stack-direction">
            {{ direction }}
        </div>
    
        <div class="stack-card-on-top" 
            :class="possibleStacks.indexOf(stack) !== -1 ? 'stack-playable' : '' "
            @click="select"
        >
            {{stackCardValue}}
        </div>
    </div>
`;

const stack = {
    props : ['stack', 'possibleStacks'],
    template: template,
    data : () => {
        return {
        }
    },
    components : {
    },
    computed : {
        stackCardValue : function(){ return this.stack.currentCardValue(); },
        direction : function(){ return this.stack.startValue === StartStackValue.LOW ? this.$t('stack.direction.up') : this.$t('stack.direction.down') }
    },
    methods: {
        select(){
            console.log('select a stack', this.stack)
            this.$emit('select', this.stack);
        }
    }
}

export { stack }