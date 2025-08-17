# 6)შექმენით ფუნქცია, რომელსაც გადაეცემა ორი არგუმენტი, შია და სტრინგი, თუ ეს სტრინგი არის "even" ამოიღეთ სიიდან მხოლოდ ლუქები და დააბრუნეთ, თუ ეს სტრინგი არის "odd" ამოიღეთ ამ სიიდან მხოლოდენ კენტები და დააბრუნეთ
def random(lstn, strs):
    new = []
    for i in lstn:
        if strs == 'even' and i % 2 == 0:
            new.append(i)
        if strs == 'odd' and i % 2 == 1:
            new.append(i)
    return new
# print(random([1,2,3,4], 'odd'))