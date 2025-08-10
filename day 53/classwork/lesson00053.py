# D) მცირე Coding Tasks(25 ქ)

# 1)ფუნქცია იღებს ერთ სტრინგ(s) და უნდა დააბრუნოს, რამდენი ხმოვანი ასოა მასში.
# ხმოვნებად ითვლება: a, e, i, o, u — უნდა იგნორო დიდი და პატარა ასოების სხვაობა.
# ანუ "A" და "a" ორივე ითვლება.
def random(word):
    word = word.lower()
    random = ''
    for i in word:
        if i in 'aeiou':
            random += i
    return len(random)
print(random('aeioucumalala'))


# 2)ფუნქცია იღებს სიას (items) და უნდა დააბრუნოს ელემენტების შებრუნებული რიგით ახალი სია.
# მთავარია, რომ თავდაპირველი სია არ უნდა შეცვალო.
def another_random(lstn):
    return lstn[::-1]
print(another_random([1,2,3,4,5,6]))

# მაგალითები:
# reverse_list([1, 2, 3]) → [3, 2, 1]
# reverse_list(["a", "b", "c"]) → ["c", "b", "a"]


# 3)ფუნქცია იღებს სტრინგს(s) და უნდა დააბრუნოს პირველი და ბოლო სიმბოლო ერთად (ერთ სტრინგში).
# თუ სტრინგი მხოლოდ ერთი სიმბოლოა, დააბრუნე ის ერთი სიმბოლო ორჯერ.
def ANOTHER_RANDOM(s):
    return s[0] + s[-1]
print(ANOTHER_RANDOM('di')) # doesnt handle empty strings. it will simply return an error

# მაგალითები:

# first_and_last("Python") → "Pn"   # პირველი: P, ბოლო: n
# first_and_last("a") → "aa"        # ერთი სიმბოლო ორჯერ
# first_and_last("Hi") → "Hi"       # პირველი: H, ბოლო: i


# 4)ფუნქცია იღებს სიტყვების სიას (words) და აბრუნებს ერთ სტრიქონს, სადაც სიტყვები გაერთიანებულია დაშით (-).
# სიტყვებს შორის არ უნდა იყოს სხვა სიმბოლო ან space, მხოლოდ დეში.
def random_list_1(s):
    random = ''
    for i in range(len(s)):
        random += s[i] + '-'
    return random[:-1]
print(random_list_1(['demetre','demna']))

# მაგალითები:


# join_with_dash(["apple", "banana", "cherry"]) → "apple-banana-cherry"
# join_with_dash(["one", "two"]) → "one-two"


# 5)
# ფუნქცია იღებს სტრინგს(text) და აბრუნებს იგივე სტრინგს, მაგრამ ყველა space წაშლილია.
# სხვა სიმბოლოები არ უნდა შეეცვალოს.
def ANOTHER_RANDOM_FUNCTIOOOOOOOOOOOOOOOOOOOOOOOOOOON(s):
    return ''.join(s.split())
print(ANOTHER_RANDOM_FUNCTIOOOOOOOOOOOOOOOOOOOOOOOOOOON("demnamaisuradze"))

# მაგალითები:

# remove_spaces("Hello World") → "HelloWorld"
# remove_spaces("  Python is fun  ") → "Pythonisfun"
# remove_spaces("NoSpaces") → "NoSpaces"