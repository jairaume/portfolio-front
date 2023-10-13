export const useDownloadResume = () => {
    const supabase = useSupabaseClient()
    async function downloadResume(){
        const { data, error } = await supabase
            .storage
            .from('public')
            .download('images/resume/CV_2023.pdf')
        if(error) console.error(error)
        const blob = new Blob([data as BlobPart], {type: 'application/pdf'})
        const url = window.URL.createObjectURL(blob)
        return window.open(url)
    }

    return { downloadResume }
}