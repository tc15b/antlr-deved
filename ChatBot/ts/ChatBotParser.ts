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
	public static readonly PING = 2;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_command = 1;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'PING'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NEWLINE", 
                                                             "PING" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "command",
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
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.command();
				this.state = 8;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 5;
					this.match(ChatBotParser.NEWLINE);
					}
					}
					this.state = 10;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===2);
			this.state = 15;
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
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

	public static readonly _serializedATN: number[] = [4,1,2,20,2,0,7,0,2,1,
	7,1,1,0,1,0,5,0,7,8,0,10,0,12,0,10,9,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,
	1,1,1,1,1,1,0,0,2,0,2,0,0,19,0,11,1,0,0,0,2,17,1,0,0,0,4,8,3,2,1,0,5,7,
	5,1,0,0,6,5,1,0,0,0,7,10,1,0,0,0,8,6,1,0,0,0,8,9,1,0,0,0,9,12,1,0,0,0,10,
	8,1,0,0,0,11,4,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,
	1,0,0,0,15,16,5,0,0,1,16,1,1,0,0,0,17,18,5,2,0,0,18,3,1,0,0,0,2,8,13];

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
	public PING(): TerminalNode {
		return this.getToken(ChatBotParser.PING, 0);
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
