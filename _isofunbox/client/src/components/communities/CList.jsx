import React, {useState, useEffect} from 'react';
import '../../styles/CommunitiesIndex.css'
import { useOutlet, useOutletContext } from 'react-router';

function CList() {

    const {user} = useOutletContext();
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
            try {

            }
            catch (error) {
                console.error('Error fetching communities:', error);
            }
        };

        fetchCommunities();
    }, []);

    return (
        <div className='community-list'>
            
        </div>
    
    );
}

export default CList;