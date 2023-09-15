// Generated from Srt.g4 by ANTLR 4.13.0

import { ParseTreeVisitor } from "antlr4";
import type {
	FileContext,
	StatementContext,
	TimerangeContext,
	TimestampContext,
	LineContext,
	Any_numberContext,
} from "./SrtParser";
import SrtVisitor from "./SrtVisitor";

export default class SrtBaseVisitor<Result, DefaultType = null> extends ParseTreeVisitor<Result> implements SrtVisitor<Result | DefaultType> {
	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitFile = (ctx: FileContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitStatement = (ctx: StatementContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitTimerange = (ctx: TimerangeContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitTimestamp = (ctx: TimestampContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitLine = (ctx: LineContext) => this.visitChildren(ctx); 

	/**
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
		visitAny_number = (ctx: Any_numberContext) => this.visitChildren(ctx); 
}