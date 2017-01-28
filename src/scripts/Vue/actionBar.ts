let template = `
<div class="action-bar">
    <button @click="drawCards" :disabled="!canDraw">Complete your hand</button>
</div>
`

const actionBar = {
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