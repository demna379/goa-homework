# 4)შექმენი ფუნქცია რომელსაც გადაეცემა ერთი არგუმენტი, ეს არგუმენტი არის სია, ამ სიიდან ამოიღეთ მხოლოდ ისეთი რიცხვები, რომლებიც არიან ლუეები და დგანან კენტნ ინდექზე
def random(lstn):
    new = []
    for i in range(1,len(lstn),2):
        print(i)
        new.append(lstn[i])
    return [d for d in new if d % 2 == 0]
print(random([1,2,2,6]))