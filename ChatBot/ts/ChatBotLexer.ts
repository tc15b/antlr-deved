// Generated from ChatBotLexer.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class ChatBotLexer extends Lexer {
	public static readonly NEWLINE = 1;
	public static readonly DASH = 2;
	public static readonly NUMBER = 3;
	public static readonly PING = 4;
	public static readonly RANDOM = 5;
	public static readonly ROLL = 6;
	public static readonly REVERSE = 7;
	public static readonly WHITESPACE = 8;
	public static readonly TEXT = 9;
	public static readonly ROLL_WS = 10;
	public static readonly ROLL_NUMBER = 11;
	public static readonly D = 12;
	public static readonly ROLL_NEWLINE = 13;
	public static readonly REVERSE_TEXT = 14;
	public static readonly REVERSE_NEWLINE = 15;
	public static readonly EOF = Token.EOF;
	public static readonly Roll = 1;
	public static readonly Reverse = 2;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'-'", null, 
                                                            "'PING'", "'RANDOM'", 
                                                            "'ROLL'", "'REVERSE'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'d'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "DASH", "NUMBER", 
                                                             "PING", "RANDOM", 
                                                             "ROLL", "REVERSE", 
                                                             "WHITESPACE", 
                                                             "TEXT", "ROLL_WS", 
                                                             "ROLL_NUMBER", 
                                                             "D", "ROLL_NEWLINE", 
                                                             "REVERSE_TEXT", 
                                                             "REVERSE_NEWLINE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "Roll", 
                                                "Reverse", ];

	public static readonly ruleNames: string[] = [
		"NL", "EOI", "WS", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", 
		"ROLL", "REVERSE", "WHITESPACE", "TEXT", "ROLL_WS", "ROLL_NUMBER", "D", 
		"ROLL_NEWLINE", "REVERSE_TEXT", "REVERSE_NEWLINE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ChatBotLexer._ATN, ChatBotLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "ChatBotLexer.g4"; }

	public get literalNames(): (string | null)[] { return ChatBotLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ChatBotLexer.symbolicNames; }
	public get ruleNames(): string[] { return ChatBotLexer.ruleNames; }

	public get serializedATN(): number[] { return ChatBotLexer._serializedATN; }

	public get channelNames(): string[] { return ChatBotLexer.channelNames; }

	public get modeNames(): string[] { return ChatBotLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,15,137,6,-1,6,-1,
	6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,
	8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,
	15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,3,0,43,8,0,1,0,1,0,3,0,47,8,0,1,1,
	1,1,3,1,51,8,1,1,2,1,2,1,3,1,3,1,4,4,4,58,8,4,11,4,12,4,59,1,4,1,4,1,5,
	1,5,1,6,4,6,67,8,6,11,6,12,6,68,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,11,4,11,101,8,11,11,11,12,11,102,1,11,1,11,1,12,4,12,108,
	8,12,11,12,12,12,109,1,13,1,13,1,13,1,13,1,14,4,14,117,8,14,11,14,12,14,
	118,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,4,17,129,8,17,11,17,12,17,130,
	1,18,1,18,1,18,1,18,1,18,2,109,130,0,19,3,0,5,0,7,0,9,0,11,1,13,2,15,3,
	17,4,19,5,21,6,23,7,25,8,27,9,29,10,31,11,33,12,35,13,37,14,39,15,3,0,1,
	2,15,3,0,9,10,13,13,32,32,1,0,48,57,2,0,80,80,112,112,2,0,73,73,105,105,
	2,0,78,78,110,110,2,0,71,71,103,103,2,0,82,82,114,114,2,0,65,65,97,97,2,
	0,68,68,100,100,2,0,79,79,111,111,2,0,77,77,109,109,2,0,76,76,108,108,2,
	0,69,69,101,101,2,0,86,86,118,118,2,0,83,83,115,115,139,0,11,1,0,0,0,0,
	13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
	0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,1,31,1,0,0,0,1,33,1,0,0,0,1,
	35,1,0,0,0,2,37,1,0,0,0,2,39,1,0,0,0,3,46,1,0,0,0,5,50,1,0,0,0,7,52,1,0,
	0,0,9,54,1,0,0,0,11,57,1,0,0,0,13,63,1,0,0,0,15,66,1,0,0,0,17,70,1,0,0,
	0,19,75,1,0,0,0,21,82,1,0,0,0,23,89,1,0,0,0,25,100,1,0,0,0,27,107,1,0,0,
	0,29,111,1,0,0,0,31,116,1,0,0,0,33,120,1,0,0,0,35,122,1,0,0,0,37,128,1,
	0,0,0,39,132,1,0,0,0,41,43,5,13,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,44,1,
	0,0,0,44,47,5,10,0,0,45,47,5,13,0,0,46,42,1,0,0,0,46,45,1,0,0,0,47,4,1,
	0,0,0,48,51,3,3,0,0,49,51,5,0,0,1,50,48,1,0,0,0,50,49,1,0,0,0,51,6,1,0,
	0,0,52,53,7,0,0,0,53,8,1,0,0,0,54,55,7,1,0,0,55,10,1,0,0,0,56,58,3,3,0,
	0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,
	61,62,6,4,0,0,62,12,1,0,0,0,63,64,5,45,0,0,64,14,1,0,0,0,65,67,3,9,3,0,
	66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,16,1,0,0,0,70,
	71,7,2,0,0,71,72,7,3,0,0,72,73,7,4,0,0,73,74,7,5,0,0,74,18,1,0,0,0,75,76,
	7,6,0,0,76,77,7,7,0,0,77,78,7,4,0,0,78,79,7,8,0,0,79,80,7,9,0,0,80,81,7,
	10,0,0,81,20,1,0,0,0,82,83,7,6,0,0,83,84,7,9,0,0,84,85,7,11,0,0,85,86,7,
	11,0,0,86,87,1,0,0,0,87,88,6,9,1,0,88,22,1,0,0,0,89,90,7,6,0,0,90,91,7,
	12,0,0,91,92,7,13,0,0,92,93,7,12,0,0,93,94,7,6,0,0,94,95,7,14,0,0,95,96,
	7,12,0,0,96,97,1,0,0,0,97,98,6,10,2,0,98,24,1,0,0,0,99,101,3,7,2,0,100,
	99,1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,104,1,0,
	0,0,104,105,6,11,3,0,105,26,1,0,0,0,106,108,9,0,0,0,107,106,1,0,0,0,108,
	109,1,0,0,0,109,110,1,0,0,0,109,107,1,0,0,0,110,28,1,0,0,0,111,112,3,7,
	2,0,112,113,1,0,0,0,113,114,6,13,3,0,114,30,1,0,0,0,115,117,3,9,3,0,116,
	115,1,0,0,0,117,118,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,32,1,0,
	0,0,120,121,7,8,0,0,121,34,1,0,0,0,122,123,3,5,1,0,123,124,1,0,0,0,124,
	125,6,16,3,0,125,126,6,16,4,0,126,36,1,0,0,0,127,129,9,0,0,0,128,127,1,
	0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,130,128,1,0,0,0,131,38,1,0,0,0,132,
	133,3,5,1,0,133,134,1,0,0,0,134,135,6,18,3,0,135,136,6,18,4,0,136,40,1,
	0,0,0,12,0,1,2,42,46,50,59,68,102,109,118,130,5,2,0,0,5,1,0,5,2,0,6,0,0,
	4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChatBotLexer.__ATN) {
			ChatBotLexer.__ATN = new ATNDeserializer().deserialize(ChatBotLexer._serializedATN);
		}

		return ChatBotLexer.__ATN;
	}


	static DecisionsToDFA = ChatBotLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}