export type hunterCreateType = {
    name: string;
    gender: "Male" | "Female";
    power: string;
};

export type hunterUpdateType = hunterCreateType & {
    id: string | number;
};
