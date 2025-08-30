# 3)შექმენით სახლების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, გაფილტრეთ სია ისე რომ დარჩეს მარტო panidrome ები, ანუ ისეთი სახელები რომლებიც შემოტრიალებულზე იგივე რჩება(მაგალითად ana)
lstn = ['demna','dimitrius','demetre','tornike','demucha','tognike','ana']
print(list(filter(lambda i: i == i[::-1], lstn)))