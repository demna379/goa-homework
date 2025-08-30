# 5)შექმენით სახელების და რიცხვების სია, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო კენტ ინდექსზე მდგომი სტრინგები და კენტი რიცხვები
lstn = [1,2,3,3.14,4,5,6,7,8,9,10,'demna','dimitrius','demetre','tornike','demucha','tognike','ana']
def random(i):
    if type(i) == int or type(i) == float:
        return i % 2 == 1 and lstn.index(i) % 2 == 1
    return lstn.index(i) % 2 == 1
print(list(filter(random, lstn)))