export const useDefaultBreakpoints = () => {
    const breakpoints = useBreakpoints({
        xs: 480,
        s: 738,
        m: 1200,
        l: 1800,
    });

    return {breakpoints}
}