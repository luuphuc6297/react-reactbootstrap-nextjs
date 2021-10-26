export interface Event {
    id: string;
    program: boolean;
    sessionQuestion?: string;
    sessionClaim?: string;
    sessionNotes?: string;
    role: string;
    avatar: string;
    lastName: string;
    firstName: string;
    link: string;
    time: number;
    title: string;
    createdAt?: string;
    updatedAt?: string;
}
