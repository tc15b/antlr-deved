parser grammar ChatBotParser;

options { 
	caseInsensitive = true;
	tokenVocab = ChatBotLexer;
}

// parser rules

file: (command NEWLINE*)+ EOF ;

command : ping_command 
				| random_command
				| roll_command
				| reverse_command
				;

ping_command : PING ;
random_command : RANDOM (from=NUMBER DASH)? to=NUMBER ;
roll_command : ROLL (roll_die)+ ;
reverse_command: REVERSE TEXT+;

roll_die : die_count=NUMBER? D sides=NUMBER ;
