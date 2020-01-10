class Person
    attr_accessor :name, :nickname
    def initialize(name, nickname, catchphrase, age)
        @name = name
        @nickname = nickname
        @catchphrase = catchphrase
        @age = age
    end

    def introduce
        "Hello, there!"
    end

    #Reads the name
    # def name
    #     @name
    # end

    #Creates the new name or changes the name
    # def name= new_name
    #     @name = new_name
    # end

    

    def do_not_touch_this_method
        "Do not touch this"
    end
end

class Programmer < Person 
    attr_accessor :name, :nickname, :catchphrase, :age, :language
    def initialize(name, nickname, catchphrase, age, language)
        super(name, nickname, catchphrase, age)
        @language = language
    end

end

obi_wan = Person.new("General Kenobi", "Ben", "the high ground", 53)

bell = Programmer.new("John", "Ben", "Ruby is better than JavaScript", 34, ["python", "javascript", "ruby", "golang"])

puts obi_wan.is_a?(Person)
puts obi_wan.is_a?(Programmer)

puts bell.is_a?(Person)
puts bell.is_a?(Programmer)

# puts bell

# puts bell.name
# puts bell.nickname
# puts bell.catchphrase
# puts bell.age
# puts bell.language

# puts obi_wan.name
# puts obi_wan.name="Leo"
# puts obi_wan.do_not_touch_this_method