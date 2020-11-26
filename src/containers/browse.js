import React, {useState, useContext, useEffect} from 'react';
import SelectProfileContainer from './profile';
import {FirebaseContext} from '../context/firebase';
import { Loading} from '../components';
import { Header } from '../components';

export default function BrowseContainer({slides}) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {firebase} =  useContext(FirebaseContext);
    const user = firebase.auth().currentUser ||  {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [profile.displayName])
    
    return profile.displayName ? (

        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody /> 
            )}

            <Header src="joker1">
                <Header.Feature>
                    <Header.FeatureCallout>Watch Joker now</Header.FeatureCallout>
                    <Header.Text>Pippo</Header.Text>
                </Header.Feature>
            </Header>
        </>
        ) : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        )
}
