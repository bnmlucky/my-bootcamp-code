require "./player"
require "./card"
require "./deck"
require "./game"

describe Card do
  it 'returns correct value for 2..10' do
    (2..10).each do |face|
      expect(Card.new(face, :♣).value).to eq face
    end
  end

  it 'returns value 10 for J, Q, K' do
    [:J, :Q, :K].each do |face|
      expect(Card.new(face, :♣).value).to eq 10
    end 
  end

  it 'returns value 11 for A' do
    expect(Card.new(:A, :♣).value).to eq 11
  end
end


describe Player do
  it 'returns correct cards_sum' do
    # Setup
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(2, :♣), Card.new(:K, :♣)]
    
    # Act
    res = player.cards_sum

    # Validate
    expect(res).to eq 23
  end

  it 'resets hand correctly' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣)]
    player.reset_cards
    expect(player.hand).to eq []
  end

  it 'busted? returns true if cards_sum > 21' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(:A, :♣)]
    expect(player.busted?).to eq true
  end

  it 'busted? returns false if cards_sum == 21' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(:K, :♣)]
    expect(player.busted?).to eq false
  end  

  it 'busted? returns false if cards_sum < 21' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(2, :♣)]
    expect(player.busted?).to eq false
  end 
  
  it 'got_blackjack? returns false if cards_sum != 21' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(2, :♣)]
    expect(player.got_blackjack?).to eq false
  end

  it 'got_blackjack? returns true if cards_sum == 21' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(:K, :♣)]
    expect(player.got_blackjack?).to eq true
  end

  it 'cards_string returns correct hand representation' do
    player = Player.new("test", 100)
    player.hand = [Card.new(:A, :♣), Card.new(:K, :♣)]
    expect(player.cards_string).to eq "A♣, K♣"
  end
end


describe Game do
  it "deal_to_player gets card from the deck and adds it to player's hand" do
    game = Game.new(10, 100, 10)
    game.deal_to_player(game.human)
    expect(game.human.hand.count).to eq 1
    expect(game.deck.cards.count).to eq 51
  end

  it "adjudicate_round returns :house_won and gives house money when human is busted" do
    game = Game.new(10, 100, 10)
    game.human.hand = [Card.new(:A, :♣), Card.new(:A, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :house_won
    expect(game.human.bankroll).to eq 0
    expect(game.the_house.bankroll).to eq 110
  end

  it "adjudicate_round returns :house_won and gives house money when house got blackjack" do
    game = Game.new(10, 100, 10)
    game.the_house.hand = [Card.new(:A, :♣), Card.new(:K, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :house_won
    expect(game.human.bankroll).to eq 0
    expect(game.the_house.bankroll).to eq 110
  end  

  it "adjudicate_round returns :house_won and gives house money when house got bigger score" do
    game = Game.new(10, 100, 10)
    game.human.hand = [Card.new(1, :♣)]
    game.the_house.hand = [Card.new(10, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :house_won
    expect(game.human.bankroll).to eq 0
    expect(game.the_house.bankroll).to eq 110
  end

  it "adjudicate_round returns :human_won and gives human money when house is busted" do
    game = Game.new(10, 100, 10)
    game.the_house.hand = [Card.new(:A, :♣), Card.new(:A, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :human_won
    expect(game.human.bankroll).to eq 20
    expect(game.the_house.bankroll).to eq 90
  end

  it "adjudicate_round returns :human_won and gives human money when human got a blackjack" do
    game = Game.new(10, 100, 10)
    game.human.hand = [Card.new(:A, :♣), Card.new(:K, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :human_won
    expect(game.human.bankroll).to eq 20
    expect(game.the_house.bankroll).to eq 90
  end

  it "adjudicate_round returns :human_won and gives human money when human got bigger score" do
    game = Game.new(10, 100, 10)
    game.human.hand = [Card.new(10, :♣)]
    game.the_house.hand = [Card.new(1, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :human_won
    expect(game.human.bankroll).to eq 20
    expect(game.the_house.bankroll).to eq 90
  end

  it "adjudicate_round returns :tie and does not change bankrolls human score is equal to that of the house" do
    game = Game.new(10, 100, 10)
    game.human.hand = [Card.new(5, :♣)]
    game.the_house.hand = [Card.new(5, :♣)]
    result = game.adjudicate_round
    expect(result).to eq :tie
    expect(game.human.bankroll).to eq 10
    expect(game.the_house.bankroll).to eq 100
  end  
end