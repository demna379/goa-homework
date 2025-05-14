# 2) შექმენიტ while loop, while loop მა უნდა გამოიტანოს რიცხვებია 100 დან 0 მდე
count = 100
while count >= 0:
    if count % 2 == 0:
        print(count, "is even")
    else:
        print(count, "is odd")
    count -= 1