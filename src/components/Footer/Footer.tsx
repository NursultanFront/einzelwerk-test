import Link from "next/link";
import {
  InstargamIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  ArrowWhiteIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Buttons/Button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="overflow-hidden py-14 relative bg-white bg-footer-gradient animate-gradient">
      <div className="container flex flex-col gap-32">
        <div className="flex items-start gap-10">
          <h2 className="text-8xl text-gray-900 ">
            Global Media <br />
            Production
          </h2>
          <Button
            variant="primary"
            className="p-4 rounded-full hover:-rotate-45"
          >
            <ArrowWhiteIcon />
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-6 text-gray-500">
            <div>GMP © 2023</div>
            <div className="flex items-center gap-4">
              <Link href="#">
                <InstargamIcon />
              </Link>
              <Link href="#">
                <LinkedinIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <YoutubeIcon />
              </Link>
            </div>
          </div>
          <div className="flex gap-5 text-gray-950">
            <Link href="#">Impressum</Link>
            <Link href="#">Datenschutz</Link>
            <Link href="#">Cookies erstellung</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
