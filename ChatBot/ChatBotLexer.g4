lexer grammar ChatBotLexer;

options { caseInsensitive = true; }

fragment NL : ('\r'? '\n' | '\r') ;
fragment EOI : (NL | EOF) ; // End of Input
fragment DIGIT : [0-9] ;

NEWLINE : NL+ -> mode(DEFAULT_MODE);
DASH: '-' ;
NUMBER : DIGIT+ ;

PING: 'PING' ;
RANDOM: 'RANDOM' ;
ROLL: 'ROLL' ;
REVERSE: 'REVERSE' ;

D: 'd' ;

WS : [ \t\r\n]+ -> skip ;
TEXT : .+? ;