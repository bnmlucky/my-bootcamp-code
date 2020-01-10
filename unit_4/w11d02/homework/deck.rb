require "./card"

class Deck
    attr_accessor :cards
    def initialize
        @faces = [*(2..10), :J, :Q, :K, :A]
        @suits = [:♣, :♥, :♠, :♦]
        generate_new_deck
    end

    def generate_new_deck
        @cards = []
        @faces.each do |face|
            @suits.each do |suit|
                @cards << Card.new(face, suit)
            end
        end
        shuffle      
    end

    def shuffle
        @cards.shuffle!
    end

    def renew_if_needed
        if @cards.empty?
            generate_new_deck
        end
    end
end