# 4)შექმენით სიების სია, სადაც იქნება სიები ორი ელემენტებით, ["aleksandre", 90] პირველი არის სახელი მეორე საგამოცდო ქულა,
#  გაფილტრეთ ეს სია ისე რომ მარტო 80+ ქულაზე მეტ მიღებულ მოსწავლეები დატოვოთ
arr = [["aleksandre", 90], ['demna', 0]]
print(list(filter(lambda i: i[1] >= 80, arr)))
print(list(map(lambda i: i if i[1] >= 80 else f'{i[0]} got terminated', arr)))