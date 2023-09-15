// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./ChatBotParser";
import { CommandContext } from "./ChatBotParser";
import { Ping_commandContext } from "./ChatBotParser";
import { Random_commandContext } from "./ChatBotParser";
import { Roll_commandContext } from "./ChatBotParser";
import { Reverse_commandContext } from "./ChatBotParser";
import { Roll_dieContext } from "./ChatBotParser";


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

	/**
	 * Visit a parse tree produced by `ChatBotParser.ping_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPing_command(ctx: Ping_commandContext): Result;

	/**
	 * Visit a parse tree produced by `ChatBotParser.random_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandom_command(ctx: Random_commandContext): Result;

	/**
	 * Visit a parse tree produced by `ChatBotParser.roll_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoll_command(ctx: Roll_commandContext): Result;

	/**
	 * Visit a parse tree produced by `ChatBotParser.reverse_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReverse_command(ctx: Reverse_commandContext): Result;

	/**
	 * Visit a parse tree produced by `ChatBotParser.roll_die`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoll_die(ctx: Roll_dieContext): Result;
}

