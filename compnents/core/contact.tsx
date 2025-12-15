import userData from "@/assets/mockData";
import { MdMailOutline } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div
      id="contact"
      className="page h-96 bg-secondary-background mt-6 sm:mt-10 p-8 sm:p-16"
    >
      <div className="container mx-auto flex flex-col h-full items-center justify-center text-center">
        <h3 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 sm:mb-10">
          Contact
        </h3>

        <div>
          <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed mb-6">
            Feel free to reach out. I'm always open to discussing new
            opportunities, collaborations, or just chatting about tech!
          </p>
          <span className="flex items-center justify-center text-foreground gap-2 mb-6">
            <MdMailOutline className="text-foreground" />
            {userData.contact.email}
          </span>
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl text-foreground">
            <Link href={userData.contact.linkedin!} target="_blank">
              <LiaLinkedinIn />
            </Link>
            <Link href={userData.contact.github!} target="_blank">
              <LiaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
