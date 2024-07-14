export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


export const getInitials = (fullName) => {
    if (!fullName) return '';
    const words = fullName.split(' ');
    let initials = '';

    words.forEach((word) => {
        initials += word.charAt(0).toUpperCase();
    });

    return initials.length <= 2 ? initials : initials.slice(0, 2);
};