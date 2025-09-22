# 3)შექმენით პროგრამა, მომხარებელს შეეკითხეს პინკოდი, უნდა იყოს ინტეჯერი, თუ  შეიტანა მომხარებელმა რამე ასო(ValueError),
#  მაშინ აამაღლეთ(raise) Expection ერორი, სადაც ეწერება "get outtt", თუ ერორი კოდში არ იყო(else),  მაშინ დაპრინტეთ "idk if pincode is correct but its numbers tho",
#  და საბოლოოდ(finally) დაპრინტეთ "end of program"
try:
    num = int(input('Enter a number:'))
except:
    raise Exception('get outtt')
else:
    print('idk if pincode is correct but its numbers tho')
finally:
    print('end of this dumb program')