# 1)შექმენით ფუნქცია რომელიც იღებს 2 არგუმნეტს, რიცხვს და სტრინგს, შემდეგ უნდა უნდა დააბრუნოთ სტრინგი გამრვლებული ამ რიცხვზე
# მაგ:გამოძახებისას მივუთითეთ "guramchiko", 5
# უნდა გამოიტანოს "guramchikoguramchikoguramchikoguramchikoguramchiko"
# ამ რიცხვ არგუმენტს გაუწერეთ defaul value რომელიც იქნება 0

def function(name,num=0):
    print(f'{name*num}')
    return f'{name*num}'
function("demna",5)