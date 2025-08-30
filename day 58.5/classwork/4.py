# 5)შექმენით სახელების სია, და გაფილტრეთ ეს სია რომ დარჩეს მარტო ისეთი სახელები სადაც პირველი ასო არის "a"
arr = ['demetre', 'demna', 'demucha', 'akeqsandre']
print(list(filter(lambda i: i[0] == 'a', arr)))

