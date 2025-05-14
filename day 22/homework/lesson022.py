# გააკეთეთ დღევანდელი ტესტირების ამოცანები

# 1) მომხმარებელს შემოატანინეთ რიცხვი და 0-დან ამ რიცხცამდე დაპრინტეთ ყველა რიცხვი.
def task1():
    number = int(input("შეიყვანეთ რიცხვი: "))
    for i in range (0, number):
        print(i)

def task2():
    # 2) მომხმარებლის შემოტანილ რიცხვამდე ყველა რიცხვი შეკრიბეთ.
    number1 = int(input("შეიყვანეთ რიცხვი: "))
    sum = 0
    for i in range (1, number1):
        sum += i
    print(sum)

def task3():
    # 3) მომხმარებლის შემოტანილ რიცხვამდე 3-ის გამოტოვებით დაპრინტეთ ყველა რიცხვი
    number2 = int(input("შეიყვანეთ რიცხვი: "))
    for i in range(0, number2, 3):
        print(i)

def task4():
    # 4) მომხმარებლის შემოტანილ რიცხვამდე 4-ის გამოტოვებით დაპრინტეთ ყველა რიცხვიs ნამრავლი
    number3 = int(input("შეიყვანეთ რიცხვი: "))
    sum=1
    for i in range (1, number3, 4):
        sum *= i
    print(sum)

def task5():
    # BOSS LEVEL 5) მომხარებელს შემოატანინე 2 რიცხვი, შემდეგ პირველ შემოტანილი რიცხვიდან მეორე შემოატილ რიცხვამდე, დაითვალე ყველა ლუწი რიცხვების ჯამი
    number4 = int(input("შეიყვანეთ რიცხვი: "))
    number5 = int(input("შეიყვანეთ რიცხვი: "))
    sum = number5
    for i in range (number4, number5):
        if i % 2 == 1:
            continue
        sum += i
    print(sum)

# while loop
def task6():
    # 1) მომხარბელს შემოატანინე სიტყვა მანამ სანამ არ შემოიტანს Guram
    word = "guram"
    while True:
        user_input = input("შეიყვანეთ სიტყვა: ")
        if user_input == word:
            print("თქვენ სწორად გამოიცანით")
            break
        else:
            print("ცუდი პასუხი, სცადეთ კიდევ")

def task7():
    # 2)მომხარებელს შემოატანინე რიცხვი მანამ სანამ უარყოფითს არ შემოიტანს
    while True:
        number = int(input("შეიყვანეთ რიცხვი: "))
        if number < 0:
            print("თქვენ სწორად გამოიცანით")
            break
        else:
            print("ცუდი პასუხი, სცადეთ კიდევ")

def task8():
    # 3)მომხარებელს შემოატანინე რიცხვი, მანამ სანამ 5 ს არ შემოიტანს და შემდეგ როცა შემოიტანს 5 სდაპირნტეთ "Guram teacher"
    while True:
        input_number = int(input("შეიყვანეთ რიცხვი: "))
        if input_number == 5:
            print("Guram teacher")
            break
        else:
            print("ცუდი პასუხი, სცადეთ კიდევ")

# BOSS LEVEL
def task9():
    # 4)მომხარებელს შემოატანინეთ პინკოდი, სანამ 9877 არ შეიტანს,და როცა შეიტანს გამოიტანოს მისი მცდელობების რაოდენება გამრავლებული 2 ზე
    pin_code = 9877
    attempts = 0
    input_pin = int(input("შეიყვანეთ პინკოდი: "))
    while True:
        if input_pin != pin_code:
            print("არასწორი პინკოდი, სცადეთ კიდევ")
            attempts += 1
            input_pin = int(input("შეიყვანეთ პინკოდი: "))
        else:
            print("თქვენ სწორად გამოიცანით, მცდელობების რაოდენობა:" ,attempts * 2)
            break
task9()