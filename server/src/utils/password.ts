import bcryptjs from "bcryptjs";

export const hashPassword = (password: string): string => {
    return bcryptjs.hashSync(password, 10);
};

export const verifyPassword = (password: string, hashedPassword: string): boolean => {
    return bcryptjs.compareSync(password, hashedPassword);
}