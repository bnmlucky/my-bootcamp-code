# puts 1.class
# puts 1.0.class

# str = "foo"
# puts str
# str.upcase!
# puts str

# "foo" + 2 # => TypeError: no implicit conversion of Integer into String

# puts {a: 1, b: 2} == {b: 2, a: 1} # => true

# arr = [:Gustave, :Sandrine, :Delphine, :Maurice]

# puts arr[0]

# puts (1..10).to_a

# gustave = { name: 'Gustave', age: 24 }

# puts gustave[:age]
# puts gustave.age
# gustave.age= 22

# 3.times { |i| puts i }

# arr = [10, 20, 30]

# puts arr.map { |num| num / 10 }

# arr.map do |num|
#     puts num / 10
# end

# hash = { a: 1, b: 2, c: 3 }
# hash.each do |key, val|
#   puts "the value of #{key} is #{val}"
# end

# def add(*nums)
#     puts *nums
#     # a + b
# end

# puts add(3, 4)
# add(1, 2,3,4,5)

# def say_hi(name = 'World')
#   puts "Hello, #{name}!"
# end

# say_hi('Gustave')
# > Hello, Gustave!
# say_hi
# > Hello, World!