// Generated from Srt.g4 by ANTLR 4.13.0
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
import SrtListener from "./SrtListener.js";
import SrtVisitor from "./SrtVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SrtParser extends Parser {
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
	public static readonly RULE_file = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_timerange = 2;
	public static readonly RULE_timestamp = 3;
	public static readonly RULE_line = 4;
	public static readonly RULE_any_number = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'-->'", 
                                                            "':'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "COLON", "COMMA", 
                                                             "NAUGHTOSIXTY", 
                                                             "WHITESPACE", 
                                                             "NEWLINE", 
                                                             "EOI", "DIGITS", 
                                                             "TEXT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "statement", "timerange", "timestamp", "line", "any_number",
	];
	public get grammarFileName(): string { return "Srt.g4"; }
	public get literalNames(): (string | null)[] { return SrtParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SrtParser.symbolicNames; }
	public get ruleNames(): string[] { return SrtParser.ruleNames; }
	public get serializedATN(): number[] { return SrtParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SrtParser._ATN, SrtParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SrtParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.statement();
				this.state = 13;
				this.match(SrtParser.NEWLINE);
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===4 || _la===8);
			this.state = 19;
			this.match(SrtParser.EOF);
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SrtParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 21;
			localctx._id = this.any_number();
			this.state = 22;
			this.match(SrtParser.NEWLINE);
			this.state = 23;
			localctx._tr = this.timerange();
			this.state = 24;
			this.match(SrtParser.NEWLINE);
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 25;
				this.line();
				this.state = 26;
				this.match(SrtParser.NEWLINE);
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 828) !== 0));
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
	public timerange(): TimerangeContext {
		let localctx: TimerangeContext = new TimerangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SrtParser.RULE_timerange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			localctx._from_ = this.timestamp();
			this.state = 33;
			this.match(SrtParser.WHITESPACE);
			this.state = 34;
			this.match(SrtParser.T__0);
			this.state = 35;
			this.match(SrtParser.WHITESPACE);
			this.state = 36;
			localctx._to = this.timestamp();
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
	public timestamp(): TimestampContext {
		let localctx: TimestampContext = new TimestampContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SrtParser.RULE_timestamp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			localctx._hour = this.any_number();
			this.state = 39;
			this.match(SrtParser.COLON);
			this.state = 40;
			localctx._minute = this.match(SrtParser.NAUGHTOSIXTY);
			this.state = 41;
			this.match(SrtParser.COLON);
			this.state = 42;
			localctx._seconds = this.match(SrtParser.NAUGHTOSIXTY);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 43;
				this.match(SrtParser.COMMA);
				this.state = 44;
				localctx._miliseconds = this.any_number();
				}
			}

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
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SrtParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 52;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 4:
				case 8:
					{
					this.state = 47;
					this.any_number();
					}
					break;
				case 9:
					{
					this.state = 48;
					this.match(SrtParser.TEXT);
					}
					break;
				case 5:
					{
					this.state = 49;
					this.match(SrtParser.WHITESPACE);
					}
					break;
				case 3:
					{
					this.state = 50;
					this.match(SrtParser.COMMA);
					}
					break;
				case 2:
					{
					this.state = 51;
					this.match(SrtParser.COLON);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 828) !== 0));
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
	public any_number(): Any_numberContext {
		let localctx: Any_numberContext = new Any_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SrtParser.RULE_any_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===8)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
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

	public static readonly _serializedATN: number[] = [4,1,9,59,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,4,0,16,8,0,11,0,12,0,17,
	1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,29,8,1,11,1,12,1,30,1,2,1,2,1,2,
	1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,46,8,3,1,4,1,4,1,4,1,4,1,4,
	4,4,53,8,4,11,4,12,4,54,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,2,0,4,4,8,8,
	60,0,15,1,0,0,0,2,21,1,0,0,0,4,32,1,0,0,0,6,38,1,0,0,0,8,52,1,0,0,0,10,
	56,1,0,0,0,12,13,3,2,1,0,13,14,5,6,0,0,14,16,1,0,0,0,15,12,1,0,0,0,16,17,
	1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,19,1,0,0,0,19,20,5,0,0,1,20,1,1,
	0,0,0,21,22,3,10,5,0,22,23,5,6,0,0,23,24,3,4,2,0,24,28,5,6,0,0,25,26,3,
	8,4,0,26,27,5,6,0,0,27,29,1,0,0,0,28,25,1,0,0,0,29,30,1,0,0,0,30,28,1,0,
	0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,33,3,6,3,0,33,34,5,5,0,0,34,35,5,1,0,
	0,35,36,5,5,0,0,36,37,3,6,3,0,37,5,1,0,0,0,38,39,3,10,5,0,39,40,5,2,0,0,
	40,41,5,4,0,0,41,42,5,2,0,0,42,45,5,4,0,0,43,44,5,3,0,0,44,46,3,10,5,0,
	45,43,1,0,0,0,45,46,1,0,0,0,46,7,1,0,0,0,47,53,3,10,5,0,48,53,5,9,0,0,49,
	53,5,5,0,0,50,53,5,3,0,0,51,53,5,2,0,0,52,47,1,0,0,0,52,48,1,0,0,0,52,49,
	1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,
	0,0,0,55,9,1,0,0,0,56,57,7,0,0,0,57,11,1,0,0,0,5,17,30,45,52,54];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SrtParser.__ATN) {
			SrtParser.__ATN = new ATNDeserializer().deserialize(SrtParser._serializedATN);
		}

		return SrtParser.__ATN;
	}


	static DecisionsToDFA = SrtParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: SrtParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SrtParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(SrtParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return SrtParser.RULE_file;
	}
	public enterRule(listener: SrtListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: SrtListener): void {
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

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is SrtVisitor<Result> {
		return (visitor as SrtVisitor<Result>).visitFile !== undefined;
	}
}


