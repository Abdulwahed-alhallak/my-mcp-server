import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server(
  {
    name: "hello-mcp-server",
    version: "1.0.0",
  },
  {
    "ping": async () => {
      return { content: [{ type: "text", text: "pong 🏓" }] };
    },
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
