def problem(a):
    try:
        print(a*50+6)
        return a*50+6
    except TypeError:
        print("Error")
        return "Error"
problem("hello")