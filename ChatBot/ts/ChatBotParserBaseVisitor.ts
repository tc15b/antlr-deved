// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import { AbstractParseTreeVisitor } from "antlr4";
import type {
	FileContext,
	CommandContext,
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
}