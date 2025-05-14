# 1)გადაიწერეთ ეს კოდი და დეტალურად ახსენით კომენტარებით რას შვება თიოთოეული ხაზი
def task1():
    password="SecretWord" # cvladi password inaxavs sityvas secret word
    guess = input() # cvlado inputis sashualebit shegvidzlia shevitanot sityva
    while guess != password: # tu guess ar udris passwords mashin tavidan shegataninebs
        guess=input() # es ubralod inputi imistvis rom sheitano sityva
    print("acces granted") # es ar daiprinteba iqamde sanam momxmarebeli ar sheitans swor sityvas radgan while loop shewydeba da meore while loopshi ar shedis

# 2)მომხარებელს შემოატანინიე რიცხვი input ით, და თუ ეს რიცხვი მეტია 3 ზე დაწეროს "GOA", თუ 3 ზე ნაკლებია დაწეროს "AOG"
num1=int(input("enter a number"))
if num1 <= 3:
    print("AOG")
else:
    print("GOA")