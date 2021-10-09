import Summary from "../components/summary";
import Deployed from "../components/deployed";
import Footer from "../components/footer";
import Receivable from "../components/receivable";
import CTA from "../components/cta";

export default function Overview() {
  return (
    <div>
        <Summary />
        <CTA />
        <Deployed />
        <Receivable />
        <Footer />
    </div>
  );
}