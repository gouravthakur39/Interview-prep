input_word = input("Enter three words ").split()
for i in range(len(input_word[0])):
    if input_word[0][i] == 'a' or input_word[0][i] == 'e' or input_word[0][i] == 'i' or input_word[0][i] == 'o' or input_word[0][i] == 'u':
        x = input_word[0].replace(input_word[0][i], "*")

for j in range(len(input_word[1])):
    if (input_word[1][j] == 'b' or input_word[1][j] == 'c' or input_word[1][j] == 'd' or input_word[1][j] == 'f' or 
        input_word[1][j] == 'g' or input_word[1][j] == 'h' or input_word[1][j] == 'j' or input_word[1][j] == 'b' or 
        input_word[1][j] == 'l' or input_word[1][j] == 'm' or input_word[1][j] == 'n' or input_word[1][j] == 'p' or
        input_word[1][j] == 'q' or input_word[1][j] == 'r' or input_word[1][j] == 's' or input_word[1][j] == 't' or
        input_word[1][j] == 'v' or input_word[1][j] == 'w' or input_word[1][j] == 'x' or input_word[1][j] == 'y' or
        input_word[1][j] == 'z' ):
        y = input_word[1].replace(input_word[1][j], "@")
z = input_word[2].upper()
print(f"output: {x + y + z}")