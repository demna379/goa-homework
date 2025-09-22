# 1)შექმენით  პროგრამა, სადაც მომხარებელს  შემოატანინებს რიცხვს, შემდეგ თუ მომხარებელმა შემოიტანა რამე ტქსტი, ანუ დააერორა,
#  მაგ შემთხვევაში აიყვანეთ(raise) ერორი Expection, სადაც ეწერება "you stupid", საბოლოოდ(finally), გამოიტანეთ "end of program"
try:
    name = int(input('Enter a numebr'))
except ValueError:
    raise Exception('you stupid think a number is a text? i bet you dont know what 1+1 is')
finally:
    print('end of programm')
