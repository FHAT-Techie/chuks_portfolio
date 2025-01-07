import { Button } from "./FormElements";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function ContactUsSection() {
  return (
    <div

    style={{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px 16px",
        flexDirection:"column",
        gap:"16px"
    }}
    >
      <h1 className="sectionHeader">
        Transforming Ideas into Exceptional Designs and Functional Code.
      </h1>
      <p  
      style={{
        textAlign:"center"
      }}
      >
        Delivering seamless user experiences and reliable development solutions
        that drive success.
      </p>
      <Button
        buttonLink="https://about.me/chuks_omeifeukwu"
        buttonLabel="Contact Me"
        icon={faAddressBook}
      />
    </div>
  );
}
