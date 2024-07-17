import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import ProfileContent from "./ProfileContent";

const Profile = () => {
    return ( 
        <Profileconatiner>
            <Profilewrapper>
                <ProfileImage />
                <ProfileContent />
            </Profilewrapper>
        </Profileconatiner>
     );
}
 
export default Profile;

const Profileconatiner = styled.div`
    width: 100%;
    border-bottom: 3px solid black; 
`

const Profilewrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    gap: 5vw;

    @media all and (min-width: 768px) and (max-width: 1023px) {
        margin: 30px auto;
        max-width: 700px;
    }

    @media all and (max-width: 767px) {
        margin : 15px;
    }
`