// Generated from ChatBotParser.g4 by ANTLR 4.13.0
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ChatBotParser}.
 */
public interface ChatBotParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ChatBotParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(ChatBotParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link ChatBotParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(ChatBotParser.FileContext ctx);

	/**
	 * Enter a parse tree produced by {@link ChatBotParser#command}.
	 * @param ctx the parse tree
	 */
	void enterCommand(ChatBotParser.CommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link ChatBotParser#command}.
	 * @param ctx the parse tree
	 */
	void exitCommand(ChatBotParser.CommandContext ctx);

	/**
	 * Enter a parse tree produced by {@link ChatBotParser#ping_command}.
	 * @param ctx the parse tree
	 */
	void enterPing_command(ChatBotParser.Ping_commandContext ctx);
	/**
	 * Exit a parse tree produced by {@link ChatBotParser#ping_command}.
	 * @param ctx the parse tree
	 */
	void exitPing_command(ChatBotParser.Ping_commandContext ctx);

	/**
	 * Enter a parse tree produced by {@link ChatBotParser#random_command}.
	 * @param ctx the parse tree
	 */
	void enterRandom_command(ChatBotParser.Random_commandContext ctx);
	/**
	 * Exit a parse tree produced by {@link ChatBotParser#random_command}.
	 * @param ctx the parse tree
	 */
	void exitRandom_command(ChatBotParser.Random_commandContext ctx);
}