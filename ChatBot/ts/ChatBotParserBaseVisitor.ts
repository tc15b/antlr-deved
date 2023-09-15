// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import { AbstractParseTreeVisitor } from "antlr4";
import type {
	FileContext,
	CommandContext,
	Ping_commandContext,
	Random_commandContext,
	Roll_commandContext,
} from "./ChatBotParser";
import ChatBotParserVisitor from "./ChatBotParserVisitor";

export default class ChatBotParserBaseVisitor<Result, DefaultType = null> extends AbstractParseTreeVisitor<Result, DefaultType> implements ChatBotParserVisitor<Result | DefaultType> {
	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitFile = (ctx: FileContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitCommand = (ctx: CommandContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitPing_command = (ctx: Ping_commandContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitRandom_command = (ctx: Random_commandContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitRoll_command = (ctx: Roll_commandContext) => this.visitChildren(ctx); 
}