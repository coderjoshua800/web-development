#input a word 
text = str(input("enter a string:  "))


# reverse string 
# using stop value as -1 to iterate in reverse  
revtext = text[::-1]
text = revtext

print("reverse of given string is:")
print(text)