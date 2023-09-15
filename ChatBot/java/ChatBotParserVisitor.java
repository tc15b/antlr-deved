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
}