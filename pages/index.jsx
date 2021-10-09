import NavBar from "../components/nav";
import Summary from "../components/summary";
import Deployed from "../components/deployed";
import Footer from "../components/footer"
import Receivable from "../components/receivable";
import CTA from "../components/cta";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  margin: auto;
  
`;

export default function Overview() {
  return (
    <div>
      <NavBar />
      <Wrapper>
        <Summary />
        <CTA />
        <Deployed />
        <Receivable />
        <Footer />
      </Wrapper>
    </div>
  );
}
