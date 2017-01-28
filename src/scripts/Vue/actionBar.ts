let template = `
<div class="action-bar">
    <button @click="drawCards" :disabled="!canDraw">{{$t('actions.button.draw_card')}}</button>
    <button>{{$t('actions.socketio_message.dont_play_on_stack')}}</button>
    <button>{{$t('actions.socketio_message.no_big_steps')}}</button>
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