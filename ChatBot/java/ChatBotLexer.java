// Generated from ChatBotLexer.g4 by ANTLR 4.13.0
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ChatBotLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.0", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NEWLINE=1, DASH=2, NUMBER=3, PING=4, RANDOM=5, ROLL=6, REVERSE=7, WHITESPACE=8, 
		TEXT=9, ROLL_WS=10, ROLL_NUMBER=11, D=12, ROLL_NEWLINE=13, REVERSE_TEXT=14, 
		REVERSE_NEWLINE=15;
	public static final int
		Roll=1, Reverse=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "Roll", "Reverse"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NL", "EOI", "WS", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", 
			"ROLL", "REVERSE", "WHITESPACE", "TEXT", "ROLL_WS", "ROLL_NUMBER", "D", 
			"ROLL_NEWLINE", "REVERSE_TEXT", "REVERSE_NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'-'", null, "'PING'", null, null, null, null, null, null, 
			null, "'d'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "ROLL", "REVERSE", 
			"WHITESPACE", "TEXT", "ROLL_WS", "ROLL_NUMBER", "D", "ROLL_NEWLINE", 
			"REVERSE_TEXT", "REVERSE_NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ChatBotLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ChatBotLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000f\u0098\u0006\uffff\uffff\u0006\uffff\uffff\u0006\uffff"+
		"\uffff\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007"+
		"\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007"+
		"\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b"+
		"\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007"+
		"\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002"+
		"\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012\u0001"+
		"\u0000\u0003\u0000+\b\u0000\u0001\u0000\u0001\u0000\u0003\u0000/\b\u0000"+
		"\u0001\u0001\u0001\u0001\u0003\u00013\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0004\u0004:\b\u0004\u000b\u0004"+
		"\f\u0004;\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0004\u0006C\b\u0006\u000b\u0006\f\u0006D\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0004\bT\b\b\u000b\b\f\bU\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0004\t^\b\t\u000b\t\f\t_\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0004"+
		"\nm\b\n\u000b\n\f\nn\u0001\n\u0001\n\u0001\u000b\u0004\u000bt\b\u000b"+
		"\u000b\u000b\f\u000bu\u0001\u000b\u0001\u000b\u0001\f\u0004\f{\b\f\u000b"+
		"\f\f\f|\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0004\u000e\u0084"+
		"\b\u000e\u000b\u000e\f\u000e\u0085\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0004\u0011"+
		"\u0090\b\u0011\u000b\u0011\f\u0011\u0091\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0002|\u0091\u0000\u0013\u0003\u0000\u0005"+
		"\u0000\u0007\u0000\t\u0000\u000b\u0001\r\u0002\u000f\u0003\u0011\u0004"+
		"\u0013\u0005\u0015\u0006\u0017\u0007\u0019\b\u001b\t\u001d\n\u001f\u000b"+
		"!\f#\r%\u000e\'\u000f\u0003\u0000\u0001\u0002\u000f\u0003\u0000\t\n\r"+
		"\r  \u0001\u000009\u0002\u0000PPpp\u0002\u0000IIii\u0002\u0000NNnn\u0002"+
		"\u0000GGgg\u0002\u0000RRrr\u0002\u0000AAaa\u0002\u0000DDdd\u0002\u0000"+
		"OOoo\u0002\u0000MMmm\u0002\u0000LLll\u0002\u0000EEee\u0002\u0000VVvv\u0002"+
		"\u0000SSss\u009d\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0001\u001d\u0001\u0000"+
		"\u0000\u0000\u0001\u001f\u0001\u0000\u0000\u0000\u0001!\u0001\u0000\u0000"+
		"\u0000\u0001#\u0001\u0000\u0000\u0000\u0002%\u0001\u0000\u0000\u0000\u0002"+
		"\'\u0001\u0000\u0000\u0000\u0003.\u0001\u0000\u0000\u0000\u00052\u0001"+
		"\u0000\u0000\u0000\u00074\u0001\u0000\u0000\u0000\t6\u0001\u0000\u0000"+
		"\u0000\u000b9\u0001\u0000\u0000\u0000\r?\u0001\u0000\u0000\u0000\u000f"+
		"B\u0001\u0000\u0000\u0000\u0011F\u0001\u0000\u0000\u0000\u0013K\u0001"+
		"\u0000\u0000\u0000\u0015W\u0001\u0000\u0000\u0000\u0017c\u0001\u0000\u0000"+
		"\u0000\u0019s\u0001\u0000\u0000\u0000\u001bz\u0001\u0000\u0000\u0000\u001d"+
		"~\u0001\u0000\u0000\u0000\u001f\u0083\u0001\u0000\u0000\u0000!\u0087\u0001"+
		"\u0000\u0000\u0000#\u0089\u0001\u0000\u0000\u0000%\u008f\u0001\u0000\u0000"+
		"\u0000\'\u0093\u0001\u0000\u0000\u0000)+\u0005\r\u0000\u0000*)\u0001\u0000"+
		"\u0000\u0000*+\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,/\u0005"+
		"\n\u0000\u0000-/\u0005\r\u0000\u0000.*\u0001\u0000\u0000\u0000.-\u0001"+
		"\u0000\u0000\u0000/\u0004\u0001\u0000\u0000\u000003\u0003\u0003\u0000"+
		"\u000013\u0005\u0000\u0000\u000120\u0001\u0000\u0000\u000021\u0001\u0000"+
		"\u0000\u00003\u0006\u0001\u0000\u0000\u000045\u0007\u0000\u0000\u0000"+
		"5\b\u0001\u0000\u0000\u000067\u0007\u0001\u0000\u00007\n\u0001\u0000\u0000"+
		"\u00008:\u0003\u0003\u0000\u000098\u0001\u0000\u0000\u0000:;\u0001\u0000"+
		"\u0000\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0001"+
		"\u0000\u0000\u0000=>\u0006\u0004\u0000\u0000>\f\u0001\u0000\u0000\u0000"+
		"?@\u0005-\u0000\u0000@\u000e\u0001\u0000\u0000\u0000AC\u0003\t\u0003\u0000"+
		"BA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000"+
		"\u0000DE\u0001\u0000\u0000\u0000E\u0010\u0001\u0000\u0000\u0000FG\u0007"+
		"\u0002\u0000\u0000GH\u0007\u0003\u0000\u0000HI\u0007\u0004\u0000\u0000"+
		"IJ\u0007\u0005\u0000\u0000J\u0012\u0001\u0000\u0000\u0000KL\u0007\u0006"+
		"\u0000\u0000LM\u0007\u0007\u0000\u0000MN\u0007\u0004\u0000\u0000NO\u0007"+
		"\b\u0000\u0000OP\u0007\t\u0000\u0000PQ\u0007\n\u0000\u0000QS\u0001\u0000"+
		"\u0000\u0000RT\u0003\u0007\u0002\u0000SR\u0001\u0000\u0000\u0000TU\u0001"+
		"\u0000\u0000\u0000US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000"+
		"V\u0014\u0001\u0000\u0000\u0000WX\u0007\u0006\u0000\u0000XY\u0007\t\u0000"+
		"\u0000YZ\u0007\u000b\u0000\u0000Z[\u0007\u000b\u0000\u0000[]\u0001\u0000"+
		"\u0000\u0000\\^\u0003\u0007\u0002\u0000]\\\u0001\u0000\u0000\u0000^_\u0001"+
		"\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000"+
		"`a\u0001\u0000\u0000\u0000ab\u0006\t\u0001\u0000b\u0016\u0001\u0000\u0000"+
		"\u0000cd\u0007\u0006\u0000\u0000de\u0007\f\u0000\u0000ef\u0007\r\u0000"+
		"\u0000fg\u0007\f\u0000\u0000gh\u0007\u0006\u0000\u0000hi\u0007\u000e\u0000"+
		"\u0000ij\u0007\f\u0000\u0000jl\u0001\u0000\u0000\u0000km\u0003\u0007\u0002"+
		"\u0000lk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000nl\u0001\u0000"+
		"\u0000\u0000no\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pq\u0006"+
		"\n\u0002\u0000q\u0018\u0001\u0000\u0000\u0000rt\u0003\u0007\u0002\u0000"+
		"sr\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000us\u0001\u0000\u0000"+
		"\u0000uv\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000wx\u0006\u000b"+
		"\u0003\u0000x\u001a\u0001\u0000\u0000\u0000y{\t\u0000\u0000\u0000zy\u0001"+
		"\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000"+
		"|z\u0001\u0000\u0000\u0000}\u001c\u0001\u0000\u0000\u0000~\u007f\u0003"+
		"\u0007\u0002\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0006"+
		"\r\u0003\u0000\u0081\u001e\u0001\u0000\u0000\u0000\u0082\u0084\u0003\t"+
		"\u0003\u0000\u0083\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000"+
		"\u0000\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000"+
		"\u0000\u0000\u0086 \u0001\u0000\u0000\u0000\u0087\u0088\u0007\b\u0000"+
		"\u0000\u0088\"\u0001\u0000\u0000\u0000\u0089\u008a\u0003\u0005\u0001\u0000"+
		"\u008a\u008b\u0001\u0000\u0000\u0000\u008b\u008c\u0006\u0010\u0003\u0000"+
		"\u008c\u008d\u0006\u0010\u0004\u0000\u008d$\u0001\u0000\u0000\u0000\u008e"+
		"\u0090\t\u0000\u0000\u0000\u008f\u008e\u0001\u0000\u0000\u0000\u0090\u0091"+
		"\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0091\u008f"+
		"\u0001\u0000\u0000\u0000\u0092&\u0001\u0000\u0000\u0000\u0093\u0094\u0003"+
		"\u0005\u0001\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0096\u0006"+
		"\u0012\u0003\u0000\u0096\u0097\u0006\u0012\u0004\u0000\u0097(\u0001\u0000"+
		"\u0000\u0000\u000f\u0000\u0001\u0002*.2;DU_nu|\u0085\u0091\u0005\u0002"+
		"\u0000\u0000\u0005\u0001\u0000\u0005\u0002\u0000\u0006\u0000\u0000\u0004"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}