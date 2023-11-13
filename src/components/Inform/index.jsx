import { Inform, Bio } from "./style-inform";

const InformProfile = ({userData}) => {
    if(!userData) {
        return null;
    };

    return (
        <Inform>
            <img src={userData.avatar_url}/>
            <Bio>
                <h2> <strong>{userData.name}</strong> </h2>
                <p>{userData.bio}</p>
            </Bio>
        </Inform>
    );
};

export default InformProfile;