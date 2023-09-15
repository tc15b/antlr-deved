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
	public static readonly D = 8;
	public static readonly WS = 9;
	public static readonly TEXT = 10;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'-'", null, 
                                                            "'PING'", "'RANDOM'", 
                                                            "'ROLL'", "'REVERSE'", 
                                                            "'d'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "DASH", "NUMBER", 
                                                             "PING", "RANDOM", 
                                                             "ROLL", "REVERSE", 
                                                             "D", "WS", 
                                                             "TEXT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"NL", "EOI", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "ROLL", 
		"REVERSE", "D", "WS", "TEXT",
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

	public static readonly _serializedATN: number[] = [4,0,10,93,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,3,0,29,8,0,1,0,1,0,3,0,33,8,0,1,1,1,
	1,3,1,37,8,1,1,2,1,2,1,3,4,3,42,8,3,11,3,12,3,43,1,3,1,3,1,4,1,4,1,5,4,
	5,51,8,5,11,5,12,5,52,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,4,11,83,
	8,11,11,11,12,11,84,1,11,1,11,1,12,4,12,90,8,12,11,12,12,12,91,1,91,0,13,
	1,0,3,0,5,0,7,1,9,2,11,3,13,4,15,5,17,6,19,7,21,8,23,9,25,10,1,0,15,1,0,
	48,57,2,0,80,80,112,112,2,0,73,73,105,105,2,0,78,78,110,110,2,0,71,71,103,
	103,2,0,82,82,114,114,2,0,65,65,97,97,2,0,68,68,100,100,2,0,79,79,111,111,
	2,0,77,77,109,109,2,0,76,76,108,108,2,0,69,69,101,101,2,0,86,86,118,118,
	2,0,83,83,115,115,3,0,9,10,13,13,32,32,96,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
	0,0,23,1,0,0,0,0,25,1,0,0,0,1,32,1,0,0,0,3,36,1,0,0,0,5,38,1,0,0,0,7,41,
	1,0,0,0,9,47,1,0,0,0,11,50,1,0,0,0,13,54,1,0,0,0,15,59,1,0,0,0,17,66,1,
	0,0,0,19,71,1,0,0,0,21,79,1,0,0,0,23,82,1,0,0,0,25,89,1,0,0,0,27,29,5,13,
	0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,30,1,0,0,0,30,33,5,10,0,0,31,33,5,13,
	0,0,32,28,1,0,0,0,32,31,1,0,0,0,33,2,1,0,0,0,34,37,3,1,0,0,35,37,5,0,0,
	1,36,34,1,0,0,0,36,35,1,0,0,0,37,4,1,0,0,0,38,39,7,0,0,0,39,6,1,0,0,0,40,
	42,3,1,0,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,45,
	1,0,0,0,45,46,6,3,0,0,46,8,1,0,0,0,47,48,5,45,0,0,48,10,1,0,0,0,49,51,3,
	5,2,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,12,1,0,
	0,0,54,55,7,1,0,0,55,56,7,2,0,0,56,57,7,3,0,0,57,58,7,4,0,0,58,14,1,0,0,
	0,59,60,7,5,0,0,60,61,7,6,0,0,61,62,7,3,0,0,62,63,7,7,0,0,63,64,7,8,0,0,
	64,65,7,9,0,0,65,16,1,0,0,0,66,67,7,5,0,0,67,68,7,8,0,0,68,69,7,10,0,0,
	69,70,7,10,0,0,70,18,1,0,0,0,71,72,7,5,0,0,72,73,7,11,0,0,73,74,7,12,0,
	0,74,75,7,11,0,0,75,76,7,5,0,0,76,77,7,13,0,0,77,78,7,11,0,0,78,20,1,0,
	0,0,79,80,7,7,0,0,80,22,1,0,0,0,81,83,7,14,0,0,82,81,1,0,0,0,83,84,1,0,
	0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,6,11,1,0,87,24,1,0,
	0,0,88,90,9,0,0,0,89,88,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,91,89,1,0,0,
	0,92,26,1,0,0,0,8,0,28,32,36,43,52,84,91,2,2,0,0,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChatBotLexer.__ATN) {
			ChatBotLexer.__ATN = new ATNDeserializer().deserialize(ChatBotLexer._serializedATN);
		}

		return ChatBotLexer.__ATN;
	}


	static DecisionsToDFA = ChatBotLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}