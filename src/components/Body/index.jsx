import { useState } from 'react';
import { Main, AreaBackground, BackgroundImage, Container } from './style-Content';
import background from '../../assets/images/background.png';
import Inputs from '../Inputs';
import InformProfile from '../Inform';
import ListItens from '../ListItens';


const ContentBody = () => {
    const [infoData, setInfoData] = useState(null);
    return (
        <Main>
            <AreaBackground>
                <BackgroundImage src={background} alt="" />
            </AreaBackground>
            <Container>
                <Inputs setInfoData={setInfoData} />
                <InformProfile userData={infoData} />
                <ListItens itens={infoData}/>
            </Container>
        </Main>
    );
};

export default ContentBody;