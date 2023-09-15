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
	public static readonly WS = 6;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'-'", null, 
                                                            "'PING'", "'RANDOM'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "DASH", "NUMBER", 
                                                             "PING", "RANDOM", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"NL", "EOI", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,6,65,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,3,
	0,21,8,0,1,0,1,0,3,0,25,8,0,1,1,1,1,3,1,29,8,1,1,2,1,2,1,3,4,3,34,8,3,11,
	3,12,3,35,1,3,1,3,1,4,1,4,1,5,4,5,43,8,5,11,5,12,5,44,1,6,1,6,1,6,1,6,1,
	6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,4,8,60,8,8,11,8,12,8,61,1,8,1,8,0,0,9,
	1,0,3,0,5,0,7,1,9,2,11,3,13,4,15,5,17,6,1,0,11,1,0,48,57,2,0,80,80,112,
	112,2,0,73,73,105,105,2,0,78,78,110,110,2,0,71,71,103,103,2,0,82,82,114,
	114,2,0,65,65,97,97,2,0,68,68,100,100,2,0,79,79,111,111,2,0,77,77,109,109,
	3,0,9,10,13,13,32,32,67,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,1,24,1,0,0,0,3,28,1,0,0,0,5,30,1,0,0,0,7,33,
	1,0,0,0,9,39,1,0,0,0,11,42,1,0,0,0,13,46,1,0,0,0,15,51,1,0,0,0,17,59,1,
	0,0,0,19,21,5,13,0,0,20,19,1,0,0,0,20,21,1,0,0,0,21,22,1,0,0,0,22,25,5,
	10,0,0,23,25,5,13,0,0,24,20,1,0,0,0,24,23,1,0,0,0,25,2,1,0,0,0,26,29,3,
	1,0,0,27,29,5,0,0,1,28,26,1,0,0,0,28,27,1,0,0,0,29,4,1,0,0,0,30,31,7,0,
	0,0,31,6,1,0,0,0,32,34,3,1,0,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,
	0,35,36,1,0,0,0,36,37,1,0,0,0,37,38,6,3,0,0,38,8,1,0,0,0,39,40,5,45,0,0,
	40,10,1,0,0,0,41,43,3,5,2,0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,
	45,1,0,0,0,45,12,1,0,0,0,46,47,7,1,0,0,47,48,7,2,0,0,48,49,7,3,0,0,49,50,
	7,4,0,0,50,14,1,0,0,0,51,52,7,5,0,0,52,53,7,6,0,0,53,54,7,3,0,0,54,55,7,
	7,0,0,55,56,7,8,0,0,56,57,7,9,0,0,57,16,1,0,0,0,58,60,7,10,0,0,59,58,1,
	0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,6,8,
	1,0,64,18,1,0,0,0,7,0,20,24,28,35,44,61,2,2,0,0,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChatBotLexer.__ATN) {
			ChatBotLexer.__ATN = new ATNDeserializer().deserialize(ChatBotLexer._serializedATN);
		}

		return ChatBotLexer.__ATN;
	}


	static DecisionsToDFA = ChatBotLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}