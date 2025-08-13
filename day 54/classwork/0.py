import random
import time

def eh(lstn):
    text = 'hello this is a random program i made from my last surviving braincell. this program chooses random name from a list (which you can modify if you want) and choose a winner.'
    for i in text:
        time.sleep(0.04)
        print(i, end='', flush=True)
    print('')
    count = len(lstn)
    while count != 0:
        count -= 1
        
        for i in random.choices(lstn):
            time.sleep(0.04)
            print(i, end='', flush=True)
            lstn.remove(i)
        print(' ')
        inputs = input('print next name? (press enter if yes, type "no" if well no):')
        if inputs == 'y':
            continue
        elif inputs == 'n':
            break
        else:
            continue         
    
eh(['name 1',
    'name 2',
    'name 3',
    'name 4',
    'name 5',
    'name 6',
    'name 7'
])
