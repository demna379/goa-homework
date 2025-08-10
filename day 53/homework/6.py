# 7)შექმენით ფუნქცია, რომელსაც გადაეცემა 1 არგუმენტი, ინტეჯერი, შემდეგ მაგ ინტეჯერი რაოდენობის ასოები დააბრუნეთ ანბანის მიხედვით
# მაგ: ინტეჯერი 8
# output: abcdefgh

def random(num):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[:num]
print(random(8))