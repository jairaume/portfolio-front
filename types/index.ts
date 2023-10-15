export interface Availability {
    availability: string | null
    id: number
}

export interface Experience {
        company: string | null
        description_en: string | null
        description_fr: string | null
        end_date: string | null
        id: number
        position_en: string
        position_fr: string
        start_date: string
}
export interface Project {
    collaboration_type: Collaboration_Type | null
    color: string | null
    company: string
    created_at: string
    description_en: string | null
    description_fr: string | null
    id: number
    link: string | null
    slider_images: string[] | null
    slug: string
    status: Status | null
    technologies: string[] | null
    thumbnail_image: string | null
    title: string
    type: Project_Type | null
}

export interface Skill {
    description_en: string | null
    description_fr: string | null
    id: number
    skill_name_en: string | null
    skill_name_fr: string | null
}

export interface Featured_Experiences {
    experience: Experience | null
    id: number
}

export interface Featured_Projects {
    id: number
    project: Project | null
}

export interface Featured_Skills {
    id: number
    skill: Skill | null
}

export interface Hobby {
    description_en: string | null
    description_fr: string | null
    id: number
    image: string | null
}

export enum Collaboration_Type {
    "work" = "work",
    "school" = "school",
    "freelance" = "freelance",
}

export enum Status {
    "published" = "published",
    "draft" = "draft",
}

export enum Project_Type {
    "web" = "web",
    "mobile" = "mobile",
    "software" = "software",
    "design" = "design",
    "consulting" = "consulting",
}