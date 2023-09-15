// Generated from ChatBotParser.g4 by ANTLR 4.13.0
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link ChatBotParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface ChatBotParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link ChatBotParser#file}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFile(ChatBotParser.FileContext ctx);

	/**
	 * Visit a parse tree produced by {@link ChatBotParser#command}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCommand(ChatBotParser.CommandContext ctx);

	/**
	 * Visit a parse tree produced by {@link ChatBotParser#ping_command}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPing_command(ChatBotParser.Ping_commandContext ctx);

	/**
	 * Visit a parse tree produced by {@link ChatBotParser#random_command}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRandom_command(ChatBotParser.Random_commandContext ctx);

	/**
	 * Visit a parse tree produced by {@link ChatBotParser#roll_command}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRoll_command(ChatBotParser.Roll_commandContext ctx);

	/**
	 * Visit a parse tree produced by {@link ChatBotParser#reverse_command}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReverse_command(ChatBotParser.Reverse_commandContext ctx);

	/**
	 * Visit a parse tree produced by {@link ChatBotParser#roll_die}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRoll_die(ChatBotParser.Roll_dieContext ctx);
}