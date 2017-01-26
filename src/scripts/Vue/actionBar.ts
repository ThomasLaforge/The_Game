let template = `
<div class="action-bar">
    <button @click="drawCard">Click to draw a card</button>
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
        drawCard : function(){
            console.log('draw card on action bar')
            this.$emit('draw-card');
        }
    }
};

export { actionBar }