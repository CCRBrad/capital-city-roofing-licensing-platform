import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HowItWorks: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/the-model', { replace: true });
    }, [navigate]);
    return null;
};

export default HowItWorks;
