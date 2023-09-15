// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./ChatBotParser";
import { CommandContext } from "./ChatBotParser";
import { Ping_commandContext } from "./ChatBotParser";
import { Random_commandContext } from "./ChatBotParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ChatBotParser`.
 */
export default interface ChatBotParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ChatBotParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile(ctx: FileContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile(ctx: FileContext): void;

	/**
	 * Enter a parse tree produced by `ChatBotParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand(ctx: CommandContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand(ctx: CommandContext): void;

	/**
	 * Enter a parse tree produced by `ChatBotParser.ping_command`.
	 * @param ctx the parse tree
	 */
	enterPing_command(ctx: Ping_commandContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.ping_command`.
	 * @param ctx the parse tree
	 */
	exitPing_command(ctx: Ping_commandContext): void;

	/**
	 * Enter a parse tree produced by `ChatBotParser.random_command`.
	 * @param ctx the parse tree
	 */
	enterRandom_command(ctx: Random_commandContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.random_command`.
	 * @param ctx the parse tree
	 */
	exitRandom_command(ctx: Random_commandContext): void;
}

