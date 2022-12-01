with open("input.txt", "r") as f:
    content = [sum([int(num) for num in line.split("\n")]) for line in f.read().split("\n\n")]

top_3_total = sum(sorted(content, reverse=True)[:3])

print(max(content), top_3_total)