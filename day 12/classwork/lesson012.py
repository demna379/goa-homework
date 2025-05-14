print(False or True and False or True) #True
print(False and True or True and False or True) #True
print((True and False) or (False or True and True)) #True
print(True and True or False and False or True) #True
print((False or True) and (True or False and True)) #True

print(False and True or False or False and True) #False
print(True and False or False and True or False) #False
print((False or False) and (True and False)) #False
print(True and False and True or False) # False 
print((False or False) and (False or True and False)) #False 