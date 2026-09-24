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
export declare function searchJobs(params: JobSearchParams): Job[];
//# sourceMappingURL=jobSearch.d.ts.map