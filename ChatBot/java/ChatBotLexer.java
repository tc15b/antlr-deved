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
		NEWLINE=1, DASH=2, NUMBER=3, PING=4, RANDOM=5, ROLL=6, REVERSE=7, D=8, 
		WS=9, TEXT=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NL", "EOI", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", 
			"ROLL", "REVERSE", "D", "WS", "TEXT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'-'", null, "'PING'", "'RANDOM'", "'ROLL'", "'REVERSE'", 
			"'d'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "ROLL", "REVERSE", 
			"D", "WS", "TEXT"
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
		"\u0004\u0000\n]\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0003\u0000\u001d\b\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000!\b\u0000\u0001\u0001\u0001\u0001\u0003"+
		"\u0001%\b\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0004\u0003*\b\u0003"+
		"\u000b\u0003\f\u0003+\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0004\u00053\b\u0005\u000b\u0005\f\u00054\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0004\u000bS\b\u000b\u000b"+
		"\u000b\f\u000bT\u0001\u000b\u0001\u000b\u0001\f\u0004\fZ\b\f\u000b\f\f"+
		"\f[\u0001[\u0000\r\u0001\u0000\u0003\u0000\u0005\u0000\u0007\u0001\t\u0002"+
		"\u000b\u0003\r\u0004\u000f\u0005\u0011\u0006\u0013\u0007\u0015\b\u0017"+
		"\t\u0019\n\u0001\u0000\u000f\u0001\u000009\u0002\u0000PPpp\u0002\u0000"+
		"IIii\u0002\u0000NNnn\u0002\u0000GGgg\u0002\u0000RRrr\u0002\u0000AAaa\u0002"+
		"\u0000DDdd\u0002\u0000OOoo\u0002\u0000MMmm\u0002\u0000LLll\u0002\u0000"+
		"EEee\u0002\u0000VVvv\u0002\u0000SSss\u0003\u0000\t\n\r\r  `\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0001 \u0001\u0000\u0000"+
		"\u0000\u0003$\u0001\u0000\u0000\u0000\u0005&\u0001\u0000\u0000\u0000\u0007"+
		")\u0001\u0000\u0000\u0000\t/\u0001\u0000\u0000\u0000\u000b2\u0001\u0000"+
		"\u0000\u0000\r6\u0001\u0000\u0000\u0000\u000f;\u0001\u0000\u0000\u0000"+
		"\u0011B\u0001\u0000\u0000\u0000\u0013G\u0001\u0000\u0000\u0000\u0015O"+
		"\u0001\u0000\u0000\u0000\u0017R\u0001\u0000\u0000\u0000\u0019Y\u0001\u0000"+
		"\u0000\u0000\u001b\u001d\u0005\r\u0000\u0000\u001c\u001b\u0001\u0000\u0000"+
		"\u0000\u001c\u001d\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000\u0000"+
		"\u0000\u001e!\u0005\n\u0000\u0000\u001f!\u0005\r\u0000\u0000 \u001c\u0001"+
		"\u0000\u0000\u0000 \u001f\u0001\u0000\u0000\u0000!\u0002\u0001\u0000\u0000"+
		"\u0000\"%\u0003\u0001\u0000\u0000#%\u0005\u0000\u0000\u0001$\"\u0001\u0000"+
		"\u0000\u0000$#\u0001\u0000\u0000\u0000%\u0004\u0001\u0000\u0000\u0000"+
		"&\'\u0007\u0000\u0000\u0000\'\u0006\u0001\u0000\u0000\u0000(*\u0003\u0001"+
		"\u0000\u0000)(\u0001\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000"+
		"-.\u0006\u0003\u0000\u0000.\b\u0001\u0000\u0000\u0000/0\u0005-\u0000\u0000"+
		"0\n\u0001\u0000\u0000\u000013\u0003\u0005\u0002\u000021\u0001\u0000\u0000"+
		"\u000034\u0001\u0000\u0000\u000042\u0001\u0000\u0000\u000045\u0001\u0000"+
		"\u0000\u00005\f\u0001\u0000\u0000\u000067\u0007\u0001\u0000\u000078\u0007"+
		"\u0002\u0000\u000089\u0007\u0003\u0000\u00009:\u0007\u0004\u0000\u0000"+
		":\u000e\u0001\u0000\u0000\u0000;<\u0007\u0005\u0000\u0000<=\u0007\u0006"+
		"\u0000\u0000=>\u0007\u0003\u0000\u0000>?\u0007\u0007\u0000\u0000?@\u0007"+
		"\b\u0000\u0000@A\u0007\t\u0000\u0000A\u0010\u0001\u0000\u0000\u0000BC"+
		"\u0007\u0005\u0000\u0000CD\u0007\b\u0000\u0000DE\u0007\n\u0000\u0000E"+
		"F\u0007\n\u0000\u0000F\u0012\u0001\u0000\u0000\u0000GH\u0007\u0005\u0000"+
		"\u0000HI\u0007\u000b\u0000\u0000IJ\u0007\f\u0000\u0000JK\u0007\u000b\u0000"+
		"\u0000KL\u0007\u0005\u0000\u0000LM\u0007\r\u0000\u0000MN\u0007\u000b\u0000"+
		"\u0000N\u0014\u0001\u0000\u0000\u0000OP\u0007\u0007\u0000\u0000P\u0016"+
		"\u0001\u0000\u0000\u0000QS\u0007\u000e\u0000\u0000RQ\u0001\u0000\u0000"+
		"\u0000ST\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000"+
		"\u0000\u0000UV\u0001\u0000\u0000\u0000VW\u0006\u000b\u0001\u0000W\u0018"+
		"\u0001\u0000\u0000\u0000XZ\t\u0000\u0000\u0000YX\u0001\u0000\u0000\u0000"+
		"Z[\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000"+
		"\u0000\\\u001a\u0001\u0000\u0000\u0000\b\u0000\u001c $+4T[\u0002\u0002"+
		"\u0000\u0000\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}