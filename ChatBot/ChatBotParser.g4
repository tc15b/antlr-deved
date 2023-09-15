parser grammar ChatBotParser;

options { 
	caseInsensitive = true;
	tokenVocab = ChatBotLexer;
}

// parser rules

file: (command NEWLINE*)+ EOF ;

command : PING ;
