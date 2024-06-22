import { useAxios } from "./useAxios"
import { EnkiGroup } from "../Api/EnkiGroupAPI"
import { TaskItem } from "../Types/TaskItem"

export const useGetEnkiGroupData = (url: string) => {
    const { data, isLoading, error } = useAxios<TaskItem[]>(EnkiGroup, 'get', url)
    return { data, isLoading, error}
}