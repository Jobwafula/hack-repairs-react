import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import SellWithusForm from "@/components/sell-with-us/SellWithUsForm";
import SEO from "@/components/seo/SEO";



const Sell: React.FC = () => {
  return(
  <div>
    
    <SEO
        title="Sell - HackRepairs"
        description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
        name="HackRepairs."
        type="website"
        url="https://hackrepairs.co.ke/sell-with-us/sell"
        metaKeywords="sell,hack repairs,phone accessories"
        image="/hack-repairs.jpg"
      />
    <Navbar />
    <Breadcrumbs />
    <SellWithusForm />
    <Footer />
  </div>
)
  
};
export default Sell;