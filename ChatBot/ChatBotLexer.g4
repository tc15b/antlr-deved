lexer grammar ChatBotLexer;

options { caseInsensitive = true; }

fragment NL : ('\r'? '\n' | '\r') ;
fragment EOI : (NL | EOF) ; // End of Input
fragment WS : [ \t\r\n] ;
fragment DIGIT : [0-9] ;

NEWLINE : NL+ -> mode(DEFAULT_MODE);
DASH: '-' ;
NUMBER : DIGIT+ ;

PING: 'PING' ;
RANDOM: 'RANDOM' ;
ROLL: 'ROLL' -> pushMode(Roll) ;
REVERSE: 'REVERSE' ;


WHITESPACE : WS+ -> skip ;
TEXT : .+? ;

mode Roll;
	ROLL_WS : WS -> skip ;
	ROLL_NUMBER: DIGIT+ ;
	D: 'd' ;
	ROLL_NEWLINE : EOI -> skip,popMode ;
