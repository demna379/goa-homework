# 4)იგივე დავალება რაც მესამეში, ოღონდ else ში ეხლა უბრალოთ  "idk if pincode is correct but its numbers tho"  კი არ დაპრინტოს,
#  გააკეთოს ასეთი რამე: ჯერ დაარქვით თვითონ ფაილს __init__.py, შემდეგ შექმენით my_module.py ფაილი სადაც გექნებათ ცვალდი pin_code,
#  __init__ ში ეს პინკოდი დააიმპორტეთ, და იმ else ში კიდევ შემოატანინეთ მომხარებელს პინ კოდი და შეამოწმეთ უდრის ის თუარა დაიმპორტებულ პინ კოდს, თუ უდრის მაშინ დაპრინტეთ "test passed",
#  თუარადა  აამაღლეთ(raise) Expection  ერორი, სადაც გეწერებათ  "Wrong pin code"
import module1
try:
    num = int(input('Enter a number:'))
except:
    raise Exception('get outtt')
else:
    if num == module1.pin:
        print('test passed')
    else:
        print("test failed you stupid monkey")
        raise Exception('hola mama')
finally:
    print('end of this dumb program')