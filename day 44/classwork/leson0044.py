def digitize(n):
    numbers = []
    for i in str(n)[::-1]:
        numbers.append(int(i))
    return numbers