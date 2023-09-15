// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./ChatBotParser";
import { CommandContext } from "./ChatBotParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ChatBotParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default interface ChatBotParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ChatBotParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile(ctx: FileContext): Result;

	/**
	 * Visit a parse tree produced by `ChatBotParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand(ctx: CommandContext): Result;
}
