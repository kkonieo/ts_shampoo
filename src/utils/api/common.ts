export interface UrlLink {
    id: number;
    linkName: string;
    linkUrl: string;
    project_id: number;
}
export interface ProjectDetail {
    id: number;
    urlLink?: UrlLink[];
    title: string;
    startDate: string;
    endDate: string;
    techStack: string;
    explain: string;
    imgSrc?: string;
    gifSrc?: string;
    author_id: number;
}
