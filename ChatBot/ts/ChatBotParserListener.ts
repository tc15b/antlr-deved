// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./ChatBotParser";
import { CommandContext } from "./ChatBotParser";
import { Ping_commandContext } from "./ChatBotParser";
import { Random_commandContext } from "./ChatBotParser";
import { Roll_commandContext } from "./ChatBotParser";
import { Reverse_commandContext } from "./ChatBotParser";
import { Roll_dieContext } from "./ChatBotParser";


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

	/**
	 * Enter a parse tree produced by `ChatBotParser.roll_command`.
	 * @param ctx the parse tree
	 */
	enterRoll_command(ctx: Roll_commandContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.roll_command`.
	 * @param ctx the parse tree
	 */
	exitRoll_command(ctx: Roll_commandContext): void;

	/**
	 * Enter a parse tree produced by `ChatBotParser.reverse_command`.
	 * @param ctx the parse tree
	 */
	enterReverse_command(ctx: Reverse_commandContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.reverse_command`.
	 * @param ctx the parse tree
	 */
	exitReverse_command(ctx: Reverse_commandContext): void;

	/**
	 * Enter a parse tree produced by `ChatBotParser.roll_die`.
	 * @param ctx the parse tree
	 */
	enterRoll_die(ctx: Roll_dieContext): void;
	/**
	 * Exit a parse tree produced by `ChatBotParser.roll_die`.
	 * @param ctx the parse tree
	 */
	exitRoll_die(ctx: Roll_dieContext): void;
}

