export const isEqual = (prevProps: any, nextProps: any) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}
