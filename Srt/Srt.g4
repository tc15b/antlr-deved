grammar Srt;

/*
 * Parser Rules
 */

file: (statement NEWLINE)+ EOF ; // statement EOI+;

statement : id=any_number NEWLINE tr=timerange NEWLINE (line NEWLINE)+ ;

timerange : from=timestamp WHITESPACE '-->' WHITESPACE to=timestamp ;

timestamp : hour=any_number COLON minute=NAUGHTOSIXTY COLON seconds=NAUGHTOSIXTY (COMMA miliseconds=any_number)? ;

line: (any_number | TEXT | WHITESPACE | COMMA | COLON)+ ;
any_number : DIGITS | NAUGHTOSIXTY ;

/*
 * Lexer Rules
 */

fragment DIGIT : [0-9] ;

COLON : ':' ;
COMMA : ',' ;

NAUGHTOSIXTY : ([0-5] DIGIT | '60') ;

WHITESPACE          : (' ' | '\t')+ ;

NEWLINE             : ('\r'? '\n' | '\r') ;

EOI : (NEWLINE | EOF) ; // End of Input

DIGITS : DIGIT+ ;

TEXT                : ~[\r\n]+? ;