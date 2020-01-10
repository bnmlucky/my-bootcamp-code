class Player
    attr_accessor :name, :bankroll, :hand
    def initialize (name, bankroll)
        @name = name
        @bankroll = bankroll
        @hand = []
    end

    def cards_sum
        @hand.inject(0) { |sum, card| sum + card.value} 
    end

    def reset_cards
        @hand = []
    end

    def busted?
        cards_sum > 21
    end

    def got_blackjack?
        cards_sum == 21
    end

    def cards_string
        hand_str = @hand.map { |card| card.output_card }
        hand_str.join(", ")
    end

    def bankrupt?
        bankroll <= 0
    end 
end