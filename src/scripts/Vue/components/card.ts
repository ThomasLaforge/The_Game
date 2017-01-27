let template = `
<div class="card" @click="select">
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
        select(){
            console.log('select a card', this.card);
            this.$emit('select', this.card)
        }

    }
};

export { card }