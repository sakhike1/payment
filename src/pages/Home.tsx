import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import PaymentReceiver from "../components/PaymentReceiver";
import HappyClients from "../components/HappyClients";
import SubscribeSection from "../components/SubscribeSection";

const Home = () => {
    return (
        <>
            <section>
                <HeroSection />
            </section>
            <section className="">
                <StatsSection />
            </section>
            <section className="">
                <PaymentReceiver />
            </section>
            <section className="">
                <HappyClients />
            </section>
            <section className="">
                <SubscribeSection />
            </section>

            
        </>
    );
};

export default Home;
