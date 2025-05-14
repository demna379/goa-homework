#1) უყურეთ ჩანაწერს თავიდან  
#ოკ

#2) მომხმარებელს შემატანინე, ასაკი, გვარი, სახელი, დაბადების თარიღი 
name=input("what is your name?") 
print(name)
age=input("how old are you?")
print(age)
surname=input("what is your surname")
print(surname)
birth_date=input("what is your birthday?")
print(birth_date)
#3) ახსენით რა არის camel-case, case-sensitive, snake-scase
#camel-case არის ის როცა სიტყვებს აერტიანებ მაგალითად helloWorld="hello"
#case-sensetivity იგივე ცვლადების რაოდენობა
#name=deme
#name=dachi
#name=nino
#snake-case _ სიტყვების ცვლადის შეერტება. hello_world="hello", goa_best="goa is the best"

#4) რა არის debuging? ასევე გაასწორე ეს Eror ები:
# debugging არის კოდში შეცდომების გასწორება

#1)
name = 'zura'
print(name) # აქ ცვლადი არ გვაქვს ჩაწერილი
#2)
age = 13
print(age) # - არ ვიყენებთ ეს არის შეცდომა. უნა დავწეროთ ტოლობის ნიშანი და {} არის შეცდომა
#3)
Hello_world = "Hello"
print(Hello_world) # ცვლადის სიტყვის გამოტოვება არ შეიძლება
#4)
name2 = 'nika'
print(name2) # ციფრით დაწყება არ შეიძლება
#5)
year = 2025 # შეცდომა: year > 2025. მაგის მაგივრათ უნდა დავწეროთ ტოლობის ნიშანი
print(year) 