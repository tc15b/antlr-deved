// Generated from Srt.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./SrtParser";
import { StatementContext } from "./SrtParser";
import { TimerangeContext } from "./SrtParser";
import { TimestampContext } from "./SrtParser";
import { LineContext } from "./SrtParser";
import { Any_numberContext } from "./SrtParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SrtParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default interface SrtVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SrtParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile(ctx: FileContext): Result;

	/**
	 * Visit a parse tree produced by `SrtParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement(ctx: StatementContext): Result;

	/**
	 * Visit a parse tree produced by `SrtParser.timerange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimerange(ctx: TimerangeContext): Result;

	/**
	 * Visit a parse tree produced by `SrtParser.timestamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestamp(ctx: TimestampContext): Result;

	/**
	 * Visit a parse tree produced by `SrtParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine(ctx: LineContext): Result;

	/**
	 * Visit a parse tree produced by `SrtParser.any_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny_number(ctx: Any_numberContext): Result;
}

