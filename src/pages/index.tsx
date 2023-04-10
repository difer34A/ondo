import Footer from "~/components/Footer";
import Data from "~/components/data";
import Header from "~/components/header";
import Slider from "~/components/slider";
import ZadgaiData from "~/components/zadgaiData";
import Main from "~/layout/main";

export default function Home() {
    return (
        <>
            <Main>
                <Header />

                <Slider/>

                <Data/>

                <ZadgaiData/>
                
                <div className="w-40"/>
                
                <Footer/>
            </Main>

        </>
    )
}
