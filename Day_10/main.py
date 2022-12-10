with open("input.txt", "r") as f:
    content = f.read().split()

X = 1
signals = 0
crt = ""

for (cycle, line) in enumerate(content, 2):
    if cycle % 40 == 20:
        signals += cycle * X
    
    if line[-1].isdigit():
        X += int(line)

    if abs((cycle-1)%40-X) < 2:
        crt += "█"
    else:
        crt += " "

crt = [crt[x:x+40] for x in range(0, len(crt), 40)]

print(signals)
print('\n'.join(crt))