// Generated from ChatBotParser.g4 by ANTLR 4.13.0
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ChatBotParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.0", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NEWLINE=1, DASH=2, NUMBER=3, PING=4, RANDOM=5, ROLL=6, D=7, WS=8;
	public static final int
		RULE_file = 0, RULE_command = 1, RULE_ping_command = 2, RULE_random_command = 3, 
		RULE_roll_command = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "command", "ping_command", "random_command", "roll_command"
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

	@Override
	public String getGrammarFileName() { return "ChatBotParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ChatBotParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ChatBotParser.EOF, 0); }
		public List<CommandContext> command() {
			return getRuleContexts(CommandContext.class);
		}
		public CommandContext command(int i) {
			return getRuleContext(CommandContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(ChatBotParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ChatBotParser.NEWLINE, i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).enterFile(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).exitFile(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ChatBotParserVisitor ) return ((ChatBotParserVisitor<? extends T>)visitor).visitFile(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(10);
				command();
				setState(14);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(11);
					match(NEWLINE);
					}
					}
					setState(16);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 112L) != 0) );
			setState(21);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommandContext extends ParserRuleContext {
		public Ping_commandContext ping_command() {
			return getRuleContext(Ping_commandContext.class,0);
		}
		public Random_commandContext random_command() {
			return getRuleContext(Random_commandContext.class,0);
		}
		public Roll_commandContext roll_command() {
			return getRuleContext(Roll_commandContext.class,0);
		}
		public CommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).enterCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).exitCommand(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ChatBotParserVisitor ) return ((ChatBotParserVisitor<? extends T>)visitor).visitCommand(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CommandContext command() throws RecognitionException {
		CommandContext _localctx = new CommandContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_command);
		try {
			setState(26);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PING:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				ping_command();
				}
				break;
			case RANDOM:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				random_command();
				}
				break;
			case ROLL:
				enterOuterAlt(_localctx, 3);
				{
				setState(25);
				roll_command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Ping_commandContext extends ParserRuleContext {
		public TerminalNode PING() { return getToken(ChatBotParser.PING, 0); }
		public Ping_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ping_command; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).enterPing_command(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).exitPing_command(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ChatBotParserVisitor ) return ((ChatBotParserVisitor<? extends T>)visitor).visitPing_command(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Ping_commandContext ping_command() throws RecognitionException {
		Ping_commandContext _localctx = new Ping_commandContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_ping_command);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(PING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Random_commandContext extends ParserRuleContext {
		public Token from;
		public Token to;
		public TerminalNode RANDOM() { return getToken(ChatBotParser.RANDOM, 0); }
		public List<TerminalNode> NUMBER() { return getTokens(ChatBotParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(ChatBotParser.NUMBER, i);
		}
		public TerminalNode DASH() { return getToken(ChatBotParser.DASH, 0); }
		public Random_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_random_command; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).enterRandom_command(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).exitRandom_command(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ChatBotParserVisitor ) return ((ChatBotParserVisitor<? extends T>)visitor).visitRandom_command(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Random_commandContext random_command() throws RecognitionException {
		Random_commandContext _localctx = new Random_commandContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_random_command);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			match(RANDOM);
			setState(33);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(31);
				((Random_commandContext)_localctx).from = match(NUMBER);
				setState(32);
				match(DASH);
				}
				break;
			}
			setState(35);
			((Random_commandContext)_localctx).to = match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Roll_commandContext extends ParserRuleContext {
		public Token die_count;
		public Token sides;
		public TerminalNode ROLL() { return getToken(ChatBotParser.ROLL, 0); }
		public List<TerminalNode> D() { return getTokens(ChatBotParser.D); }
		public TerminalNode D(int i) {
			return getToken(ChatBotParser.D, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(ChatBotParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(ChatBotParser.NUMBER, i);
		}
		public Roll_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roll_command; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).enterRoll_command(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ChatBotParserListener ) ((ChatBotParserListener)listener).exitRoll_command(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ChatBotParserVisitor ) return ((ChatBotParserVisitor<? extends T>)visitor).visitRoll_command(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Roll_commandContext roll_command() throws RecognitionException {
		Roll_commandContext _localctx = new Roll_commandContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_roll_command);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			match(ROLL);
			setState(43); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NUMBER) {
					{
					setState(38);
					((Roll_commandContext)_localctx).die_count = match(NUMBER);
					}
				}

				setState(41);
				match(D);
				setState(42);
				((Roll_commandContext)_localctx).sides = match(NUMBER);
				}
				}
				setState(45); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NUMBER || _la==D );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\b0\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0005\u0000\r\b\u0000\n\u0000\f\u0000\u0010\t\u0000"+
		"\u0004\u0000\u0012\b\u0000\u000b\u0000\f\u0000\u0013\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u001b\b\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\"\b"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0003\u0004(\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0004\u0004,\b\u0004\u000b\u0004\f\u0004"+
		"-\u0001\u0004\u0000\u0000\u0005\u0000\u0002\u0004\u0006\b\u0000\u0000"+
		"1\u0000\u0011\u0001\u0000\u0000\u0000\u0002\u001a\u0001\u0000\u0000\u0000"+
		"\u0004\u001c\u0001\u0000\u0000\u0000\u0006\u001e\u0001\u0000\u0000\u0000"+
		"\b%\u0001\u0000\u0000\u0000\n\u000e\u0003\u0002\u0001\u0000\u000b\r\u0005"+
		"\u0001\u0000\u0000\f\u000b\u0001\u0000\u0000\u0000\r\u0010\u0001\u0000"+
		"\u0000\u0000\u000e\f\u0001\u0000\u0000\u0000\u000e\u000f\u0001\u0000\u0000"+
		"\u0000\u000f\u0012\u0001\u0000\u0000\u0000\u0010\u000e\u0001\u0000\u0000"+
		"\u0000\u0011\n\u0001\u0000\u0000\u0000\u0012\u0013\u0001\u0000\u0000\u0000"+
		"\u0013\u0011\u0001\u0000\u0000\u0000\u0013\u0014\u0001\u0000\u0000\u0000"+
		"\u0014\u0015\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0000\u0000\u0001"+
		"\u0016\u0001\u0001\u0000\u0000\u0000\u0017\u001b\u0003\u0004\u0002\u0000"+
		"\u0018\u001b\u0003\u0006\u0003\u0000\u0019\u001b\u0003\b\u0004\u0000\u001a"+
		"\u0017\u0001\u0000\u0000\u0000\u001a\u0018\u0001\u0000\u0000\u0000\u001a"+
		"\u0019\u0001\u0000\u0000\u0000\u001b\u0003\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0005\u0004\u0000\u0000\u001d\u0005\u0001\u0000\u0000\u0000\u001e"+
		"!\u0005\u0005\u0000\u0000\u001f \u0005\u0003\u0000\u0000 \"\u0005\u0002"+
		"\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000\u0000"+
		"\"#\u0001\u0000\u0000\u0000#$\u0005\u0003\u0000\u0000$\u0007\u0001\u0000"+
		"\u0000\u0000%+\u0005\u0006\u0000\u0000&(\u0005\u0003\u0000\u0000\'&\u0001"+
		"\u0000\u0000\u0000\'(\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000"+
		")*\u0005\u0007\u0000\u0000*,\u0005\u0003\u0000\u0000+\'\u0001\u0000\u0000"+
		"\u0000,-\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000"+
		"\u0000\u0000.\t\u0001\u0000\u0000\u0000\u0006\u000e\u0013\u001a!\'-";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}