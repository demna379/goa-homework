# 2)შექმენით რიცხვების სია, სადაც იქნება რიცხვების და სტრინგების და ფლოატების და ბულეანების, შემდე გაფილტრეთ ეს სია ისე რომ მარტო სტრინგები დარჩეს
random = ['goa makes you sigma (according to its ads)', 1, 1.2, True]
print(list(filter(lambda i: type(i) == str, random)))