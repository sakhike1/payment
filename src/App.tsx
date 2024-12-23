import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

import StatsSection from "./components/StatsSection";
import PaymentReceiver from "./components/PaymentReceiver";
import HappyClients from "./components/HappyClients";
import SubscribeSection from "./components/SubscribeSection";
import FooterSection from "./components/FooterSection";
const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />

            <StatsSection />
            <PaymentReceiver />
            <HappyClients />
            <SubscribeSection />
            <FooterSection />
            {/* Add other components here */}
        </div>
    );
};

export default App;
