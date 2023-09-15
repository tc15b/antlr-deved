parser grammar ChatBotParser;

options { 
	caseInsensitive = true;
	tokenVocab = ChatBotLexer;
}

// parser rules

file: (command NEWLINE*)+ EOF ;

command : ping_command 
				| random_command
				;

ping_command : PING ;
random_command : RANDOM (from=NUMBER DASH)? to=NUMBER ;