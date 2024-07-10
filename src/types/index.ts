export type CourseData = {
    thumb?: string
    titleLanguages?: object
    tags?: string[]
    time?: number
}

export type CourseDataInfo = CourseData & {
    id: string
}
