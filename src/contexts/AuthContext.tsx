import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'prospect' | 'licensee' | 'employee' | 'admin';
export type ComplianceStatus = 'green' | 'yellow' | 'red';

export interface User {
    id: string;
    role: UserRole;
    name: string;
    email: string;
    market?: string;
    certifications?: string[];
    complianceStatus?: ComplianceStatus;
    universityProgress?: number;
    title?: string;
    initials?: string;
}

interface AuthContextType {
    user: User | null;
    login: (role: UserRole) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Real CCR team members
export const teamMembers: User[] = [
    {
        id: '1',
        role: 'admin',
        name: 'Brad Strawbridge',
        email: 'brad@capitalcityroofing.net',
        market: 'National',
        title: 'Visionary / CEO',
        initials: 'BS',
        certifications: ['GAF Master Elite', 'CertainTeed Shingle Master Premier'],
        complianceStatus: 'green',
        universityProgress: 100,
    },
    {
        id: '2',
        role: 'admin',
        name: 'Edward Ouielie',
        email: 'edward@capitalcityroofing.net',
        market: 'National',
        title: 'Integrator / COO',
        initials: 'EO',
        certifications: [],
        complianceStatus: 'green',
        universityProgress: 100,
    },
    {
        id: '3',
        role: 'employee',
        name: 'Jason Light',
        email: 'jason@capitalcityroofing.net',
        market: 'Atlanta, GA',
        title: 'Sales & Customer Experience',
        initials: 'JL',
        certifications: ['Certified Sales Rep'],
        complianceStatus: 'green',
        universityProgress: 100,
    },
    {
        id: '4',
        role: 'employee',
        name: 'Tiffany Strawbridge',
        email: 'tiffany@capitalcityroofing.net',
        market: 'Atlanta, GA',
        title: 'Operations',
        initials: 'TS',
        certifications: [],
        complianceStatus: 'green',
        universityProgress: 100,
    },
    {
        id: '5',
        role: 'employee',
        name: 'Airus',
        email: 'admin@capitalcityroofing.net',
        market: 'National',
        title: 'Admin & Finance',
        initials: 'AI',
        certifications: [],
        complianceStatus: 'green',
        universityProgress: 100,
    },
];

// Legacy mock users for login demo — mapped to real people
export const mockUsers: Record<UserRole, User> = {
    prospect: {
        id: '100',
        role: 'prospect',
        name: 'John Prospect',
        email: 'john@example.com',
    },
    licensee: {
        id: '101',
        role: 'licensee',
        name: 'Marcus Johnson',
        email: 'marcus@ccratlanta.com',
        market: 'Atlanta, GA',
        certifications: ['Certified Owner Operator', 'Insurance Specialist'],
        complianceStatus: 'green',
        universityProgress: 85,
    },
    employee: {
        id: '3',
        role: 'employee',
        name: 'Jason Light',
        email: 'jason@capitalcityroofing.net',
        market: 'Atlanta, GA',
        title: 'Sales & Customer Experience',
        initials: 'JL',
        certifications: ['Certified Sales Rep'],
        complianceStatus: 'green',
        universityProgress: 100,
    },
    admin: {
        id: '1',
        role: 'admin',
        name: 'Brad Strawbridge',
        email: 'brad@capitalcityroofing.net',
        market: 'National',
        title: 'Visionary / CEO',
        initials: 'BS',
        certifications: ['GAF Master Elite', 'CertainTeed Shingle Master Premier'],
        complianceStatus: 'green',
        universityProgress: 100,
    }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (role: UserRole) => {
        setUser(mockUsers[role]);
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
