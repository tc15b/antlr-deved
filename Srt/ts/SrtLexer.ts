// Generated from Srt.g4 by ANTLR 4.13.0
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
export default class SrtLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly COLON = 2;
	public static readonly COMMA = 3;
	public static readonly NAUGHTOSIXTY = 4;
	public static readonly WHITESPACE = 5;
	public static readonly NEWLINE = 6;
	public static readonly EOI = 7;
	public static readonly DIGITS = 8;
	public static readonly TEXT = 9;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'-->'", 
                                                            "':'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "COLON", "COMMA", 
                                                             "NAUGHTOSIXTY", 
                                                             "WHITESPACE", 
                                                             "NEWLINE", 
                                                             "EOI", "DIGITS", 
                                                             "TEXT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "DIGIT", "COLON", "COMMA", "NAUGHTOSIXTY", "WHITESPACE", "NEWLINE", 
		"EOI", "DIGITS", "TEXT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, SrtLexer._ATN, SrtLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Srt.g4"; }

	public get literalNames(): (string | null)[] { return SrtLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return SrtLexer.symbolicNames; }
	public get ruleNames(): string[] { return SrtLexer.ruleNames; }

	public get serializedATN(): number[] { return SrtLexer._serializedATN; }

	public get channelNames(): string[] { return SrtLexer.channelNames; }

	public get modeNames(): string[] { return SrtLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,9,63,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,3,4,36,8,4,1,
	5,4,5,39,8,5,11,5,12,5,40,1,6,3,6,44,8,6,1,6,1,6,3,6,48,8,6,1,7,1,7,3,7,
	52,8,7,1,8,4,8,55,8,8,11,8,12,8,56,1,9,4,9,60,8,9,11,9,12,9,61,1,61,0,10,
	1,1,3,0,5,2,7,3,9,4,11,5,13,6,15,7,17,8,19,9,1,0,4,1,0,48,57,1,0,48,53,
	2,0,9,9,32,32,2,0,10,10,13,13,68,0,1,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
	9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
	0,0,1,21,1,0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,29,1,0,0,0,9,35,1,0,0,0,11,
	38,1,0,0,0,13,47,1,0,0,0,15,51,1,0,0,0,17,54,1,0,0,0,19,59,1,0,0,0,21,22,
	5,45,0,0,22,23,5,45,0,0,23,24,5,62,0,0,24,2,1,0,0,0,25,26,7,0,0,0,26,4,
	1,0,0,0,27,28,5,58,0,0,28,6,1,0,0,0,29,30,5,44,0,0,30,8,1,0,0,0,31,32,7,
	1,0,0,32,36,3,3,1,0,33,34,5,54,0,0,34,36,5,48,0,0,35,31,1,0,0,0,35,33,1,
	0,0,0,36,10,1,0,0,0,37,39,7,2,0,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,
	0,0,40,41,1,0,0,0,41,12,1,0,0,0,42,44,5,13,0,0,43,42,1,0,0,0,43,44,1,0,
	0,0,44,45,1,0,0,0,45,48,5,10,0,0,46,48,5,13,0,0,47,43,1,0,0,0,47,46,1,0,
	0,0,48,14,1,0,0,0,49,52,3,13,6,0,50,52,5,0,0,1,51,49,1,0,0,0,51,50,1,0,
	0,0,52,16,1,0,0,0,53,55,3,3,1,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,1,0,0,
	0,56,57,1,0,0,0,57,18,1,0,0,0,58,60,8,3,0,0,59,58,1,0,0,0,60,61,1,0,0,0,
	61,62,1,0,0,0,61,59,1,0,0,0,62,20,1,0,0,0,8,0,35,40,43,47,51,56,61,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SrtLexer.__ATN) {
			SrtLexer.__ATN = new ATNDeserializer().deserialize(SrtLexer._serializedATN);
		}

		return SrtLexer.__ATN;
	}


	static DecisionsToDFA = SrtLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}