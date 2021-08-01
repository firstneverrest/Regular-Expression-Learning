# Regular Expression (Regex)
Regular Expression is a tool for searching string which use symbols representing a string pattern. Formal languages are interpreted by a regular expression processor.
- Used for matching, searching and replacing text
- Used by programming languages
- Usage Examples: test credit card number, test email address format and much more.

## Regular Expression Engines
regular expression engines are different in each language such as C/C++, Java, JavaScript, .NET, Perl, PHP, Python, Ruby, Unix, Apache, MySQL. They have the same core features but some are different. 

You can practise regex skills in [regexr.com](https://regexr.com/).

## Table of contents
- [Regular Expression (Regex)](#regular-expression-regex)
  - [Regular Expression Engines](#regular-expression-engines)
  - [Table of contents](#table-of-contents)
  - [Notation conventions and modes](#notation-conventions-and-modes)
    - [Flag - define mode](#flag---define-mode)
  - [Grep](#grep)
  - [Literal Characters](#literal-characters)
  - [Meta characters](#meta-characters)
    - [wildcard](#wildcard)
    - [Escaping characters](#escaping-characters)
    - [Special characters](#special-characters)
  - [Character Set ([ ])](#character-set--)
    - [Character Ranges (-)](#character-ranges--)
    - [Negative Character Sets (^)](#negative-character-sets-)
    - [Meta character inside character sets](#meta-character-inside-character-sets)
    - [Shorthand character set](#shorthand-character-set)
  - [Repetition](#repetition)
    - [Repetition Meta characters](#repetition-meta-characters)
    - [Quantified Repetition ({ })](#quantified-repetition--)
    - [Greedy Expressions](#greedy-expressions)
    - [Lazy Expressions (?)](#lazy-expressions-)
  - [Grouping Meta characters (())](#grouping-meta-characters-)
  - [Alternation (|)](#alternation-)
  - [Anchors](#anchors)
  - [Word Boundaries](#word-boundaries)

## Notation conventions and modes 
```
syntax: /PATTERN/FLAG
```

### Flag - define mode
1. Standard: /re/
2. Global: /re/g - find every text that match with the pattern
3. Case insensitive: /re/i - include both lowercase and uppercase
4. Multiline: /re/m - multiple line (default is one-line)
5. Single line: /re/s - default
6. Ungreedy: /re/u

Tip: you can use multiple flag in one regex like /re/gi

## Grep 
Grep is a global regular expression print or g/re/p. Grep often used as verb, it means find the string that match with the pattern and print it out. You often see grep in unix-base command in terminal.

## Literal Characters 
- /cat/ matches "cat"
- /car/ matches the first three letters of "carnival"
- case-sensitive and non-global matching (leftmost) by default

## Meta characters
Meta Characters is characters with special meaning

### wildcard 
wildcard is a . (period) - match every except new line in a single position such as /h.t/ matches "hat,"

### Escaping characters
escaping is a \ which allows use of meta characters as literal characters. For example, /8\.00/ matches "8.00"

### Special characters
- spaces
- tabs (\t)
- line returns 
  - \r - move cursor to the start of the line
  - \n - new line
  - \r\n

## Character Set ([ ])
Character set is [ ] which [ begins a character set and ] ends a character set.
- match only one character of several characters that defines in [ ]
- order of characters in the set does not matter
- /[gr[ea]y/ matches "grey" and "gray"

### Character Ranges (-)
Because when you want to use character set with huge characters, it will become a cumbersome problem to define all of that like /[0123456789]/. So, you can use character ranges instead.
- includes all characters between two characters
- matches only one character in the set
- [0-9] means 0123456789
- [A-Za-z]

### Negative Character Sets (^)
Matches not any one of several characters in the set
- put the ^ in front of other character in []
- /[^aeiou]/ matches any one that is not aeiou characters

### Meta character inside character sets
- most meta characters inside character sets are already escaped
- do not need to escape them again
- /[h[a.]t/ matches "hat" and "h.t" not "hit"
- exception: ] - ^ \ (if you want to match these, you have to include \ at the front)
- /var[[(][0-9][\])]/ matches var(8) and var[2]

### Shorthand character set
- \d - digit equals to [0-9]
- \w - word character equals to [a-zA-Z0-9_]
- \s - whitespace equals to [\t\r\n]
- \D - not digit equals to [^0-9]
- \W - not word character equals to [^a-zA-Z0-9]
- \S - not whitespace equals to [^\t\r\n]
- examples: 
  - /[\w\-]/ matches any word character or hyphen
  - /\d\d\d\d/ matches "1984" but not "15ss"
- caution
  - /[^\d\s]/ is not the same as /[\D\S]/
  - /[^\d\s]/ = NOT digit OR space character
  - /[\D\S]/ = EITHER NOT digit OR NOT space character 

## Repetition
### Repetition Meta characters
- * - zero or more times
- + - one or more times
- ? - zero or one time
- examples
  - /apps*/ matches "app", "apps" and "appssss"
  - /apps+/ matches "apps" and "appssss" but not "app"
  - /apps?/ matches "app" and "apps" but not "appsss"
  - /\d\d\d\d*/ matches numbers with three digits or more

### Quantified Repetition ({ })
use to quantified repetition of preceding item
```
{min,max}
```
- min and max are positive numbers
- min must always be included and can be zero
- max is optional
- examples
  - \d{4,8} matches numbers with four to eight digits.
  - \d{4} matches numbers with exactly four digits (min is max).
  - \d{4,} matches numbers with four or more digits (max is infinite).

### Greedy Expressions
- Standard repetition quantifiers are greedy (default)
- expression tries to match the longest possible string
- match as much as possible before giving control to the next expression part, for examples:
  -  /.*[0-9]+/ matches "Page 256"
  -  .* portion matches "Page 25"
  -  [0-9]+ portion matches only "6"

### Lazy Expressions (?)
- make preceding quantifier lazy
- match as little as possible before giving control to the next expression part
- note necessarily faster or slower
- examples: *?, +?, {min,max}?, ??
  -  /.*[0-9]+/ matches "Page 256"
  -  .* portion matches "Page "
  -  [0-9]+ portion matches only "256"

## Grouping Meta characters (())
- use () to group portions of the expression
- instead of single character, it will be multiple
- use for repetition, replacing and alternation
- repetition: /(abc)+/ matches "abc" and "abcabcabc"
- replacing: /(\d{3})-(\d{4})/
  - text: 546-5648
  - $1 matches \d{3}
  - $2 matches \d{4}
  - $1.$2 means 546.5648


## Alternation (|)
- | is an OR operator 
- example: /apple|orange/ matches "apple" and "orange"
- recommended: use parenthesis to make it clear like /apple(juice|sauce)
- caution: /long|longest/ if you have a text "longest", it will matches only "long" not "longest" because "long" is already matches with long in the alternation. Therefore, you should use /long(est)?/ instead (greedy).
- put simplest (most efficient) expression first

## Anchors
- reference a position, not an actual character
- ^ is an start anchors (start of string/line)
- $ is an end anchors (end of string/line)
- \A - start of string, matches only one string in multiple line mode (not support in JavaScript engine)
- \Z - end of string, matches only one string in multiple line mode (not support in JavaScript engine)
- for example:
  - /^apple/ matches "apple banana" not "banana apple"
  - /^apple$/ matches "apple" not "apple apple"

## Word Boundaries
- \b - word boundary (start/end of word)
- \B - Not a word boundary
- word characters are A-Za-z0-9_
- examples: 
  - /\b\w+\b/ finds fours matches in "This is a test."
  - /\B\w+\B/ finds two matches in "This is a test." which are "hi" and "es"