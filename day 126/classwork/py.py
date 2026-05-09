square_digits = lambda num: int(''.join(str(int(i) ** 2) for i in str(num)))
print(square_digits(55))