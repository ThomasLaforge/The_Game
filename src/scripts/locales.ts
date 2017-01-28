export let locales = {
  en: {
    stack : {
        direction : {
            up : 'Climb',
            down : 'Go down'
        }
    },
    game_info : {
        nb_cards_on_deck : 'Number of cards in deck'
    },
    endGame: {
        congratulation : 'GG mec! T\'assures !'
    },
    actions: {
        button : {
            draw_card : 'Complete my hand'
        },
        socketio_message : {
            dont_play_on_stack : 'Don\'t put cards on stack',
            no_big_steps  : 'Don\'t do a big step on stack'
        }
    }
  },
  fr: {
    stack : {
        direction : {
            up : 'Monter',
            down : 'Descendre'
        }
    },
    game_info : {
        nb_cards_on_deck : 'Nombre de cartes dans la pile'
    },
    endGame: {
        congratulation : 'GG ! Perfect score !'
    },
    actions: {
        button : {
            draw_card : 'Completer ma main'
        },
        socketio_message : {
            dont_play_on_stack : 'Ne posez pas de cartes sur cette pile',
            no_big_steps  : 'Ne faites pas un gros écart sur cette pile'
        }
    }
  }
}