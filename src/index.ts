import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "job-intelligence-mcp",
  version: "1.0.0",
});

server.tool(
  "search_jobs",
  "Search for jobs matching a keyword",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "MCP server is working! Job search will be added next.",
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();

await server.connect(transport);