class Player
end

class Deck
    attr_reader :ranks, :suits, :value
    attr_accessor :deck
    def initialize
        @ranks = ["A", ]
    end

    def change_values(card)
        case card[:rank]
        when "J", "Q", "K"
            card[:value] = 10
        when "A"
            card[:value] = 11
        else 
            card[:value] = card[:rank]
            .to_i     
        end
    def build_deck
        puts "Deck is assembled"
        @ranks.each do |j|
            @suits.each do |i|
                card = { rank: j, suit: i }
                change_values(card)
                puts card
                @deck.push(card)
            end
        end
        p @deck
    end
end

def shuffle_now
    build_deck
    puts "Deck"
    @deck.shuffle!
end

end 