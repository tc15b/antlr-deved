// Generated from Srt.g4 by ANTLR 4.13.0

import type { ErrorNode, ParserRuleContext, TerminalNode } from "antlr4";
import type {
	FileContext,
	StatementContext,
	TimerangeContext,
	TimestampContext,
	LineContext,
	Any_numberContext,
} from "./SrtParser";
import SrtListener from "./SrtListener";

/**
 * This class provides an empty implementation of {@link SrtListener},
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
export default class SrtBaseListener implements SrtListener {
		/**
		*
		* The default implementation does nothing.
		*/
		enterFile(ctx: FileContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitFile (ctx: FileContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterStatement(ctx: StatementContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitStatement (ctx: StatementContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterTimerange(ctx: TimerangeContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitTimerange (ctx: TimerangeContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterTimestamp(ctx: TimestampContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitTimestamp (ctx: TimestampContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterLine(ctx: LineContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitLine (ctx: LineContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterAny_number(ctx: Any_numberContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitAny_number (ctx: Any_numberContext) { }

	/**
	 *
	 * The default implementation does nothing.
	 */
	enterEveryRule(ctx: ParserRuleContext) { }
	/**
	 *
	 * The default implementation does nothing.
	 */
	exitEveryRule(ctx: ParserRuleContext) { }
	/**
	 *
	 * The default implementation does nothing.
	 */
	visitTerminal(node: TerminalNode) { }
	/**
	 *
	 * The default implementation does nothing.
	 */
	visitErrorNode(node: ErrorNode) { }
}
