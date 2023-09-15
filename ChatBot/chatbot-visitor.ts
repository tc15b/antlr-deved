import { CommandContext, FileContext, } from "../ChatBot/ts/ChatBotParser";
import ChatBotParserBaseVisitor from "../ChatBot/ts/ChatBotParserBaseVisitor";

export default class extends ChatBotParserBaseVisitor<string, string> {
	override visitFile = (ctx: FileContext) => {
		return (ctx.children ?? [])
			.slice(0, -1)
			.map((node) => this.visit(node))
			.reduce((acc, val) => acc + "," + val);
	};

	override visitCommand = (ctx: CommandContext) => 'PONG';

	override defaultResult = () => '';
}
