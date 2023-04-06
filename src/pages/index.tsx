import Data from "~/components/data";
import Header from "~/components/header";
import Slider from "~/components/slider";
import Main from "~/layout/main";

export default function Home() {
    return (
        <>
            <Main>
                <Header />

                <Slider/>

                <Data/>

                <div className="w-40"/>
                
            </Main>

        </>
    )
}
