// import { GameLevel } from '../modules/Vendredi'

var draggable = require('vuedraggable')

let template = `
    <div class="stack" @click="select">
        {{stackCardValue}}
    </div>
`;

const stack = {
    props : ['stack'],
    template: template,
    data : () => {
        return {
        }
    },
    components : {
        draggable
    },
    computed : {
        stackCardValue : function(){
            return this.stack.currentCardValue();
        }
    },
    methods: {
        select(){
            console.log('select a stack', this.stack)
            this.$emit('select', this.stack);
        }
    }
}

export { stack }