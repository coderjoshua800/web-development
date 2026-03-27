# taking total amount as input from the user
amount = int(input("pls enter amount for withdraw:"))

# calculating the amount of note of different dominations
note_1 = amount//100
note_2 = (amount%100)//50
note_3 = ((amount%100)%50)//10


print("notes of 100 rupee", note_1)
print("print note of 50 rupee", note_2)
print("print note of 10 rupee", note_3)