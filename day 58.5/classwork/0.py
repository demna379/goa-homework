# 1)შექმენით სახელების სია, სადაც იქნება ბევრი სტრინგი, შემდეგ გაფილტრეთ ეს სია ისე რომ მარტო ისეთი სახელები იყოს რომელშიც 5 ასოზე მეტი ასოა
lstn = ['demna','meore demna','guram error', 'tornike_aluglashvili', 'ertse']
print(list(filter(lambda i: len(i) > 5, lstn)))
