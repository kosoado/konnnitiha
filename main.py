input_file = "README.md"
output_file = "README_modified.md"

with open(input_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

with open(output_file, "w", encoding="utf-8") as f:
    for line in lines:
        if line.strip() == "":
            f.write(line)
        else:
            f.write(line.rstrip() + "  \n")
