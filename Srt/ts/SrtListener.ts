// Generated from Srt.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./SrtParser";
import { StatementContext } from "./SrtParser";
import { TimerangeContext } from "./SrtParser";
import { TimestampContext } from "./SrtParser";
import { LineContext } from "./SrtParser";
import { Any_numberContext } from "./SrtParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SrtParser`.
 */
export default interface SrtListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SrtParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile(ctx: FileContext): void;
	/**
	 * Exit a parse tree produced by `SrtParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile(ctx: FileContext): void;

	/**
	 * Enter a parse tree produced by `SrtParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement(ctx: StatementContext): void;
	/**
	 * Exit a parse tree produced by `SrtParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement(ctx: StatementContext): void;

	/**
	 * Enter a parse tree produced by `SrtParser.timerange`.
	 * @param ctx the parse tree
	 */
	enterTimerange(ctx: TimerangeContext): void;
	/**
	 * Exit a parse tree produced by `SrtParser.timerange`.
	 * @param ctx the parse tree
	 */
	exitTimerange(ctx: TimerangeContext): void;

	/**
	 * Enter a parse tree produced by `SrtParser.timestamp`.
	 * @param ctx the parse tree
	 */
	enterTimestamp(ctx: TimestampContext): void;
	/**
	 * Exit a parse tree produced by `SrtParser.timestamp`.
	 * @param ctx the parse tree
	 */
	exitTimestamp(ctx: TimestampContext): void;

	/**
	 * Enter a parse tree produced by `SrtParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine(ctx: LineContext): void;
	/**
	 * Exit a parse tree produced by `SrtParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine(ctx: LineContext): void;

	/**
	 * Enter a parse tree produced by `SrtParser.any_number`.
	 * @param ctx the parse tree
	 */
	enterAny_number(ctx: Any_numberContext): void;
	/**
	 * Exit a parse tree produced by `SrtParser.any_number`.
	 * @param ctx the parse tree
	 */
	exitAny_number(ctx: Any_numberContext): void;
}

