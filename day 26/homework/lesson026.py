# 1)მომხარებელს შემოატანინეთ რიცხვი, შემდეგ შეამოწმეთ მეტია ის თუარა 18 ზე, თუ მეტია დაწერეთ რომ სრულწლოვანია,
#  თუ მომხარებელმა 15 შემოიტანა რიცხვად დაწერეთ რომ თინეიჯერია, სხვა შემთხვევაში დაწერეთ რომ ბავშვია
age=int(input("enter your age: "))
if age >= 18:
    print("you are an adult")
elif age >= 13:
    print("you are a teenager")
else:
    print("you are a kid")