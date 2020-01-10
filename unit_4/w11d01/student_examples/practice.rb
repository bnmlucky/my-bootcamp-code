# puts 1.class
# puts 1.0.class

str = "foo"
puts str
str.upcase!
puts str

puts "I have #{13 * 4} cards"

puts (1...10).to_a

gustave = { name: 'Gustave', age: 24}

puts gustave[:age]

arr = [10, 20, 30]
puts arr.map { |num| num / 10}

arr.map do |num|
    puts num /10
end

hash = { a: 1, b: 2, c: 3 }
hash.each do |key, val|
  puts "the value of #{key} is #{val}"
end

def add(*nums)
    return 0 if nums.empty?
  nums.reduce { |sum, n| sum + n }
end

def say_hi(name = 'World')
    puts "Hello, #{name}!"
end

say_hi('Gustave')
say_hi

