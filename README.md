# Regular Expression (Regex)
Regular Expression is a tool for searching string which use symbols representing a string pattern. Formal languages are interpreted by a regular expression processor.
- Used for matching, searching and replacing text
- Used by programming languages
- Usage Examples: test credit card number, test email address format and much more.

# Regular Expression Engines
regular expression engines are different in each language such as C/C++, Java, JavaScript, .NET, Perl, PHP, Python, Ruby, Unix, Apache, MySQL. They have the same core features but some are different. 

You can practise regex skills in [regexr.com](https://regexr.com/).

# Notation conventions and modes
```
syntax: /PATTERN/FLAG
```
## Flag - define mode
1. Standard: /re/
2. Global: /re/g - find every text that match with the pattern
3. Case insensitive: /re/i - include both lowercase and uppercase
4. Multiline: /re/m - multiple line (default is one-line)

Tip: you can use multiple flag in one regex like /re/gi

# Grep
Grep is a global regular expression print or g/re/p. Grep often used as verb, it means find the string that match with the pattern and print it out. You often see grep in unix-base command in terminal.

# Literal Characters
- /cat/ matches "cat"
- /car/ matches the first three letters of "carnival"
- case-sensitive and non-global matching (leftmost) by default

# Meta characters
Meta Characters is characters with special meaning
## wildcard 
wildcard is a . (period) - match every except new line in a single position such as /h.t/ matches "hat,"

## Escaping characters
escaping is a \ which allows use of meta characters as literal characters. For example, /8\.00/ matches "8.00"

## Special characters
- spaces
- tabs (\t)
- line returns 
  - \r - move cursor to the start of the line
  - \n - new line
  - \r\n


