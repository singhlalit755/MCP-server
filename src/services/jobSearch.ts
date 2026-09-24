export interface Job {
    title: string;
    company: string;
    location: string;
    remote: boolean;
    experience: string;
    skills: string[];
    url: string;
}

export interface JobSearchParams {
    query: string;
    location?: string | undefined;
    remote?: boolean | undefined;
    experience?: string | undefined;
}

const jobs: Job[] = [
    {
        title: "Senior Backend Engineer",
        company: "Example AI",
        location: "Remote - India",
        remote: true,
        experience: "Senior",
        skills: ["Node.js", "TypeScript", "AWS"],
        url: "https://example.com/jobs/1",
    },
    {
        title: "Forward Deployed Engineer",
        company: "Example AI Labs",
        location: "Remote - India",
        remote: true,
        experience: "Senior",
        skills: ["TypeScript", "Node.js", "AWS", "AI"],
        url: "https://example.com/jobs/2",
    },
];

export function searchJobs(params: JobSearchParams): Job[] {
    const {
        query,
        location,
        remote,
        experience,
    } = params;

    const normalizedQuery = query.toLowerCase();

    return jobs.filter((job) => {
        const queryMatch =
            job.title.toLowerCase().includes(normalizedQuery) ||
            job.company.toLowerCase().includes(normalizedQuery) ||
            job.skills.some((skill) =>
                skill.toLowerCase().includes(normalizedQuery)
            );

        const locationMatch = location
            ? job.location.toLowerCase().includes(location.toLowerCase())
            : true;

        const remoteMatch =
            remote !== undefined ? job.remote === remote : true;

        const experienceMatch = experience
            ? job.experience.toLowerCase() === experience.toLowerCase()
            : true;

        return (
            queryMatch &&
            locationMatch &&
            remoteMatch &&
            experienceMatch
        );
    });
}