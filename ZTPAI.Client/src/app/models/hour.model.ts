export interface Hour{
    id: string,
    idTask: string,
    idWorker: string,
    minutesTaken: number,
    dateAdded?: Date,
    priority: number,
    taskName?: string,
    workerName?: string
}