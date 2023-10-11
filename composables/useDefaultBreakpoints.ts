export const useDefaultBreakpoints = () => {
    const breakpoints = useBreakpoints({
        xs: 480,
        s: 738,
        m: 1100,
        l: 1800,
    });

    return {breakpoints}
}