let template = `
<div class="action-bar">
    <button @click="drawCards" :disabled="!canDraw">Complete your hand</button>
    <button>Don't put cards on stack</button>
    <button>Don't do a big step on stack</button>
</div>
`

const actionBar = {
    props : ['canDraw'],
    template : template,
    data: function(){
        return {

        }
    },
    computed : {
    },
    components : {
    },
    methods: {
        drawCards : function(){
            this.$emit('draw-cards');
        }
    }
};

export { actionBar }