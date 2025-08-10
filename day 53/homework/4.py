# 5)შექმენი ფუნქცია, რომელსაც გადაეცემა 3 არგუმენტი,პირველი ორი ინტეჯერი და მესამე მათემატიკური ოპერატორი(+, -, *, /), და დააბრუნეთ ამ ორ რიცხვს ოპერაციის შემდეგ შედეგი ამ ოპერატორის მიხედვით 
def random(x,y,op):
    return eval(f'{x}{op}{y}')
print(random(input('enter first number'), input('enter a second number'), input('enter an operator')))