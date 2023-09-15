// Generated from ChatBotParser.g4 by ANTLR 4.13.0

import type { ErrorNode, ParserRuleContext, TerminalNode } from "antlr4";
import type {
	FileContext,
	CommandContext,
	Ping_commandContext,
	Random_commandContext,
	Roll_commandContext,
	Reverse_commandContext,
	Roll_dieContext,
} from "./ChatBotParser";
import ChatBotParserListener from "./ChatBotParserListener";

/**
 * This class provides an empty implementation of {@link ChatBotParserListener},
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
export default class ChatBotParserBaseListener implements ChatBotParserListener {
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
		enterCommand(ctx: CommandContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitCommand (ctx: CommandContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterPing_command(ctx: Ping_commandContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitPing_command (ctx: Ping_commandContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterRandom_command(ctx: Random_commandContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitRandom_command (ctx: Random_commandContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterRoll_command(ctx: Roll_commandContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitRoll_command (ctx: Roll_commandContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterReverse_command(ctx: Reverse_commandContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitReverse_command (ctx: Reverse_commandContext) { }

		/**
		*
		* The default implementation does nothing.
		*/
		enterRoll_die(ctx: Roll_dieContext) { }
		/**
		*
		* The default implementation does nothing.
		*/
		exitRoll_die (ctx: Roll_dieContext) { }

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
