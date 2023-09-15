// Generated from ChatBotParser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet, ParseTreeVisitor,
} from 'antlr4';
import ChatBotParserListener from "./ChatBotParserListener.js";
import ChatBotParserVisitor from "./ChatBotParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ChatBotParser extends Parser {
	public static readonly NEWLINE = 1;
	public static readonly DASH = 2;
	public static readonly NUMBER = 3;
	public static readonly PING = 4;
	public static readonly RANDOM = 5;
	public static readonly ROLL = 6;
	public static readonly REVERSE = 7;
	public static readonly WHITESPACE = 8;
	public static readonly TEXT = 9;
	public static readonly ROLL_WS = 10;
	public static readonly ROLL_NUMBER = 11;
	public static readonly D = 12;
	public static readonly ROLL_NEWLINE = 13;
	public static readonly REVERSE_TEXT = 14;
	public static readonly REVERSE_NEWLINE = 15;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_command = 1;
	public static readonly RULE_ping_command = 2;
	public static readonly RULE_random_command = 3;
	public static readonly RULE_roll_command = 4;
	public static readonly RULE_reverse_command = 5;
	public static readonly RULE_roll_die = 6;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'-'", null, 
                                                            "'PING'", "'RANDOM'", 
                                                            "'ROLL'", "'REVERSE'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'d'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "DASH", "NUMBER", 
                                                             "PING", "RANDOM", 
                                                             "ROLL", "REVERSE", 
                                                             "WHITESPACE", 
                                                             "TEXT", "ROLL_WS", 
                                                             "ROLL_NUMBER", 
                                                             "D", "ROLL_NEWLINE", 
                                                             "REVERSE_TEXT", 
                                                             "REVERSE_NEWLINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "command", "ping_command", "random_command", "roll_command", "reverse_command", 
		"roll_die",
	];
	public get grammarFileName(): string { return "ChatBotParser.g4"; }
	public get literalNames(): (string | null)[] { return ChatBotParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ChatBotParser.symbolicNames; }
	public get ruleNames(): string[] { return ChatBotParser.ruleNames; }
	public get serializedATN(): number[] { return ChatBotParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ChatBotParser._ATN, ChatBotParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ChatBotParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 14;
				this.command();
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 15;
					this.match(ChatBotParser.NEWLINE);
					}
					}
					this.state = 20;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0));
			this.state = 25;
			this.match(ChatBotParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ChatBotParser.RULE_command);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 27;
				this.ping_command();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 28;
				this.random_command();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 29;
				this.roll_command();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 30;
				this.reverse_command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ping_command(): Ping_commandContext {
		let localctx: Ping_commandContext = new Ping_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ChatBotParser.RULE_ping_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this.match(ChatBotParser.PING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public random_command(): Random_commandContext {
		let localctx: Random_commandContext = new Random_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ChatBotParser.RULE_random_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 35;
			this.match(ChatBotParser.RANDOM);
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 36;
				localctx._from_ = this.match(ChatBotParser.NUMBER);
				this.state = 37;
				this.match(ChatBotParser.DASH);
				}
				break;
			}
			this.state = 40;
			localctx._to = this.match(ChatBotParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public roll_command(): Roll_commandContext {
		let localctx: Roll_commandContext = new Roll_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ChatBotParser.RULE_roll_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.match(ChatBotParser.ROLL);
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 43;
				this.roll_die();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===11 || _la===12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reverse_command(): Reverse_commandContext {
		let localctx: Reverse_commandContext = new Reverse_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ChatBotParser.RULE_reverse_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(ChatBotParser.REVERSE);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 49;
				this.match(ChatBotParser.REVERSE_TEXT);
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public roll_die(): Roll_dieContext {
		let localctx: Roll_dieContext = new Roll_dieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ChatBotParser.RULE_roll_die);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 54;
				localctx._die_count = this.match(ChatBotParser.ROLL_NUMBER);
				}
			}

			this.state = 57;
			this.match(ChatBotParser.D);
			this.state = 58;
			localctx._sides = this.match(ChatBotParser.ROLL_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,15,61,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,5,0,17,8,0,10,0,12,
	0,20,9,0,4,0,22,8,0,11,0,12,0,23,1,0,1,0,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,
	1,2,1,3,1,3,1,3,3,3,39,8,3,1,3,1,3,1,4,1,4,4,4,45,8,4,11,4,12,4,46,1,5,
	1,5,4,5,51,8,5,11,5,12,5,52,1,6,3,6,56,8,6,1,6,1,6,1,6,1,6,0,0,7,0,2,4,
	6,8,10,12,0,0,62,0,21,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,
	42,1,0,0,0,10,48,1,0,0,0,12,55,1,0,0,0,14,18,3,2,1,0,15,17,5,1,0,0,16,15,
	1,0,0,0,17,20,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,22,1,0,0,0,20,18,1,
	0,0,0,21,14,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,25,1,0,
	0,0,25,26,5,0,0,1,26,1,1,0,0,0,27,32,3,4,2,0,28,32,3,6,3,0,29,32,3,8,4,
	0,30,32,3,10,5,0,31,27,1,0,0,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,
	0,32,3,1,0,0,0,33,34,5,4,0,0,34,5,1,0,0,0,35,38,5,5,0,0,36,37,5,3,0,0,37,
	39,5,2,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,3,0,0,41,7,
	1,0,0,0,42,44,5,6,0,0,43,45,3,12,6,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,
	1,0,0,0,46,47,1,0,0,0,47,9,1,0,0,0,48,50,5,7,0,0,49,51,5,14,0,0,50,49,1,
	0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,11,1,0,0,0,54,56,5,11,
	0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,12,0,0,58,59,5,11,
	0,0,59,13,1,0,0,0,7,18,23,31,38,46,52,55];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChatBotParser.__ATN) {
			ChatBotParser.__ATN = new ATNDeserializer().deserialize(ChatBotParser._serializedATN);
		}

		return ChatBotParser.__ATN;
	}


	static DecisionsToDFA = ChatBotParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(ChatBotParser.EOF, 0);
	}
	public command_list(): CommandContext[] {
		return this.getTypedRuleContexts(CommandContext) as CommandContext[];
	}
	public command(i: number): CommandContext {
		return this.getTypedRuleContext(CommandContext, i) as CommandContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(ChatBotParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(ChatBotParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_file;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitFile !== undefined;
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ping_command(): Ping_commandContext {
		return this.getTypedRuleContext(Ping_commandContext, 0) as Ping_commandContext;
	}
	public random_command(): Random_commandContext {
		return this.getTypedRuleContext(Random_commandContext, 0) as Random_commandContext;
	}
	public roll_command(): Roll_commandContext {
		return this.getTypedRuleContext(Roll_commandContext, 0) as Roll_commandContext;
	}
	public reverse_command(): Reverse_commandContext {
		return this.getTypedRuleContext(Reverse_commandContext, 0) as Reverse_commandContext;
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_command;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitCommand !== undefined;
	}
}


export class Ping_commandContext extends ParserRuleContext {
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PING(): TerminalNode {
		return this.getToken(ChatBotParser.PING, 0);
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_ping_command;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterPing_command) {
	 		listener.enterPing_command(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitPing_command) {
	 		listener.exitPing_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitPing_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitPing_command !== undefined;
	}
}


export class Random_commandContext extends ParserRuleContext {
	public _from_!: Token;
	public _to!: Token;
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANDOM(): TerminalNode {
		return this.getToken(ChatBotParser.RANDOM, 0);
	}
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(ChatBotParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(ChatBotParser.NUMBER, i);
	}
	public DASH(): TerminalNode {
		return this.getToken(ChatBotParser.DASH, 0);
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_random_command;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterRandom_command) {
	 		listener.enterRandom_command(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitRandom_command) {
	 		listener.exitRandom_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitRandom_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitRandom_command !== undefined;
	}
}


export class Roll_commandContext extends ParserRuleContext {
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROLL(): TerminalNode {
		return this.getToken(ChatBotParser.ROLL, 0);
	}
	public roll_die_list(): Roll_dieContext[] {
		return this.getTypedRuleContexts(Roll_dieContext) as Roll_dieContext[];
	}
	public roll_die(i: number): Roll_dieContext {
		return this.getTypedRuleContext(Roll_dieContext, i) as Roll_dieContext;
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_roll_command;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterRoll_command) {
	 		listener.enterRoll_command(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitRoll_command) {
	 		listener.exitRoll_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitRoll_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitRoll_command !== undefined;
	}
}


export class Reverse_commandContext extends ParserRuleContext {
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REVERSE(): TerminalNode {
		return this.getToken(ChatBotParser.REVERSE, 0);
	}
	public REVERSE_TEXT_list(): TerminalNode[] {
	    	return this.getTokens(ChatBotParser.REVERSE_TEXT);
	}
	public REVERSE_TEXT(i: number): TerminalNode {
		return this.getToken(ChatBotParser.REVERSE_TEXT, i);
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_reverse_command;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterReverse_command) {
	 		listener.enterReverse_command(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitReverse_command) {
	 		listener.exitReverse_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitReverse_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitReverse_command !== undefined;
	}
}


export class Roll_dieContext extends ParserRuleContext {
	public _die_count!: Token;
	public _sides!: Token;
	constructor(parser?: ChatBotParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public D(): TerminalNode {
		return this.getToken(ChatBotParser.D, 0);
	}
	public ROLL_NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(ChatBotParser.ROLL_NUMBER);
	}
	public ROLL_NUMBER(i: number): TerminalNode {
		return this.getToken(ChatBotParser.ROLL_NUMBER, i);
	}
    public get ruleIndex(): number {
    	return ChatBotParser.RULE_roll_die;
	}
	public enterRule(listener: ChatBotParserListener): void {
	    if(listener.enterRoll_die) {
	 		listener.enterRoll_die(this);
		}
	}
	public exitRule(listener: ChatBotParserListener): void {
	    if(listener.exitRoll_die) {
	 		listener.exitRoll_die(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitRoll_die(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is ChatBotParserVisitor<Result> {
		return (visitor as ChatBotParserVisitor<Result>).visitRoll_die !== undefined;
	}
}
