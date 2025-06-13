# 5)შექმენით ფუნქცოა. რომელიც ამოწმებს არის თუ არა რიცხვი მარტივი(მარტივი რიცხვი არის ისეთი რიცხვი რომელიც იყოფა მარტო 1 ზე და თავის თავზე, მეტზე არაფერზე)
#  თუ მარტივია დაპრინტეთ True თუარა დაპრინტეთ False
def my_func_four(t):
    is_prime = True
    if t < 2:
        print(False)
    else:
        for i in range(2, t):
            if t % i == 0:
                is_prime = False
            else:
                continue
    print(is_prime)
my_func_four(8)