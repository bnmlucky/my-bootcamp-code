class Card
    attr_reader :face, :suit
    def initialize(face, suit)
        @face = face
        @suit = suit
    end

    def output_card
        "#{@face}#{@suit}"
    end

    def value
        case @face
        when :J, :Q, :K then 10
        when :A then 11
        else @face
        end
    end

end