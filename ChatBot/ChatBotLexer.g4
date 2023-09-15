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
ROLL: 'ROLL' -> pushMode(Roll) ;
REVERSE: 'REVERSE' ;


WS : [ \t\r\n]+ -> skip ;
TEXT : .+? ;

mode Roll;
	D: 'd' ;
	ROLL_NEWLINE : EOI -> skip,popMode ;
