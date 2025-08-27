# 6)შექმენით ფუნქცი def ით, რომელსაც გადაეცემა ერთი არგუმენტი, ფუნქცია, და მეორე სია, შემდეგ ფორ ლუპით გადაუარეთ ამ სიას და თითოეულ ელემენტზე გამოიყენეთ პირველი ფუნქცია,
# და ახალ სიაში ჩაამატეთ შემდეგ დააბრუნეთ, საბოლოოდ გამოიძახეთ ეს ფუნქცია და პირველ არგუმენტად გადაეცი lambda რომელიც გაამრავლებს რიცხვებს 5 ზე, და მეორე არგუმენტად გადაეცით რიცხვების სია
def function_lol(func, numbers):
    new_list = []
    for i in numbers:
        new_list.append(func(i))
    return new_list

random_list = [1,2,3,4,5]

lambda_copy = lambda x: x * 5

new = function_lol(lambda_copy, random_list)
print(new)