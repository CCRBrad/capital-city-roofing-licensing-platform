import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RoofingFranchiseAlternative: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/the-model', { replace: true });
    }, [navigate]);
    return null;
};

export default RoofingFranchiseAlternative;
