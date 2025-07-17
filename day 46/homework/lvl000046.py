def reverse_words(s):
    s = s.split(" ")[::-1]
    str = ""
    for i in s:
        str += i + " "
    return str[0:-1]
reverse_words("i am demetre tavdadebuli")