export const useDownloadResume = () => {
    const supabase = useSupabaseClient()
    const {public:{supabaseUrl}} = useRuntimeConfig()
    const { isMobile } = useDevice();

    async function downloadResume() {
        if (!isMobile) {
            const {data, error} = await supabase
                .storage
                .from('public')
                .download('images/resume/CV_2023.pdf')
            if (error) console.error(error)
            const blob = new Blob([data as BlobPart], {type: 'application/pdf'})
            const url = window.URL.createObjectURL(blob)
            return window.open(url)
        }
        else {
            const url = supabaseUrl + '/storage/v1/object/public/images/resume/CV_2023.pdf'
            return window.open(url, '_blank')
        }
    }

    return { downloadResume }
}