require 'highline'

require "./player"
require "./card"
require "./deck"
require "./game"

cli = HighLine.new
name = cli.ask "Hi! What is your name?"

game = Game.new(100, 10000, 10, name)

puts "Let's play a game!"

def quit 
    puts "Thanks for playing!"
    exit
end

while true do
    if game.human.bankrupt?
        puts "Sorry, you are out of money! Get more from the bank and come play again!"
        quit
    end
    cli.choose do |menu|
        menu.prompt = "Please chose:"
        menu.choice(:deal) do
            game.play_round
            result = game.adjudicate_round
            case result
            when :house_won then puts "Sorry, you lost"
            when :human_won then puts "Congrats! You won!"
            else puts "A tie!"
            end
            puts game.get_state
        end
        menu.choices(:check_bankroll) { puts game.get_state }
        menu.choices(:change_bet) do
            bet = cli.ask("How much would you like to bet?", Integer) { |x| x.in = 1..100 }
            game.round_bet = bet
            puts "Set round bet to #{bet}"
        end
        menu.choices(:quit) { quit }
        menu.default = :deal
    end
end