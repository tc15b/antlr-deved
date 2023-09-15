# ANTLR

Today, I'm going to talk about a powerful tool that plays a pivotal role in the world of programming languages, compilers, and language parsing – ANTLR. We're going to dive into the world of ANTLR, exploring what it is, what it offers to developers and language enthusiasts, and how it distinguishes itself from similar software in the field.

ANTLR, which stands for "ANother Tool for Language Recognition," is an open-source, domain-specific language (DSL) parser generator. It's been around since the late 1980s, and over the years it has evolved into a versatile and widely used tool in various software development domains.

## So, what does ANTLR offer?

1. Language Parsing and Code Generation:

	ANTLR excels in parsing languages and generating code for them. Whether you're working on a new programming language, configuration files, templating files, data formats, or even query languages, ANTLR can help you parse, analyze, and process these languages efficiently.

1. Language Agnosticism:

	One of ANTLR's strengths is its language agnosticism. It doesn't confine you to a specific programming language or platform. ANTLR can generate the code you'll work with in multiple languages like Java, C#, TypeScript/JavaScript, and more.

1. Grammar Definition:

	With ANTLR, you can define your language's grammar using a human-readable format. This grammar definition serves as the blueprint for parsing and code generation, simplifying the process of creating compilers and interpreters.

1. IDE Integration:

	ANTLR offers integration with various integrated development environments (IDEs) and text editors, making it user-friendly and accessible to developers across different platforms - Visual Studio Code, Visual Studio IDE, Intellij, NetBeans, Eclipse and jEdit.

1. ANTLR Lab:

	http://lab.antlr.org/ you can learn about ANTLR or experiment with and test grammars without having to install any software.

1. Community grammars:

	https://github.com/antlr/grammars-v4 holds grammars for a lot of pre-existing formats such as css, csv, html, json, xpath


## Alternatives

While ANTLR is undoubtedly a powerful tool, it's essential to be aware of similar software in the field, such as Bison and Yacc, which are well-established parser generators. However, ANTLR stands out in its ability to generate code in multiple languages, its extensive documentation, and its active and vibrant user community.

## Mega tutorial:
https://tomassetti.me/antlr-mega-tutorial/ What I used to learn about the basics of the tool

## Windows Installation:

* Requires at least Java 1.7
* Download the latest JAR and put 'somewhere' (e.g. C:\Program Files\Java\libs)
* Update CLASSPATH env variable with that 'somewhere' if it's not already in there

## Grammars and Lexers

The lexer grammar file and the parser grammar file are two distinct components that work together to parse and process input text

### Lexer Grammar File:

The lexer grammar file defines the rules for tokenizing the input text. It specifies how to recognize and categorize the input characters into a stream of tokens, which are the fundamental building blocks of the language. Here's what you need to know about lexer grammar files:

  * Token Definitions: In the lexer grammar file, you define the regular expressions and rules for recognizing individual tokens in the input text. These tokens typically include keywords, identifiers, operators, literals, and punctuation symbols.
  * Priority Rules: Lexer rules may have priority or precedence defined by their order in the lexer grammar file. The first rule that matches a portion of the input text takes precedence.
  * Whitespace and Comments: Lexer rules can also specify how to handle whitespace, comments, and other elements that may not be part of the language's syntax but need to be recognized and processed.
  * Generated Lexer: When you run ANTLR on the lexer grammar file, it generates lexer code in your target programming language (e.g., Java, Python, C#). This lexer code is responsible for tokenizing the input text according to the rules you've defined.
  * Lexer Methods: In addition to tokenization, you can define custom methods in the lexer grammar file to perform additional actions when specific tokens are encountered. These methods can be used for tasks like error handling or advanced processing.

### Parser Grammar File:

The parser grammar file defines the rules for recognizing the structure and syntax of the language based on the tokens produced by the lexer. Here's what you need to know about parser grammar files:

  * Grammar Rules: In the parser grammar file, you define the higher-level language constructs and the rules for their composition. These constructs may include expressions, statements, declarations, and more.
  * Grammar Hierarchy: The parser grammar file defines the hierarchy of language constructs and how they relate to each other. It specifies which constructs can contain others and how they should be organized.
  * Use of Tokens: Parser rules often reference the tokens defined in the lexer grammar file. Tokens serve as the input for the parser, and the parser's job is to recognize the relationships between these tokens and construct a parse tree or abstract syntax tree (AST) that represents the input's structure.
  * Generated Parser: When you run ANTLR on the parser grammar file, it generates parser code in your target programming language. This parser code uses the rules you've defined to build the parse tree or AST.
  * Semantic Actions: Within the parser grammar file, you can also include semantic actions, which are snippets of code associated with specific grammar rules. These actions allow you to perform tasks like building an AST, performing type checking, or generating code during the parsing process.

## Vistitors and Listeners

"Visitor" and "Listener" are two distinct approaches to traverse and process the parsed syntax tree or abstract syntax tree (AST) generated by ANTLR's parser. Let's delve into each of these concepts:

### Visitor:

A "Visitor" is a design pattern used in software engineering to traverse a data structure and perform operations on its elements without modifying the structure itself. In ANTLR, a Visitor is an object that you can define to visit nodes in the parse tree. This pattern is particularly useful when you need to perform complex operations or transformations on the tree, as it separates the logic of traversing the tree from the logic of processing its elements.

Here's how it typically works:

  * ANTLR generates a parse tree or AST from the input source code.
  * You create a custom Visitor class that extends ANTLR's generated Visitor base class.
  * You override methods in the Visitor class to define how to process specific nodes in the tree.
  * You then traverse the tree by invoking the Visitor's methods on the root node of the tree.

### Listener:

A "Listener," on the other hand, is another approach to traverse and process parse trees or ASTs in ANTLR. Listeners are event-driven and more lightweight than Visitors. Instead of writing code to explicitly traverse the tree, you define listener methods that are automatically called as the parser encounters specific elements in the tree.

Here's how it typically works:

  * ANTLR generates a parse tree or AST from the input source code.
  * You create a custom Listener class that extends ANTLR's generated Listener base class.
  * You override listener methods to define what should happen when specific elements in the tree are encountered during traversal.

Listeners are often preferred when you need to perform straightforward tasks like extracting information or generating code as the parser processes the input. They are especially useful for scenarios where you don't need to modify the tree's structure significantly.
