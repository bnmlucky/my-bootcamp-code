require 'prime'

puts "Hello World"
adjective = "Big Bad"
puts "Hello #{adjective} World"
hwvar = "Hello World"
puts hwvar.upcase

puts ""

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
puts nums.uniq
puts ""
nums1 = nums.push(5)
puts nums1
puts ""
puts nums2 = nums.pop
puts ""
puts nums3 = nums.shift
puts ""
puts nums4 = nums.unshift(5)
puts ""
puts nums5 = nums.length
puts ""
puts nums6 = nums.include?(8)
puts ""
puts nums7 = nums.find_all { |i| i > 10 }
puts ""
puts nums8 = nums.all? { |i| i > 0 }
puts ""
puts nums9 = nums.any? { |i| i % 8 == 0 }
puts ""
puts nums10 = nums.count { |i| i > 4 }
puts ""
nums11 = nums.each_with_index { |el, i| puts el * i}
puts ""
puts nums12 = nums.find { |i| i % 5 == 0 and i % 7 == 0 and i > 0 }
puts ""
puts nums13 = nums.find_index { |i| i % 5 == 0 and i % 7 == 0 and i > 0 }
puts ""
puts nums14 = nums.first(3)
puts ""
puts nums15 = nums.last(5)
puts ""
puts nums16 = nums.group_by {|i| i % 3}
puts ""
puts nums17 = nums.minmax
puts ""
puts nums18 = nums.reject { |i| i % 3 == 0 }
puts ""
puts nums19 = nums.select { |i| i % 5 == 0 } 
puts ""

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
puts colors1 = colors.sample
puts ""
puts colors2 = colors.reverse
puts ""
colors3 = colors.each { |item| puts item.capitalize}
puts ""

def find_area(height, width)
    area = height * width
end

puts find_area(2, 3)

puts ""

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
def multiply_each_by_five arr 
    arr5 = arr.each { |item| puts item * 5}
end

multiply_each_by_five nums 

puts ""

# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

puts table

def print_price hash
    show_price = hash[:price]
end 

puts print_price table
puts print_price lamp
puts print_price book

puts ""

def print_item_sums hash1, hash2
    print_sum = hash1[:price] + hash2[:price]
end

puts print_item_sums book, lamp

puts ""

def multiples
    numbers = Array(1..999)
    multiples = Array.new
    for i in numbers
        if i % 3 == 0 or i % 5 == 0
            multiples.push(i)
        end
    end
    multiples
end

puts multiples

def sumOfMultiples(multiples)
    total = 0
    multiples.each { |i| total += i }
    puts total
end

puts ""

puts sumOfMultiples(multiples)

puts ""

def check_prime?(num)
    Prime.prime?(num)
end

puts check_prime?(39)

puts ""

def get_primes(limit)
    primes = []
    (2...limit).each do |num|
        primes << num if check_prime?(num)
    end

    primes
end

puts get_primes(100)
