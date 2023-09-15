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
		NEWLINE=1, DASH=2, NUMBER=3, PING=4, RANDOM=5, ROLL=6, REVERSE=7, WS=8, 
		TEXT=9, D=10, ROLL_NEWLINE=11;
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
			"NL", "EOI", "DIGIT", "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", 
			"ROLL", "REVERSE", "WS", "TEXT", "D", "ROLL_NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'-'", null, "'PING'", "'RANDOM'", "'ROLL'", "'REVERSE'", 
			null, null, "'d'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "DASH", "NUMBER", "PING", "RANDOM", "ROLL", "REVERSE", 
			"WS", "TEXT", "D", "ROLL_NEWLINE"
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
		"\u0004\u0000\u000bg\u0006\uffff\uffff\u0006\uffff\uffff\u0002\u0000\u0007"+
		"\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007"+
		"\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007"+
		"\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n"+
		"\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0001"+
		"\u0000\u0003\u0000 \b\u0000\u0001\u0000\u0001\u0000\u0003\u0000$\b\u0000"+
		"\u0001\u0001\u0001\u0001\u0003\u0001(\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0004\u0003-\b\u0003\u000b\u0003\f\u0003.\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0004\u00056\b\u0005\u000b"+
		"\u0005\f\u00057\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0004\nV\b\n\u000b\n\f\nW\u0001\n\u0001\n\u0001\u000b\u0004\u000b]"+
		"\b\u000b\u000b\u000b\f\u000b^\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001^\u0000\u000e\u0002\u0000\u0004\u0000\u0006\u0000"+
		"\b\u0001\n\u0002\f\u0003\u000e\u0004\u0010\u0005\u0012\u0006\u0014\u0007"+
		"\u0016\b\u0018\t\u001a\n\u001c\u000b\u0002\u0000\u0001\u000f\u0001\u0000"+
		"09\u0002\u0000PPpp\u0002\u0000IIii\u0002\u0000NNnn\u0002\u0000GGgg\u0002"+
		"\u0000RRrr\u0002\u0000AAaa\u0002\u0000DDdd\u0002\u0000OOoo\u0002\u0000"+
		"MMmm\u0002\u0000LLll\u0002\u0000EEee\u0002\u0000VVvv\u0002\u0000SSss\u0003"+
		"\u0000\t\n\r\r  i\u0000\b\u0001\u0000\u0000\u0000\u0000\n\u0001\u0000"+
		"\u0000\u0000\u0000\f\u0001\u0000\u0000\u0000\u0000\u000e\u0001\u0000\u0000"+
		"\u0000\u0000\u0010\u0001\u0000\u0000\u0000\u0000\u0012\u0001\u0000\u0000"+
		"\u0000\u0000\u0014\u0001\u0000\u0000\u0000\u0000\u0016\u0001\u0000\u0000"+
		"\u0000\u0000\u0018\u0001\u0000\u0000\u0000\u0001\u001a\u0001\u0000\u0000"+
		"\u0000\u0001\u001c\u0001\u0000\u0000\u0000\u0002#\u0001\u0000\u0000\u0000"+
		"\u0004\'\u0001\u0000\u0000\u0000\u0006)\u0001\u0000\u0000\u0000\b,\u0001"+
		"\u0000\u0000\u0000\n2\u0001\u0000\u0000\u0000\f5\u0001\u0000\u0000\u0000"+
		"\u000e9\u0001\u0000\u0000\u0000\u0010>\u0001\u0000\u0000\u0000\u0012E"+
		"\u0001\u0000\u0000\u0000\u0014L\u0001\u0000\u0000\u0000\u0016U\u0001\u0000"+
		"\u0000\u0000\u0018\\\u0001\u0000\u0000\u0000\u001a`\u0001\u0000\u0000"+
		"\u0000\u001cb\u0001\u0000\u0000\u0000\u001e \u0005\r\u0000\u0000\u001f"+
		"\u001e\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 !\u0001"+
		"\u0000\u0000\u0000!$\u0005\n\u0000\u0000\"$\u0005\r\u0000\u0000#\u001f"+
		"\u0001\u0000\u0000\u0000#\"\u0001\u0000\u0000\u0000$\u0003\u0001\u0000"+
		"\u0000\u0000%(\u0003\u0002\u0000\u0000&(\u0005\u0000\u0000\u0001\'%\u0001"+
		"\u0000\u0000\u0000\'&\u0001\u0000\u0000\u0000(\u0005\u0001\u0000\u0000"+
		"\u0000)*\u0007\u0000\u0000\u0000*\u0007\u0001\u0000\u0000\u0000+-\u0003"+
		"\u0002\u0000\u0000,+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000"+
		".,\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000"+
		"\u000001\u0006\u0003\u0000\u00001\t\u0001\u0000\u0000\u000023\u0005-\u0000"+
		"\u00003\u000b\u0001\u0000\u0000\u000046\u0003\u0006\u0002\u000054\u0001"+
		"\u0000\u0000\u000067\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u0000"+
		"78\u0001\u0000\u0000\u00008\r\u0001\u0000\u0000\u00009:\u0007\u0001\u0000"+
		"\u0000:;\u0007\u0002\u0000\u0000;<\u0007\u0003\u0000\u0000<=\u0007\u0004"+
		"\u0000\u0000=\u000f\u0001\u0000\u0000\u0000>?\u0007\u0005\u0000\u0000"+
		"?@\u0007\u0006\u0000\u0000@A\u0007\u0003\u0000\u0000AB\u0007\u0007\u0000"+
		"\u0000BC\u0007\b\u0000\u0000CD\u0007\t\u0000\u0000D\u0011\u0001\u0000"+
		"\u0000\u0000EF\u0007\u0005\u0000\u0000FG\u0007\b\u0000\u0000GH\u0007\n"+
		"\u0000\u0000HI\u0007\n\u0000\u0000IJ\u0001\u0000\u0000\u0000JK\u0006\b"+
		"\u0001\u0000K\u0013\u0001\u0000\u0000\u0000LM\u0007\u0005\u0000\u0000"+
		"MN\u0007\u000b\u0000\u0000NO\u0007\f\u0000\u0000OP\u0007\u000b\u0000\u0000"+
		"PQ\u0007\u0005\u0000\u0000QR\u0007\r\u0000\u0000RS\u0007\u000b\u0000\u0000"+
		"S\u0015\u0001\u0000\u0000\u0000TV\u0007\u000e\u0000\u0000UT\u0001\u0000"+
		"\u0000\u0000VW\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001"+
		"\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000YZ\u0006\n\u0002\u0000Z\u0017"+
		"\u0001\u0000\u0000\u0000[]\t\u0000\u0000\u0000\\[\u0001\u0000\u0000\u0000"+
		"]^\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000"+
		"\u0000_\u0019\u0001\u0000\u0000\u0000`a\u0007\u0007\u0000\u0000a\u001b"+
		"\u0001\u0000\u0000\u0000bc\u0003\u0004\u0001\u0000cd\u0001\u0000\u0000"+
		"\u0000de\u0006\r\u0002\u0000ef\u0006\r\u0003\u0000f\u001d\u0001\u0000"+
		"\u0000\u0000\t\u0000\u0001\u001f#\'.7W^\u0004\u0002\u0000\u0000\u0005"+
		"\u0001\u0000\u0006\u0000\u0000\u0004\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}