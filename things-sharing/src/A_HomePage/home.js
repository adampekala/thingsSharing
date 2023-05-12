import React from "react";
import HeroContainer from "./a_hero/heroContainer";
import Information from "./b_information/information";
import Form from "./g_form/form";
import HowTo from "./c_howTo/howTo";
import AboutUs from "./d_aboutUs/aboutUs";
import WhoWeHelp from "./e_whoWeHelp/whoWeHelp";

const HomePage = () => {
    return (
        <>
            <HeroContainer/>
            <Information/>
            <HowTo/>
            <AboutUs/>
            <WhoWeHelp/>
            <Form/>
        </>
    )
}

export default HomePage;