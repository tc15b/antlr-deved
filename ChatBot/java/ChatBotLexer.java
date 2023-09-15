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
		NEWLINE=1, DASH=2, NUMBER=3, PING=4, RANDOM=5, ROLL=6, D=7, WS=8;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NL", "EOI", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", 
			"ROLL", "D", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'-'", null, "'PING'", "'RANDOM'", "'ROLL'", "'d'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "ROLL", "D", "WS"
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
		"\u0004\u0000\bL\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000"+
		"\u0003\u0000\u0019\b\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u001d\b"+
		"\u0000\u0001\u0001\u0001\u0001\u0003\u0001!\b\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0004\u0003&\b\u0003\u000b\u0003\f\u0003\'\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0004\u0005/\b\u0005"+
		"\u000b\u0005\f\u00050\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0004\nG\b\n\u000b\n\f\nH\u0001\n\u0001\n\u0000\u0000"+
		"\u000b\u0001\u0000\u0003\u0000\u0005\u0000\u0007\u0001\t\u0002\u000b\u0003"+
		"\r\u0004\u000f\u0005\u0011\u0006\u0013\u0007\u0015\b\u0001\u0000\f\u0001"+
		"\u000009\u0002\u0000PPpp\u0002\u0000IIii\u0002\u0000NNnn\u0002\u0000G"+
		"Ggg\u0002\u0000RRrr\u0002\u0000AAaa\u0002\u0000DDdd\u0002\u0000OOoo\u0002"+
		"\u0000MMmm\u0002\u0000LLll\u0003\u0000\t\n\r\r  N\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0001\u001c\u0001\u0000\u0000\u0000"+
		"\u0003 \u0001\u0000\u0000\u0000\u0005\"\u0001\u0000\u0000\u0000\u0007"+
		"%\u0001\u0000\u0000\u0000\t+\u0001\u0000\u0000\u0000\u000b.\u0001\u0000"+
		"\u0000\u0000\r2\u0001\u0000\u0000\u0000\u000f7\u0001\u0000\u0000\u0000"+
		"\u0011>\u0001\u0000\u0000\u0000\u0013C\u0001\u0000\u0000\u0000\u0015F"+
		"\u0001\u0000\u0000\u0000\u0017\u0019\u0005\r\u0000\u0000\u0018\u0017\u0001"+
		"\u0000\u0000\u0000\u0018\u0019\u0001\u0000\u0000\u0000\u0019\u001a\u0001"+
		"\u0000\u0000\u0000\u001a\u001d\u0005\n\u0000\u0000\u001b\u001d\u0005\r"+
		"\u0000\u0000\u001c\u0018\u0001\u0000\u0000\u0000\u001c\u001b\u0001\u0000"+
		"\u0000\u0000\u001d\u0002\u0001\u0000\u0000\u0000\u001e!\u0003\u0001\u0000"+
		"\u0000\u001f!\u0005\u0000\u0000\u0001 \u001e\u0001\u0000\u0000\u0000 "+
		"\u001f\u0001\u0000\u0000\u0000!\u0004\u0001\u0000\u0000\u0000\"#\u0007"+
		"\u0000\u0000\u0000#\u0006\u0001\u0000\u0000\u0000$&\u0003\u0001\u0000"+
		"\u0000%$\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000\'%\u0001\u0000"+
		"\u0000\u0000\'(\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)*\u0006"+
		"\u0003\u0000\u0000*\b\u0001\u0000\u0000\u0000+,\u0005-\u0000\u0000,\n"+
		"\u0001\u0000\u0000\u0000-/\u0003\u0005\u0002\u0000.-\u0001\u0000\u0000"+
		"\u0000/0\u0001\u0000\u0000\u00000.\u0001\u0000\u0000\u000001\u0001\u0000"+
		"\u0000\u00001\f\u0001\u0000\u0000\u000023\u0007\u0001\u0000\u000034\u0007"+
		"\u0002\u0000\u000045\u0007\u0003\u0000\u000056\u0007\u0004\u0000\u0000"+
		"6\u000e\u0001\u0000\u0000\u000078\u0007\u0005\u0000\u000089\u0007\u0006"+
		"\u0000\u00009:\u0007\u0003\u0000\u0000:;\u0007\u0007\u0000\u0000;<\u0007"+
		"\b\u0000\u0000<=\u0007\t\u0000\u0000=\u0010\u0001\u0000\u0000\u0000>?"+
		"\u0007\u0005\u0000\u0000?@\u0007\b\u0000\u0000@A\u0007\n\u0000\u0000A"+
		"B\u0007\n\u0000\u0000B\u0012\u0001\u0000\u0000\u0000CD\u0007\u0007\u0000"+
		"\u0000D\u0014\u0001\u0000\u0000\u0000EG\u0007\u000b\u0000\u0000FE\u0001"+
		"\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000JK\u0006\n\u0001\u0000"+
		"K\u0016\u0001\u0000\u0000\u0000\u0007\u0000\u0018\u001c \'0H\u0002\u0002"+
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