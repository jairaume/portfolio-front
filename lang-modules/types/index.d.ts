export default interface LangModule {
    common: LangCommon
}

export interface LangCommon {
    // Page names
    home: string,
    about: string,
    projects: string,
    contact: string,

    // Buttons
    more_about: string,
    more_about2: string,
    more_projects: string,
    more_projects2: string,
    other_projects: string,
    resume: string,
    contact_me: string,

    // Links
    to_projects: string,
    to_in: string,
    to_git: string,

    // Footer components
    footer: {
        cta_projects: string,
        cta_contact: string,
        scroll_top: string,
        all_rights_reserved: string,
    }

    //Collaboration type
    collab: {
        work: string,
        school: string,
        freelance: string,
    }

    // Project type
    type: {
        web: string,
        software: string,
        mobile: string,
        design: string,
        consulting: string,
    }

    error: {
        404: string,
        not_found: string,
        go_home: string,
    }

    // others
    available: string,
    today: string,
    now: string,
    see_more: string,
}

export interface LangPages {
    home: LangHome,
    about: LangAbout,
    projects: LangProjects,
    contact: LangContact,
}

export interface LangHome {
    meta_title: string,
    meta_description: string,

    job_title: string,
    catch_phrase: string,
    catch_phrase_underline: string,
    hi_im: string,
    p1_reveal: string,

    title2: string,

    title3: string,
    subtitle3: string,
}

export interface LangAbout {
    meta_title: string,
    meta_description: string,

    hi_im: string,
    p1: string,
    philosophy: string,

    title2: string,

    title3: string,

    other_stuff: string,

    p4: {
        intro: string,
        hobby1: string,
        or: string,
        hobby2: string,
        or2: string,
        hobby3: string
    },
}

export interface LangProjects {
    meta_title: string,
    meta_description: string,

    view_project: string,

    description: string,
    type: string,
    technologies: string,
}

export interface LangContact {
    meta_title: string,
    meta_description: string,

    contact_me: string,
    contact_me2: string,
    professional_socials: string,
    professional_socials2: string,
}