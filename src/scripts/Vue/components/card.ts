let template = `
<div class="card" @click="clickCard">
    {{card.value}}
</div>
`

const card = {
    props: ['card'],
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
        },
        clickCard : function(){
            
        }
    }
};

export { card }