# 3)გამოიყენე ყველა შედარებეთი ოპერატორები ორჯერ True და ორჯერ False რომ გამოვიდეს(<,>,==,<=,>=,!=)
#< True 
print(10<11)
print(20<31)
#< False
print(20<11)
print(20<12)
#> True
print(20>11)
print(20>10)
#> False
print(20>30)
print(30>100)
#== True
print(10==10)
print(11==11)
#== False
print(10==11)
print(20==12)
#<= True
print(20<=20)
print(30<=40)
#<= False
print(20<=10)
print(30<=12)
#>= True
print(10>=10)
print(20>=20)
#>= False
print(21>=32)
print(12>=30)
#!= True
print(10!=11)
print(21!=0)
#!= False
print(20!=20)
print(21!=21)


# 4)შექმენი პროგრამა, რომელიც მომხმარებელს სთხოვს ორი რიცხვის შეყვანას და დაბეჭდავს, პირველი რიცხვი მეტია, ნაკლებია თუ ტოლია მეორეზე.
num=(input("enter your number"))
num1=(input("enter your number"))
print(num<=num1)


#5)შექმენი პროგრამა, რომელიც მომხმარებელს სთხოვს რიცხვის შეყვანას და დაბეჭდავს, არის თუ არა ეს რიცხვი 10-ის ტოლი.
user=(input("please enter your age"))
print(user==10)