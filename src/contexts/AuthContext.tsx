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
}

interface AuthContextType {
    user: User | null;
    login: (role: UserRole) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const mockUsers: Record<UserRole, User> = {
    prospect: {
        id: '1',
        role: 'prospect',
        name: 'John Prospect',
        email: 'john@example.com',
    },
    licensee: {
        id: '2',
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
        name: 'Sarah Williams',
        email: 'sarah@ccratlanta.com',
        market: 'Atlanta, GA',
        certifications: ['Certified Sales Rep'],
        complianceStatus: 'yellow',
        universityProgress: 100,
    },
    admin: {
        id: '4',
        role: 'admin',
        name: 'Brad Strawbridge',
        email: 'brad@capitalcityroofing.net',
        market: 'National',
        certifications: ['GAF Certified Plus', 'CertainTeed SELECT'],
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
