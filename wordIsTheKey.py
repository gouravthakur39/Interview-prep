def wordIsTheKey(str):
    keywords = {
    "break",
    "case",
    "continue",
    "default",
    "defer",
    "else",
    "for",
    "func",
    "goto",
    "if",
    "map",
    "range",
    "return",
    "struct",
    "type",
    "var",
    }

    if str in keywords:
        print(str + " is a keyword")
    else:
        print(str + " is not a keyword")

wordIsTheKey('defer')
wordIsTheKey('While')


