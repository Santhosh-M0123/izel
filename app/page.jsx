"use client"
import styles from "./page.module.css";
import Image from "next/image";
import logo from "@/public/images/izel.png";
import work from "@/public/images/AI_image.jpg";
import AI_service from "@/public/images/Ai_image3.jpg";
import Ai_client from "@/public/images/Ai_client.jpg";
import Ai_client2 from "@/public/images/Ai_image3.jpg";
import Ai_client3 from "@/public/images/Ai_client3.jpg";
import Ai_client4 from "@/public/images/Ai_image4.jpg";
import { FiFigma } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
// import { FaAppStoreIos } from "react-icons/fa6";
import { RiApps2Fill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

import Link from "next/link";

import { Lobster } from "next/font/google";
import { Whisper } from "next/font/google";

const script = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const whisper = Whisper({
  weight: "400",
  subsets: ["latin"],
});

const handleEmailButtonClick = () => {
  const emailAddress = 'santhoshmsanthosh.1916@gmail.com';
  const mailtoLink = `mailto:${emailAddress}`;
  window.open(mailtoLink, '_blank');
};


const handlePhoneButtonClick = () => {
  const phoneNumber = '+918838144509';
  const telLink = `tel:${phoneNumber}`;
  window.open(telLink, '_blank');
};

const handleWhatsappButtonClick = () => {
  const phoneNumber = '+918838144509';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  window.open(whatsappLink, '_blank');
};
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.hero_main}>
          <h1 style={{letterSpacing : "1px"}}>
            WE BUILD <span style={{color : "rgb(233, 91, 91)"}}>&</span> SCALE <br></br> DIGITAL PRODUCTS FOR - BUSINESS
          </h1>
        </div>
        <div className={styles.hero_about}>
          <p style={{ fontSize: "18px",color : "gray" }}>
            Digital agency with solid design and development expertise. We build
            websites, mobile apps and more....
          </p>
          {/* <button>Schedule a call</button> */}
        </div>
      </div>

      {/* image container  */}
      <section className={styles.image_container}>
        <Image
          src={work}
          width={800}
          height={400}
          style={{ objectFit: "cover", borderRadius: "20px" }}
          alt="No-image"
          className={styles.image_list}
        />
      </section>
      <section
        className={styles.quality_developers}
      >
        <div className={styles.title_quality}>
          <b>We have a expertise developers in</b>
        </div>
        <div className={script.className}>
          <div className={styles.domain_list}>
            <span style={{color :"rgb(233, 91, 91)"}}>Fullstack developement</span>
            <span>Android developement</span>
            <span>Api developement</span>
            <span>UI/UX & Graphic design</span>
          </div>
        </div>
      </section>
      {/* services  */}
      <section className={styles.services}>
        <div className={styles.title} style={{ textAlign: "center" }}>
          <h1>
            WE OFFERS THE BEST <br></br>SERVICES TO YOU
          </h1>
          {/* <p className={styles.line}></p> */}
        </div>
        <div className={styles.services_container}>
          <div className={styles.services_list}>
            {/* service 1 */}
            <div className={styles.services_list_container}>
              <div className={styles.service_title}>
                <FiFigma />
                <span>UI/UX design</span>
              </div>
              <div className={styles.service_description}>
                <span>
                  We offers best UI/UX services that makes your users love your
                  services
                </span>
              </div>
            </div>
            {/* service 2 */}
            <div className={styles.services_list_container}>
              <div className={styles.service_title}>
                <FaPaintBrush />
                <span>Graphic design</span>
              </div>
              <div className={styles.service_description}>
                <span>
                We can create seamless and outstanding mockups for your products
                </span>
              </div>
            </div>
            {/* service 3 */}
            <div className={styles.services_list_container}>
              <div className={styles.service_title}>
                <IoLogoHtml5 />
                <span>Web app development</span>
              </div>
              <div className={styles.service_description}>
                <span>
                  We can create seamless and outstanding portfolio for your personal brand
                </span>
              </div>
            </div>
            {/* service 4  */}
            <div className={styles.services_list_container}>
              <div className={styles.service_title}>
                <RiApps2Fill />
                <span>Software development</span>
              </div>
              <div className={styles.service_description}>
                <span>
                  We can bring any of your ideas to live with our amazing development team
                </span>
              </div>
            </div>
          </div>
          {/* <div className="services_carousel">
            <Image src={AI_service} width={300} height={500} style={{ borderRadius : "50px", objectFit : "cover"}} />
          </div> */}
        </div>
      </section>

      {/* testimonials  */}

      <section className={styles.testimonials}>
        <div className={styles.testimonials_title}>
          <h1>
            WHAT CLIENT SAYS <br></br><span> ABOUT OUR BUSINESS ?</span>
          </h1>
        </div>
        <div className={styles.testimonials_container}>
        <div className={styles.left_testimonials}>
          <div className={styles.client_container_first}>
            <div className="top">
              <Image
                src={Ai_client}
                width={250}
                height={250}
                alt="client"
                style={{ objectFit: "cover" }}
                className={styles.image_client}
              />
            </div>
            <div className="bottom">
              <Image
                src={Ai_client4}
                width={250}
                height={250}
                alt="client"
                style={{ objectFit: "cover" }}
                className={styles.image_client}
              />
            </div>
          </div>
          <div className={styles.client_container_second}>
            <div className="top">
              <Image
                src={Ai_client2}
                width={250}
                height={250}
                alt="client"
                style={{ objectFit: "cover" }}
                className={styles.image_client}
              />
            </div>
            <div className="bottom">
              <Image
                src={Ai_client3}
                width={250}
                height={250}
                alt="client"
                style={{ objectFit: "cover" }}
                className={styles.image_client}
              />
            </div>
          </div>
        </div>
        <div className={styles.right_testimonials}>
          <div className={styles.right_testimonials_container}>
            <div className={styles.name_char}>
              <span className={whisper.className}>N</span>
            </div>
            <div className={styles.feedback}>
              <p>
                Very happy to work with young talent, the team has very very
                strong technical skillsets in various domain and i appreciated.{" "}
              </p>
            </div>
            <div className={styles.holder_name}>
              <span>- Nandhagopal</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* need service  */}
      <section className={styles.need_service}>
        <div className={styles.about_need}>
          <h1>READY TO BUILD YOUR DIGITAL PRESENCE?</h1>
          <div className={styles.btn_call} onClick={() => handlePhoneButtonClick()}>
            <span>Schedule a call</span>
            <FaArrowRightLong />
          </div>
        </div>
      </section>

      {/* footer  */}

      <section className={styles.footer}>
        <div className={styles.layout_left}>
          <div className="footer_logo">
            <Image
              src={logo}
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="logo_des">
            <span>
              Digital agency with solid design and development expertise.<br></br> We
              build websites, mobile apps and more
            </span>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <p style={{textAlign : "center"}}>Contact us:</p>
        <div className={styles.social_links}>
          <div className={styles.link_container} onClick={() => handleWhatsappButtonClick()}>
            <FaWhatsapp />
          </div>
          <div className={styles.link_container} onClick={() => handleEmailButtonClick()}>
            <MdAlternateEmail />
          </div>
          <div className={styles.link_container} onClick={() => handlePhoneButtonClick()}>
            <MdOutlinePhone />
          </div>
          <Link href={"https://www.linkedin.com/in/santhosh-m-/"} target="_blank">
          <div className={styles.link_container}>
            <CiLinkedin />
          </div>
          </Link>
        </div>
    </main>
  );
}
