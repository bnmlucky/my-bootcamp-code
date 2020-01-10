def hello number
    for i in 1..number do
        puts 'hello kenny'
    end
end

hello 3

def personal_greeting name
    puts "Why hello there #{name}, how are you today?"
end

personal_greeting "natalia"

def has_vowel? word
    vowels = false
    counter = 0
    while counter < word.length do
        if word[counter] == 'a' || word[counter] == 'e' || word[counter] == 'i' || word[counter] == 'o' || word[counter] == 'u'
            vowels = true
            puts "There is a vowel in this word"
        end
        counter += 1
    end
    return vowels
end

has_vowel? "ll"