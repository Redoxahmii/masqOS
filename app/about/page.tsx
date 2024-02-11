import { Card, CardBody } from "@nextui-org/card";
import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import { GithubIcon } from "@/components/icons";
import { Code2, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex justify-center flex-col text-center gap-5 items-center">
      <h1 className="lg:text-6xl text-4xl tracking-tighter font-semibold">
        People behind <br />{" "}
        <span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8]  bg-clip-text text-transparent bg-gradient-to-b ">
          masqOS
        </span>
      </h1>
      <p className="text-default-600">
        This whole distro was created by only 2 developers.
      </p>
      <div className="flex lg:flex-row flex-col gap-4 mt-10">
        <div className="animate-fade-down">
          <Card className="lg:w-full">
            <CardBody>
              <User
                classNames={{
                  name: "text-lg font-semibold tracking-tight",
                }}
                description="Full Stack Developer"
                name="Muhammad Ahmed"
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
                  href="https://redoxahmii.vercel.app/"
                  rel="nooppener norefferer"
                  target="_blank"
                >
                  <Button isIconOnly variant="faded">
                    <Code2 className="text-default-500" />
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
          <Card className="lg:w-full">
            <CardBody>
              <User
                classNames={{
                  name: "text-lg font-semibold tracking-tight",
                }}
                name="Qasim Mehmood"
                description="Kernel Developer"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/16062298?v=4",
                }}
              />
              <div className="flex justify-around mt-4">
                <Link
                  href="https://github.com/qasim799"
                  rel="nooppener norefferer"
                  target="_blank"
                >
                  <Button isIconOnly variant="faded">
                    <GithubIcon className="text-default-500" />
                  </Button>
                </Link>
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