export class StatementContext extends ParserRuleContext {
	public _id!: Any_numberContext;
	public _tr!: TimerangeContext;
	constructor(parser?: SrtParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(SrtParser.NEWLINE, i);
	}
	public any_number(): Any_numberContext {
		return this.getTypedRuleContext(Any_numberContext, 0) as Any_numberContext;
	}
	public timerange(): TimerangeContext {
		return this.getTypedRuleContext(TimerangeContext, 0) as TimerangeContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return SrtParser.RULE_statement;
	}
	public enterRule(listener: SrtListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: SrtListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is SrtVisitor<Result> {
		return (visitor as SrtVisitor<Result>).visitStatement !== undefined;
	}
}


export class TimerangeContext extends ParserRuleContext {
	public _from_!: TimestampContext;
	public _to!: TimestampContext;
	constructor(parser?: SrtParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHITESPACE_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.WHITESPACE);
	}
	public WHITESPACE(i: number): TerminalNode {
		return this.getToken(SrtParser.WHITESPACE, i);
	}
	public timestamp_list(): TimestampContext[] {
		return this.getTypedRuleContexts(TimestampContext) as TimestampContext[];
	}
	public timestamp(i: number): TimestampContext {
		return this.getTypedRuleContext(TimestampContext, i) as TimestampContext;
	}
    public get ruleIndex(): number {
    	return SrtParser.RULE_timerange;
	}
	public enterRule(listener: SrtListener): void {
	    if(listener.enterTimerange) {
	 		listener.enterTimerange(this);
		}
	}
	public exitRule(listener: SrtListener): void {
	    if(listener.exitTimerange) {
	 		listener.exitTimerange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitTimerange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is SrtVisitor<Result> {
		return (visitor as SrtVisitor<Result>).visitTimerange !== undefined;
	}
}


export class TimestampContext extends ParserRuleContext {
	public _hour!: Any_numberContext;
	public _minute!: Token;
	public _seconds!: Token;
	public _miliseconds!: Any_numberContext;
	constructor(parser?: SrtParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(SrtParser.COLON, i);
	}
	public any_number_list(): Any_numberContext[] {
		return this.getTypedRuleContexts(Any_numberContext) as Any_numberContext[];
	}
	public any_number(i: number): Any_numberContext {
		return this.getTypedRuleContext(Any_numberContext, i) as Any_numberContext;
	}
	public NAUGHTOSIXTY_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.NAUGHTOSIXTY);
	}
	public NAUGHTOSIXTY(i: number): TerminalNode {
		return this.getToken(SrtParser.NAUGHTOSIXTY, i);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SrtParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return SrtParser.RULE_timestamp;
	}
	public enterRule(listener: SrtListener): void {
	    if(listener.enterTimestamp) {
	 		listener.enterTimestamp(this);
		}
	}
	public exitRule(listener: SrtListener): void {
	    if(listener.exitTimestamp) {
	 		listener.exitTimestamp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitTimestamp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is SrtVisitor<Result> {
		return (visitor as SrtVisitor<Result>).visitTimestamp !== undefined;
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: SrtParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_number_list(): Any_numberContext[] {
		return this.getTypedRuleContexts(Any_numberContext) as Any_numberContext[];
	}
	public any_number(i: number): Any_numberContext {
		return this.getTypedRuleContext(Any_numberContext, i) as Any_numberContext;
	}
	public TEXT_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.TEXT);
	}
	public TEXT(i: number): TerminalNode {
		return this.getToken(SrtParser.TEXT, i);
	}
	public WHITESPACE_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.WHITESPACE);
	}
	public WHITESPACE(i: number): TerminalNode {
		return this.getToken(SrtParser.WHITESPACE, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SrtParser.COMMA, i);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(SrtParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(SrtParser.COLON, i);
	}
    public get ruleIndex(): number {
    	return SrtParser.RULE_line;
	}
	public enterRule(listener: SrtListener): void {
	    if(listener.enterLine) {
	 		listener.enterLine(this);
		}
	}
	public exitRule(listener: SrtListener): void {
	    if(listener.exitLine) {
	 		listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is SrtVisitor<Result> {
		return (visitor as SrtVisitor<Result>).visitLine !== undefined;
	}
}


export class Any_numberContext extends ParserRuleContext {
	constructor(parser?: SrtParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIGITS(): TerminalNode {
		return this.getToken(SrtParser.DIGITS, 0);
	}
	public NAUGHTOSIXTY(): TerminalNode {
		return this.getToken(SrtParser.NAUGHTOSIXTY, 0);
	}
    public get ruleIndex(): number {
    	return SrtParser.RULE_any_number;
	}
	public enterRule(listener: SrtListener): void {
	    if(listener.enterAny_number) {
	 		listener.enterAny_number(this);
		}
	}
	public exitRule(listener: SrtListener): void {
	    if(listener.exitAny_number) {
	 		listener.exitAny_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (this.IsTypedVisitor(visitor)) {
			return visitor.visitAny_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}

	private IsTypedVisitor<Result>(visitor: ParseTreeVisitor<Result>) : visitor is SrtVisitor<Result> {
		return (visitor as SrtVisitor<Result>).visitAny_number !== undefined;
	}
}
