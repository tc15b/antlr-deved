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
		TEXT=9, ROLL_WS=10, ROLL_NUMBER=11, D=12, ROLL_NEWLINE=13;
	public static final int
		Roll=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "Roll"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NL", "EOI", "WS", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", 
			"ROLL", "REVERSE", "WHITESPACE", "TEXT", "ROLL_WS", "ROLL_NUMBER", "D", 
			"ROLL_NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'-'", null, "'PING'", "'RANDOM'", "'ROLL'", "'REVERSE'", 
			null, null, null, null, "'d'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "ROLL", "REVERSE", 
			"WHITESPACE", "TEXT", "ROLL_WS", "ROLL_NUMBER", "D", "ROLL_NEWLINE"
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
		"\u0004\u0000\rx\u0006\uffff\uffff\u0006\uffff\uffff\u0002\u0000\u0007"+
		"\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007"+
		"\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007"+
		"\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n"+
		"\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002"+
		"\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001"+
		"\u0000\u0003\u0000&\b\u0000\u0001\u0000\u0001\u0000\u0003\u0000*\b\u0000"+
		"\u0001\u0001\u0001\u0001\u0003\u0001.\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0004\u00045\b\u0004\u000b\u0004"+
		"\f\u00046\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0004\u0006>\b\u0006\u000b\u0006\f\u0006?\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0004\u000b^\b\u000b\u000b\u000b\f\u000b_\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0004\fe\b\f\u000b\f\f\ff\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0004\u000en\b\u000e\u000b\u000e\f\u000eo\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001f\u0000"+
		"\u0011\u0002\u0000\u0004\u0000\u0006\u0000\b\u0000\n\u0001\f\u0002\u000e"+
		"\u0003\u0010\u0004\u0012\u0005\u0014\u0006\u0016\u0007\u0018\b\u001a\t"+
		"\u001c\n\u001e\u000b \f\"\r\u0002\u0000\u0001\u000f\u0003\u0000\t\n\r"+
		"\r  \u0001\u000009\u0002\u0000PPpp\u0002\u0000IIii\u0002\u0000NNnn\u0002"+
		"\u0000GGgg\u0002\u0000RRrr\u0002\u0000AAaa\u0002\u0000DDdd\u0002\u0000"+
		"OOoo\u0002\u0000MMmm\u0002\u0000LLll\u0002\u0000EEee\u0002\u0000VVvv\u0002"+
		"\u0000SSssz\u0000\n\u0001\u0000\u0000\u0000\u0000\f\u0001\u0000\u0000"+
		"\u0000\u0000\u000e\u0001\u0000\u0000\u0000\u0000\u0010\u0001\u0000\u0000"+
		"\u0000\u0000\u0012\u0001\u0000\u0000\u0000\u0000\u0014\u0001\u0000\u0000"+
		"\u0000\u0000\u0016\u0001\u0000\u0000\u0000\u0000\u0018\u0001\u0000\u0000"+
		"\u0000\u0000\u001a\u0001\u0000\u0000\u0000\u0001\u001c\u0001\u0000\u0000"+
		"\u0000\u0001\u001e\u0001\u0000\u0000\u0000\u0001 \u0001\u0000\u0000\u0000"+
		"\u0001\"\u0001\u0000\u0000\u0000\u0002)\u0001\u0000\u0000\u0000\u0004"+
		"-\u0001\u0000\u0000\u0000\u0006/\u0001\u0000\u0000\u0000\b1\u0001\u0000"+
		"\u0000\u0000\n4\u0001\u0000\u0000\u0000\f:\u0001\u0000\u0000\u0000\u000e"+
		"=\u0001\u0000\u0000\u0000\u0010A\u0001\u0000\u0000\u0000\u0012F\u0001"+
		"\u0000\u0000\u0000\u0014M\u0001\u0000\u0000\u0000\u0016T\u0001\u0000\u0000"+
		"\u0000\u0018]\u0001\u0000\u0000\u0000\u001ad\u0001\u0000\u0000\u0000\u001c"+
		"h\u0001\u0000\u0000\u0000\u001em\u0001\u0000\u0000\u0000 q\u0001\u0000"+
		"\u0000\u0000\"s\u0001\u0000\u0000\u0000$&\u0005\r\u0000\u0000%$\u0001"+
		"\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000"+
		"\'*\u0005\n\u0000\u0000(*\u0005\r\u0000\u0000)%\u0001\u0000\u0000\u0000"+
		")(\u0001\u0000\u0000\u0000*\u0003\u0001\u0000\u0000\u0000+.\u0003\u0002"+
		"\u0000\u0000,.\u0005\u0000\u0000\u0001-+\u0001\u0000\u0000\u0000-,\u0001"+
		"\u0000\u0000\u0000.\u0005\u0001\u0000\u0000\u0000/0\u0007\u0000\u0000"+
		"\u00000\u0007\u0001\u0000\u0000\u000012\u0007\u0001\u0000\u00002\t\u0001"+
		"\u0000\u0000\u000035\u0003\u0002\u0000\u000043\u0001\u0000\u0000\u0000"+
		"56\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u000067\u0001\u0000\u0000"+
		"\u000078\u0001\u0000\u0000\u000089\u0006\u0004\u0000\u00009\u000b\u0001"+
		"\u0000\u0000\u0000:;\u0005-\u0000\u0000;\r\u0001\u0000\u0000\u0000<>\u0003"+
		"\b\u0003\u0000=<\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?=\u0001"+
		"\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@\u000f\u0001\u0000\u0000"+
		"\u0000AB\u0007\u0002\u0000\u0000BC\u0007\u0003\u0000\u0000CD\u0007\u0004"+
		"\u0000\u0000DE\u0007\u0005\u0000\u0000E\u0011\u0001\u0000\u0000\u0000"+
		"FG\u0007\u0006\u0000\u0000GH\u0007\u0007\u0000\u0000HI\u0007\u0004\u0000"+
		"\u0000IJ\u0007\b\u0000\u0000JK\u0007\t\u0000\u0000KL\u0007\n\u0000\u0000"+
		"L\u0013\u0001\u0000\u0000\u0000MN\u0007\u0006\u0000\u0000NO\u0007\t\u0000"+
		"\u0000OP\u0007\u000b\u0000\u0000PQ\u0007\u000b\u0000\u0000QR\u0001\u0000"+
		"\u0000\u0000RS\u0006\t\u0001\u0000S\u0015\u0001\u0000\u0000\u0000TU\u0007"+
		"\u0006\u0000\u0000UV\u0007\f\u0000\u0000VW\u0007\r\u0000\u0000WX\u0007"+
		"\f\u0000\u0000XY\u0007\u0006\u0000\u0000YZ\u0007\u000e\u0000\u0000Z[\u0007"+
		"\f\u0000\u0000[\u0017\u0001\u0000\u0000\u0000\\^\u0003\u0006\u0002\u0000"+
		"]\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000"+
		"\u0000_`\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000ab\u0006\u000b"+
		"\u0002\u0000b\u0019\u0001\u0000\u0000\u0000ce\t\u0000\u0000\u0000dc\u0001"+
		"\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000"+
		"fd\u0001\u0000\u0000\u0000g\u001b\u0001\u0000\u0000\u0000hi\u0003\u0006"+
		"\u0002\u0000ij\u0001\u0000\u0000\u0000jk\u0006\r\u0002\u0000k\u001d\u0001"+
		"\u0000\u0000\u0000ln\u0003\b\u0003\u0000ml\u0001\u0000\u0000\u0000no\u0001"+
		"\u0000\u0000\u0000om\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000"+
		"p\u001f\u0001\u0000\u0000\u0000qr\u0007\b\u0000\u0000r!\u0001\u0000\u0000"+
		"\u0000st\u0003\u0004\u0001\u0000tu\u0001\u0000\u0000\u0000uv\u0006\u0010"+
		"\u0002\u0000vw\u0006\u0010\u0003\u0000w#\u0001\u0000\u0000\u0000\n\u0000"+
		"\u0001%)-6?_fo\u0004\u0002\u0000\u0000\u0005\u0001\u0000\u0006\u0000\u0000"+
		"\u0004\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}