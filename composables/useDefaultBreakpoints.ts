export const useDefaultBreakpoints = () => {
    const breakpoints = useBreakpoints({
        xs: 576,
        s: 1024,
        m: 1280,
        l: 1536,
    });

    return {breakpoints}
}