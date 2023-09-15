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
	public static readonly PING = 2;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'PING'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "PING" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"NL", "EOI", "WS", "DIGIT", "NUMBER", "NEWLINE", "PING",
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

	public static readonly _serializedATN: number[] = [4,0,2,47,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,3,0,17,8,0,1,0,1,
	0,3,0,21,8,0,1,1,1,1,3,1,25,8,1,1,2,1,2,1,3,1,3,1,4,4,4,32,8,4,11,4,12,
	4,33,1,5,4,5,37,8,5,11,5,12,5,38,1,5,1,5,1,6,1,6,1,6,1,6,1,6,0,0,7,1,0,
	3,0,5,0,7,0,9,0,11,1,13,2,1,0,6,2,0,9,9,32,32,1,0,48,57,2,0,80,80,112,112,
	2,0,73,73,105,105,2,0,78,78,110,110,2,0,71,71,103,103,46,0,11,1,0,0,0,0,
	13,1,0,0,0,1,20,1,0,0,0,3,24,1,0,0,0,5,26,1,0,0,0,7,28,1,0,0,0,9,31,1,0,
	0,0,11,36,1,0,0,0,13,42,1,0,0,0,15,17,5,13,0,0,16,15,1,0,0,0,16,17,1,0,
	0,0,17,18,1,0,0,0,18,21,5,10,0,0,19,21,5,13,0,0,20,16,1,0,0,0,20,19,1,0,
	0,0,21,2,1,0,0,0,22,25,3,1,0,0,23,25,5,0,0,1,24,22,1,0,0,0,24,23,1,0,0,
	0,25,4,1,0,0,0,26,27,7,0,0,0,27,6,1,0,0,0,28,29,7,1,0,0,29,8,1,0,0,0,30,
	32,3,7,3,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,10,
	1,0,0,0,35,37,3,1,0,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,
	0,0,0,39,40,1,0,0,0,40,41,6,5,0,0,41,12,1,0,0,0,42,43,7,2,0,0,43,44,7,3,
	0,0,44,45,7,4,0,0,45,46,7,5,0,0,46,14,1,0,0,0,6,0,16,20,24,33,38,1,2,0,
	0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChatBotLexer.__ATN) {
			ChatBotLexer.__ATN = new ATNDeserializer().deserialize(ChatBotLexer._serializedATN);
		}

		return ChatBotLexer.__ATN;
	}


	static DecisionsToDFA = ChatBotLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}