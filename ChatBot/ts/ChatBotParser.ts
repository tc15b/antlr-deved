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
	public static readonly D = 7;
	public static readonly WS = 8;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_command = 1;
	public static readonly RULE_ping_command = 2;
	public static readonly RULE_random_command = 3;
	public static readonly RULE_roll_command = 4;
	public static readonly RULE_roll_die = 5;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'-'", null, 
                                                            "'PING'", "'RANDOM'", 
                                                            "'ROLL'", "'d'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "DASH", "NUMBER", 
                                                             "PING", "RANDOM", 
                                                             "ROLL", "D", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "command", "ping_command", "random_command", "roll_command", "roll_die",
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
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.command();
				this.state = 16;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 13;
					this.match(ChatBotParser.NEWLINE);
					}
					}
					this.state = 18;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0));
			this.state = 23;
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
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 25;
				this.ping_command();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 26;
				this.random_command();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 27;
				this.roll_command();
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
			this.state = 30;
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
			this.state = 32;
			this.match(ChatBotParser.RANDOM);
			this.state = 35;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 33;
				localctx._from_ = this.match(ChatBotParser.NUMBER);
				this.state = 34;
				this.match(ChatBotParser.DASH);
				}
				break;
			}
			this.state = 37;
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
			this.state = 39;
			this.match(ChatBotParser.ROLL);
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				this.roll_die();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===3 || _la===7);
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
		this.enterRule(localctx, 10, ChatBotParser.RULE_roll_die);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 45;
				localctx._die_count = this.match(ChatBotParser.NUMBER);
				}
			}

			this.state = 48;
			this.match(ChatBotParser.D);
			this.state = 49;
			localctx._sides = this.match(ChatBotParser.NUMBER);
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

	public static readonly _serializedATN: number[] = [4,1,8,52,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,5,0,15,8,0,10,0,12,0,18,9,0,
	4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,1,1,1,1,3,1,29,8,1,1,2,1,2,1,3,1,3,
	1,3,3,3,36,8,3,1,3,1,3,1,4,1,4,4,4,42,8,4,11,4,12,4,43,1,5,3,5,47,8,5,1,
	5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,52,0,19,1,0,0,0,2,28,1,0,0,0,4,30,
	1,0,0,0,6,32,1,0,0,0,8,39,1,0,0,0,10,46,1,0,0,0,12,16,3,2,1,0,13,15,5,1,
	0,0,14,13,1,0,0,0,15,18,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,20,1,0,0,
	0,18,16,1,0,0,0,19,12,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,
	22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,29,3,4,2,0,26,29,3,6,3,0,27,
	29,3,8,4,0,28,25,1,0,0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,3,1,0,0,0,30,31,
	5,4,0,0,31,5,1,0,0,0,32,35,5,5,0,0,33,34,5,3,0,0,34,36,5,2,0,0,35,33,1,
	0,0,0,35,36,1,0,0,0,36,37,1,0,0,0,37,38,5,3,0,0,38,7,1,0,0,0,39,41,5,6,
	0,0,40,42,3,10,5,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,
	0,0,44,9,1,0,0,0,45,47,5,3,0,0,46,45,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,
	0,48,49,5,7,0,0,49,50,5,3,0,0,50,11,1,0,0,0,6,16,21,28,35,43,46];

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
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(ChatBotParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(ChatBotParser.NUMBER, i);
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
