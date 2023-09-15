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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'-'", null, 
                                                            "'PING'", "'RANDOM'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "DASH", "NUMBER", 
                                                             "PING", "RANDOM" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"NL", "EOI", "WS", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM",
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

	public static readonly _serializedATN: number[] = [4,0,5,60,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,3,
	0,21,8,0,1,0,1,0,3,0,25,8,0,1,1,1,1,3,1,29,8,1,1,2,1,2,1,3,1,3,1,4,4,4,
	36,8,4,11,4,12,4,37,1,4,1,4,1,5,1,5,1,6,4,6,45,8,6,11,6,12,6,46,1,7,1,7,
	1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,0,0,9,1,0,3,0,5,0,7,0,9,1,11,2,
	13,3,15,4,17,5,1,0,11,2,0,9,9,32,32,1,0,48,57,2,0,80,80,112,112,2,0,73,
	73,105,105,2,0,78,78,110,110,2,0,71,71,103,103,2,0,82,82,114,114,2,0,65,
	65,97,97,2,0,68,68,100,100,2,0,79,79,111,111,2,0,77,77,109,109,60,0,9,1,
	0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,24,1,0,0,0,
	3,28,1,0,0,0,5,30,1,0,0,0,7,32,1,0,0,0,9,35,1,0,0,0,11,41,1,0,0,0,13,44,
	1,0,0,0,15,48,1,0,0,0,17,53,1,0,0,0,19,21,5,13,0,0,20,19,1,0,0,0,20,21,
	1,0,0,0,21,22,1,0,0,0,22,25,5,10,0,0,23,25,5,13,0,0,24,20,1,0,0,0,24,23,
	1,0,0,0,25,2,1,0,0,0,26,29,3,1,0,0,27,29,5,0,0,1,28,26,1,0,0,0,28,27,1,
	0,0,0,29,4,1,0,0,0,30,31,7,0,0,0,31,6,1,0,0,0,32,33,7,1,0,0,33,8,1,0,0,
	0,34,36,3,1,0,0,35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,
	38,39,1,0,0,0,39,40,6,4,0,0,40,10,1,0,0,0,41,42,5,45,0,0,42,12,1,0,0,0,
	43,45,3,7,3,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,
	14,1,0,0,0,48,49,7,2,0,0,49,50,7,3,0,0,50,51,7,4,0,0,51,52,7,5,0,0,52,16,
	1,0,0,0,53,54,7,6,0,0,54,55,7,7,0,0,55,56,7,4,0,0,56,57,7,8,0,0,57,58,7,
	9,0,0,58,59,7,10,0,0,59,18,1,0,0,0,6,0,20,24,28,37,46,1,2,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChatBotLexer.__ATN) {
			ChatBotLexer.__ATN = new ATNDeserializer().deserialize(ChatBotLexer._serializedATN);
		}

		return ChatBotLexer.__ATN;
	}


	static DecisionsToDFA = ChatBotLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}