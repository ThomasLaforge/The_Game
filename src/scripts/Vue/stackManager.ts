// import { GameLevel } from '../modules/Vendredi'

import {Stack} from '../modules/Stack'
import {stack} from './stack'

let template = `
    <div class="stack">
        <stack v-for="stack in stacks.stacks" :stack="stack" @select="stackSelected">
    </div>
`;

const stackManager = {
    props : ['stacks'],
    template: template,
    data : () => {
        return {
        }
    },
    components : {
        stack
    },
    methods: {
        stackSelected(stack:Stack){
            console.log('stackManager event on stack selected', stack)
            this.$emit('stack-selected', stack);
        }
    }
}

export { stackManager }