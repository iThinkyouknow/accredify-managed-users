
const dateTimeOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
} satisfies Intl.DateTimeFormatOptions;


export const formatUTCDateTimeStrToddMMMyyyy = (dateStr?: string | null) => {
    if (!dateStr) return '';
    const dateTimeFormatter = new Intl.DateTimeFormat(undefined, dateTimeOptions);
    return dateTimeFormatter.format(new Date(dateStr));
}

export const navigateToOrigin = () => navigateTo('/');

export const makeInitials = (name: string) => {
    return name.split(' ').slice(0, 2).map(word => word.at(0)?.toUpperCase()).join('');
}

export const isCurrentPath = (currentPath: string, destinationPath: string) => {
    return currentPath === destinationPath;
};
