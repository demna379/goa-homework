# 4)შექმენით სახელების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო ისეთი სახელები რომლებიც იწყება a ზე და მთავრდება a ზე (მაგალითად ana, anamaria, axtona)
lstn = ['demna','dimitrius','demetre','tornike','demucha','tognike','ana']
print(list(filter(lambda i: i[0] == 'a' and i[-1] == 'a', lstn)))