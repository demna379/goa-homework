# 3)შექმენი ფუნქცია რომელსაც გადაეცემა 1 ინტეჯერი, დააბრუნეთ ამ ინტეჯერის ფესვი თუ მას ააქვს ფესვი, თუ არ ააქვს დააბრუნეთ იგი აყვანილი კვადრატში
def random(intg):
    random = intg ** 0.5
    return intg ** 0.5 if random.is_integer() else intg ** 2
print(random(4))