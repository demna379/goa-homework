#  E

# is_palindrome(s)
# ფუნქცია იღებს ერთ სიტყვას (s) და უნდა შეამოწმოს, არის თუ არა ეს სიტყვა პალინდრომი.
# პალინდრომი — ეს არის სიტყვა, რომელიც მარცხნიდანაც და მარჯვნიდანაც ერთნაირად იკითხება.
# უნდა იგნორო დიდი და პატარა ასოების განსხვავება.
# თუ სიტყვა პალინდრომია, დააბრუნე True, თუ არა — False.
def EASY_AS_HELL(s):
    return s.lower() == s.lower()[::-1]
print(EASY_AS_HELL('abA'))

# მაგალითები:

# is_palindrome("Level") → True     # ერთი და იგივე ორივე მხრიდან
# is_palindrome("Python") → False   # განსხვავებულია
# is_palindrome("Madam") → True     # იგნორით case

# 2) sum_even(nums)
# ფუნქცია იღებს მთელი რიცხვების სიას (nums) და უნდა იპოვოს ყველა ლუწი რიცხვის ჯამი.
# ლუწი რიცხვი — ეს არის რიცხვი, რომელიც იყოფა 2-ზე ნაშთის გარეშე (მაგ: 2, 4, 6, 8).
# თუ სიაში არცერთი ლუწი რიცხვი არ არის, დააბრუნე 0.
def EASYYYYYYYYYYYYY(random_list):
    random = []
    for i in random_list:
        if i % 2 == 0:
            random.append(i)
    return sum(random)
print(EASYYYYYYYYYYYYY([1,2,3,4,5,6,7,8,9,10]))

# მაგალითები:

# sum_even([1, 2, 3, 4, 5]) → 6     # 2 + 4 = 6
# sum_even([7, 9, 11]) → 0          # ლუწი არაა
# sum_even([10, -2, 3]) → 8         # 10 + (-2) = 8

# 3) replace_vowels(s, char)
# ფუნქცია იღებს სტრიქონს (s) და სიმბოლოს (char).
# უნდა ჩაანაცვლოს ყველა ხმოვანი ასო (a, e, i, o, u) იგივე სიმბოლოთი, რასაც მეორე არგუმენტში მივცემთ.
# უნდა იგნორო დიდი და პატარა ასოების განსხვავება, მაგრამ შეცვლისას უნდა შენარჩუნდეს ის სიმბოლო, რაც ჩვენ მივეცით, ზუსტად იმ ფორმით.
def random1(s, char):
    random = ''
    for i in s:
        if i in 'aeiouAEIOU':
            random += i.replace(i,char)
        else:
            random += i
    return random
print(random1('demna','*'))
# მაგალითები:

# replace_vowels("Hello", "*") → "H*ll*"
# replace_vowels("Python", "-") → "Pyth-n"
# replace_vowels("AEIOU", "?") → "?????"