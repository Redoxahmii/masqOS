import { Card, CardBody } from "@nextui-org/card";
import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import { GithubIcon } from "@/components/icons";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex justify-center flex-col text-center gap-5 items-center">
      <h1 className=" text-6xl tracking-tighter font-semibold">
        People behind <br />{" "}
        <span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8]  bg-clip-text text-transparent bg-gradient-to-b ">
          masqOS
        </span>
      </h1>
      <p className="text-default-600">
        This whole distro was created by only 2 developers.
      </p>
      <div className="flex gap-4 mt-10">
        <div className="animate-fade-down">
          <Card className="w-56">
            <CardBody>
              <User
                classNames={{
                  name: "text-lg font-semibold tracking-tight",
                }}
                name="Redox Ahmii"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/13983258?v=4",
                }}
              />
              <div className="flex justify-around mt-4">
                <Link
                  href="https://github.com/Redoxahmii"
                  rel="nooppener norefferer"
                  target="_blank"
                >
                  <Button isIconOnly variant="faded">
                    <GithubIcon className="text-default-500" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ahmed-mughal-a76706181/"
                  rel="nooppener norefferer"
                  target="_blank"
                >
                  <Button isIconOnly variant="faded">
                    <LinkedinIcon className="text-default-500" />
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className=" animate-fade-up">
          <Card className="w-56">
            <CardBody>
              <User
                classNames={{
                  name: "text-lg font-semibold tracking-tight",
                }}
                name="Qasim799"
                avatarProps={{
                  src: "https://pps.whatsapp.net/v/t61.24694-24/396602412_302783722517296_7800058457957874100_n.jpg?ccb=11-4&oh=01_AdTRtSOiSgAzBVlRCQtpTQVqLqRYBTiQ2mGbaA6LFYwTxw&oe=655E3A66&_nc_sid=e6ed6c&_nc_cat=108",
                }}
              />
              <div className="flex justify-around mt-4">
                <Button isIconOnly variant="faded">
                  <GithubIcon className="text-default-500" />
                </Button>
                <Button isIconOnly variant="faded">
                  <LinkedinIcon className="text-default-500" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
