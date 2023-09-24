export const useRoundedAnnotations = () => {
    const roundPaths = ()=> {
        let annotations = document.querySelectorAll('svg.rough-annotation')
        if (annotations.length > 0) {
            annotations.forEach((annotation) => {
                annotation.querySelectorAll('path').forEach((path) => {
                    path.setAttribute('stroke-linecap', 'round')
                    path.setAttribute('stroke-linejoin', 'round')
                })
            })
        }
    }
    return {roundPaths}
}