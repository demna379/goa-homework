# 3)მომხარებელს შემოატანინეთ 2 რიცხვი, თუ მეორე რიცხვი მეტია პრიველზე დაპრინტეთ "Level up",
#  და პირველი მეტია მეორეზე დაპრინტეთ "Level down", სხვა შემთხვევაში დაპრინტეთ "Level updown"
num1=int(input("enter a number: "))
num2=int(input("enter a second number: "))
if num2 > num1:
    print("level up")
elif num1 > num2:
    print("level down")
else:
    print("level updown")