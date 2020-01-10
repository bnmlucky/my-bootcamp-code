require "./player"
require "./deck"

class Game
    attr_accessor :human, :the_house, :deck, :round_bet
    def initialize(human_bankroll, house_bankroll, round_bet, human_name = "")
        @human = Player.new(human_name, human_bankroll)
        @the_house = Player.new("computer", house_bankroll)
        @round_bet = round_bet
        @deck = Deck.new()
    end

    def get_state
        "Your bankroll: #{@human.bankroll}. Your cards: #{@human.cards_string}. My cards: #{@the_house.cards_string}"
    end

    def play_round
        @human.reset_cards
        @the_house.reset_cards
        deal_to_player(@human)
        deal_to_player(@human)
        deal_to_player(@the_house)    
        deal_to_player(@the_house)    
    end

    def adjudicate_round
        if @human.busted? || @the_house.got_blackjack? || ((@the_house.cards_sum > @human.cards_sum) && !@the_house.busted?)
            @human.bankroll -= @round_bet
            @the_house.bankroll += @round_bet
            :house_won
        elsif @human.got_blackjack? || @the_house.busted? || @human.cards_sum > @the_house.cards_sum
            @the_house.bankroll -= @round_bet
            @human.bankroll += @round_bet
            :human_won
        else
            :tie
        end
    end

    def deal_to_player(player)
        deck.renew_if_needed
        player.hand << @deck.cards.pop
    end
end