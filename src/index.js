import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { searchJobs } from "./services/jobSearch.js";
const server = new McpServer({
    name: "job-intelligence-mcp",
    version: "1.0.0",
});
server.tool("search_jobs", "Search for jobs based on role, location, remote preference, and experience level.", {
    query: z.string().describe("Job title, skills, or keywords"),
    location: z.string().optional(),
    remote: z.boolean().optional(),
    experience: z.string().optional(),
}, async ({ query, location, remote, experience }) => {
    const jobs = searchJobs({
        query,
        location,
        remote,
        experience,
    });
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify({
                    query,
                    filters: {
                        location,
                        remote,
                        experience,
                    },
                    count: jobs.length,
                    jobs,
                }, null, 2),
            },
        ],
    };
});
const transport = new StdioServerTransport();
await server.connect(transport);
//# sourceMappingURL=index.js.map